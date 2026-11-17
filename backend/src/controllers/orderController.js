const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Restitue le stock déjà réservé lorsqu'une commande échoue en cours de création.
// Les transactions MongoDB exigeant un replica set, la compensation est faite à la main.
const releaseStock = (reservedItems) =>
  Promise.all(
    reservedItems.map(({ product, qty }) =>
      Product.updateOne({ _id: product }, { $inc: { stock: qty } }).catch((err) => {
        console.error(`Restitution du stock impossible pour le produit ${product}`, err);
      })
    )
  );

// Remet dans le panier les articles retirés au début d'une commande qui échoue.
const restoreCartItems = (userId, items) =>
  Cart.updateOne({ user: userId }, { $push: { items: { $each: items } } }).catch((err) => {
    console.error(`Restauration du panier impossible pour l'utilisateur ${userId}`, err);
  });

// @desc    Créer une commande
// @route   POST /api/orders
exports.createOrder = async (req, res, next) => {
  // Articles retirés du panier par cette requête, à remettre en cas d'échec
  let takenItems = null;
  let order = null;
  try {
    // Le panier est pris et vidé en une seule opération atomique : deux requêtes
    // simultanées ne peuvent pas transformer le même panier en deux commandes.
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id, 'items.0': { $exists: true } },
      { $set: { items: [] } },
      { new: false }
    );
    if (!cart) {
      return res.status(400).json({ message: 'Panier vide' });
    }
    takenItems = cart.items.map((item) => ({ product: item.product, qty: item.qty }));
    await cart.populate('items.product');

    // Un produit supprimé depuis son ajout au panier n'est plus peuplé (null)
    if (cart.items.some((item) => !item.product)) {
      await restoreCartItems(req.user._id, takenItems);
      return res.status(400).json({ message: "Un produit du panier n'est plus disponible" });
    }

    // Les prix viennent toujours de la base, jamais du client
    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      qty: item.qty,
      price: item.product.price,
    }));

    const totalPrice = orderItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    // Réservation du stock article par article : la condition $gte et le $inc
    // sont appliqués dans une seule opération atomique, ce qui empêche deux
    // commandes simultanées de faire passer le stock sous zéro.
    const reservedItems = [];
    try {
      for (const [index, item] of orderItems.entries()) {
        const updated = await Product.findOneAndUpdate(
          { _id: item.product, stock: { $gte: item.qty } },
          { $inc: { stock: -item.qty } },
          { new: true }
        );
        if (!updated) {
          await releaseStock(reservedItems);
          await restoreCartItems(req.user._id, takenItems);
          return res.status(409).json({
            message: `Stock insuffisant pour le produit « ${cart.items[index].product.name} »`,
            productId: item.product,
          });
        }
        reservedItems.push(item);
      }

      order = await Order.create({
        user: req.user._id,
        orderItems,
        totalPrice,
      });
    } catch (err) {
      await releaseStock(reservedItems);
      throw err;
    }

    await order.populate('orderItems.product');
    res.status(201).json(order);
  } catch (err) {
    // La commande n'a pas été créée : le client retrouve son panier
    if (takenItems && !order) {
      await restoreCartItems(req.user._id, takenItems);
    }
    next(err);
  }
};

// @desc    Récupérer toutes les commandes de l'utilisateur
// @route   GET /api/orders
exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('orderItems.product');
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

// @desc    Récupérer une commande par ID
// @route   GET /api/orders/:id
exports.getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');
    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }

    // Vérifier que l'utilisateur est le propriétaire ou un admin
    if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Accès refusé à cette commande' });
    }

    res.json(order);
  } catch (err) {
    next(err);
  }
};

// @desc    Récupérer toutes les commandes (admin)
// @route   GET /api/orders/all
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('orderItems.product');
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

// @desc    Mettre à jour le statut d'une commande (admin)
// @route   PUT /api/orders/:id/status
// Une commande annulée est définitive : son stock a été restitué, la rouvrir
// le rendrait incohérent. La condition status != 'cancelled' rend aussi
// l'annulation idempotente (le stock n'est restitué qu'une fois).
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, status: { $ne: 'cancelled' } },
      { status },
      { new: true, runValidators: true }
    );

    if (!order) {
      const existing = await Order.findById(req.params.id);
      if (!existing) {
        return res.status(404).json({ message: 'Commande non trouvée' });
      }
      // Déjà annulée : une nouvelle annulation ne change rien
      if (status === 'cancelled') {
        await existing.populate('orderItems.product');
        return res.json(existing);
      }
      return res.status(409).json({ message: 'Une commande annulée ne peut plus changer de statut' });
    }

    if (status === 'cancelled') {
      await releaseStock(order.orderItems);
    }

    await order.populate('orderItems.product');
    res.json(order);
  } catch (err) {
    next(err);
  }
};

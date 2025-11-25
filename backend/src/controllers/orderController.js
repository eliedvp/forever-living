const Order = require('../models/Order');
const Cart = require('../models/Cart');

// @desc    Créer une commande
// @route   POST /api/orders
exports.createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Panier vide' });
    }

    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      qty: item.qty,
      price: item.product.price,
    }));

    const totalPrice = orderItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    // Vider le panier après création de la commande
    cart.items = [];
    await cart.save();

    await order.populate('orderItems.product');
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Récupérer toutes les commandes de l'utilisateur
// @route   GET /api/orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('orderItems.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Récupérer une commande par ID
// @route   GET /api/orders/:id
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('orderItems.product');
    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }

    // Vérifier que l'utilisateur est le propriétaire ou un admin
    if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(401).json({ message: 'Accès non autorisé' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Récupérer toutes les commandes (admin)
// @route   GET /api/orders/all
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('orderItems.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Mettre à jour le statut d'une commande (admin)
// @route   PUT /api/orders/:id/status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate('orderItems.product');

    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { MAX_QTY_PER_ITEM } = require('../config/cart');

// @desc    Récupérer le panier de l'utilisateur
// @route   GET /api/cart
exports.getCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// @desc    Ajouter un produit au panier
// @route   POST /api/cart
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, qty } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    // Le plafond s'applique à la quantité cumulée, pas seulement à l'ajout courant
    const newQty = (existingItem ? existingItem.qty : 0) + (qty || 1);
    if (newQty > MAX_QTY_PER_ITEM) {
      return res
        .status(400)
        .json({ message: `Quantité maximale par article : ${MAX_QTY_PER_ITEM}` });
    }

    if (existingItem) {
      existingItem.qty = newQty;
    } else {
      cart.items.push({ product: productId, qty: qty || 1 });
    }

    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// @desc    Mettre à jour la quantité d'un produit dans le panier
// @route   PUT /api/cart/:itemId
exports.updateCartItem = async (req, res, next) => {
  try {
    const { qty } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Panier non trouvé' });
    }

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }

    item.qty = qty;
    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// @desc    Supprimer un produit du panier
// @route   DELETE /api/cart/:itemId
exports.removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Panier non trouvé' });
    }

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }

    item.deleteOne();
    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// @desc    Vider le panier
// @route   DELETE /api/cart
exports.clearCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Panier non trouvé' });
    }

    cart.items = [];
    await cart.save();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};


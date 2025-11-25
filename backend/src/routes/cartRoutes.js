const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const { addToCartValidator, updateCartItemValidator } = require('../validators/cartValidator');

router.get('/', protect, getCart);
router.post('/', protect, addToCartValidator, addToCart);
router.put('/:itemId', protect, updateCartItemValidator, updateCartItem);
router.delete('/:itemId', protect, removeFromCart);
router.delete('/', protect, clearCart);

module.exports = router;


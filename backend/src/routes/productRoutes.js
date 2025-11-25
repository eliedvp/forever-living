const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { createProductValidator, updateProductValidator } = require('../validators/productValidator');
const upload = require('../middleware/uploadProductMiddleware');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, admin, upload.single('image'), createProductValidator, createProduct);
router.put('/:id', protect, admin, upload.single('image'), updateProductValidator, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;


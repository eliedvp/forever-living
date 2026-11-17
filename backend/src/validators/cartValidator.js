const { body } = require('express-validator');
const validate = require('./validate');
const { MAX_QTY_PER_ITEM } = require('../config/cart');

exports.addToCartValidator = [
  body('productId').isMongoId().withMessage('productId invalide'),
  body('qty').optional().isInt({ min: 1, max: MAX_QTY_PER_ITEM })
    .withMessage(`qty doit être un entier entre 1 et ${MAX_QTY_PER_ITEM}`).toInt(),
  validate,
];

exports.updateCartItemValidator = [
  body('qty').isInt({ min: 1, max: MAX_QTY_PER_ITEM })
    .withMessage(`qty doit être un entier entre 1 et ${MAX_QTY_PER_ITEM}`).toInt(),
  validate,
];








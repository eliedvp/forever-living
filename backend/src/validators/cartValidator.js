const { body } = require('express-validator');
const validate = require('./validate');

exports.addToCartValidator = [
  body('productId').isMongoId().withMessage('productId invalide'),
  body('qty').optional().isInt({ min: 1 }).withMessage('qty doit être ≥ 1'),
  validate,
];

exports.updateCartItemValidator = [
  body('qty').isInt({ min: 1 }).withMessage('qty doit être ≥ 1'),
  validate,
];








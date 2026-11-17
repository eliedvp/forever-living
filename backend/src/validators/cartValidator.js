const { body } = require('express-validator');
const validate = require('./validate');

exports.addToCartValidator = [
  body('productId').isMongoId().withMessage('productId invalide'),
  body('qty').optional().isInt({ min: 1, max: 99 }).withMessage('qty doit être un entier entre 1 et 99').toInt(),
  validate,
];

exports.updateCartItemValidator = [
  body('qty').isInt({ min: 1, max: 99 }).withMessage('qty doit être un entier entre 1 et 99').toInt(),
  validate,
];








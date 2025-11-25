const { body } = require('express-validator');
const validate = require('./validate');

exports.createProductValidator = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  body('price').isFloat({ gt: 0 }).withMessage('Le prix doit être > 0'),
  body('stock').optional().isInt({ min: 0 }).withMessage('Le stock doit être ≥ 0'),
  body('category').optional().isMongoId().withMessage('category doit être un ObjectId'),
  validate,
];

exports.updateProductValidator = [
  body('name').optional().trim().notEmpty().withMessage('Nom invalide'),
  body('price').optional().isFloat({ gt: 0 }).withMessage('Prix invalide'),
  body('stock').optional().isInt({ min: 0 }).withMessage('Stock invalide'),
  body('category').optional().isMongoId().withMessage('category invalide'),
  validate,
];








const { body } = require('express-validator');
const validate = require('./validate');

exports.createCategoryValidator = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  validate,
];

exports.updateCategoryValidator = [
  body('name').optional().trim().notEmpty().withMessage('Nom invalide'),
  validate,
];





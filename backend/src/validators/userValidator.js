const { body } = require('express-validator');
const validate = require('./validate');

exports.registerValidator = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Mot de passe min 6 caractères'),
  validate,
];

exports.loginValidator = [
  body('email').isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').notEmpty().withMessage('Mot de passe requis'),
  validate,
];

exports.updateProfileValidator = [
  body('name').optional().trim().notEmpty().withMessage('Nom invalide'),
  body('email').optional().isEmail().withMessage('Email invalide').normalizeEmail(),
  body('password').optional().isLength({ min: 6 }).withMessage('Mot de passe min 6 caractères'),
  validate,
];








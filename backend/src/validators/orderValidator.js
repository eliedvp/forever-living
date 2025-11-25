const { body } = require('express-validator');
const validate = require('./validate');

exports.updateOrderStatusValidator = [
  body('status')
    .isIn(['pending', 'paid', 'shipped', 'delivered', 'cancelled'])
    .withMessage('Statut invalide'),
  validate,
];








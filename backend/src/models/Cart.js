const mongoose = require('mongoose');
const { MAX_QTY_PER_ITEM } = require('../config/cart');

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        qty: {
          type: Number,
          required: true,
          default: 1,
          min: [1, 'La quantité doit être au moins 1'],
          max: [MAX_QTY_PER_ITEM, `La quantité ne peut pas dépasser ${MAX_QTY_PER_ITEM}`],
          validate: { validator: Number.isInteger, message: 'La quantité doit être un entier' },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);


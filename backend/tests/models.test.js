// Validation des schémas Mongoose réels (validateSync : aucune base de données requise)
const mongoose = require('mongoose');
const Cart = require('../src/models/Cart');

const USER_ID = new mongoose.Types.ObjectId();
const PRODUCT_ID = new mongoose.Types.ObjectId();

const cartWithQty = (qty) => new Cart({ user: USER_ID, items: [{ product: PRODUCT_ID, qty }] });

describe('modèle Cart : quantité par article', () => {
  test.each([1, 50, 99])('accepte une quantité entière de %p', (qty) => {
    expect(cartWithQty(qty).validateSync()).toBeUndefined();
  });

  test.each([
    [0, 'La quantité doit être au moins 1'],
    [-2, 'La quantité doit être au moins 1'],
    [100, 'La quantité ne peut pas dépasser 99'],
    [1.5, 'La quantité doit être un entier'],
  ])('refuse une quantité de %p', (qty, message) => {
    const error = cartWithQty(qty).validateSync();
    expect(error).toBeDefined();
    expect(error.errors['items.0.qty'].message).toBe(message);
  });
});

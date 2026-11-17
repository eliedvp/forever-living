jest.mock('../src/models/User', () => require('./modelMocks').model());
jest.mock('../src/models/Order', () => require('./modelMocks').model());
jest.mock('../src/models/Cart', () => require('./modelMocks').model());
jest.mock('../src/models/Product', () => require('./modelMocks').model());
jest.mock('../src/models/Category', () => require('./modelMocks').model());

const fs = require('fs');
const path = require('path');
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');
const Order = require('../src/models/Order');
const Cart = require('../src/models/Cart');
const Product = require('../src/models/Product');
const Category = require('../src/models/Category');
const imageFileFilter = require('../src/middleware/imageFileFilter');
const { errorHandler } = require('../src/middleware/errorMiddleware');
const { resolveUploadPath, UPLOADS_ROOT } = require('../src/utils/uploadPath');
const { mockQuery, takenCart, tokenFor, users, USER_ID, OTHER_USER_ID, ADMIN_ID } = require('./helpers');

const auth = (id) => ({ Authorization: `Bearer ${tokenFor(id)}` });

beforeEach(() => {
  jest.resetAllMocks();
  User.findById.mockImplementation((id) => mockQuery(users[id] || null));
});

describe('PUT /api/users/profile', () => {
  const mockUserDocument = () => {
    const doc = {
      _id: USER_ID,
      name: 'Client',
      email: 'client@example.com',
      password: 'hash-existant',
      isAdmin: false,
      save: jest.fn().mockResolvedValue(undefined),
      toObject() {
        const { save, toObject, ...plain } = this;
        return { ...plain };
      },
    };
    // 1er appel : middleware protect ; 2e appel : contrôleur
    User.findById
      .mockImplementationOnce((id) => mockQuery(users[id]))
      .mockImplementationOnce(async () => doc);
    return doc;
  };

  test('ignore isAdmin : un client ne peut pas s\'auto-promouvoir administrateur', async () => {
    const doc = mockUserDocument();

    const res = await request(app)
      .put('/api/users/profile')
      .set(auth(USER_ID))
      .send({ name: 'Nouveau nom', isAdmin: true });

    expect(res.status).toBe(200);
    expect(doc.isAdmin).toBe(false);
    expect(res.body.isAdmin).toBe(false);
    expect(res.body.name).toBe('Nouveau nom');
    expect(doc.save).toHaveBeenCalled();
  });

  test('passe le nouveau mot de passe par save() (hachage) et ne le renvoie jamais', async () => {
    const doc = mockUserDocument();

    const res = await request(app)
      .put('/api/users/profile')
      .set(auth(USER_ID))
      .send({ password: 'nouveaumotdepasse' });

    expect(res.status).toBe(200);
    expect(doc.password).toBe('nouveaumotdepasse');
    expect(doc.save).toHaveBeenCalled();
    expect(User.findByIdAndUpdate).not.toHaveBeenCalled();
    expect(res.body.password).toBeUndefined();
  });

  test('GET /api/users/profile n\'expose pas le mot de passe (select -password)', async () => {
    const select = jest.fn().mockReturnValue(mockQuery(users[USER_ID]));
    User.findById
      .mockImplementationOnce((id) => mockQuery(users[id]))
      .mockImplementationOnce(() => ({ select }));

    const res = await request(app).get('/api/users/profile').set(auth(USER_ID));

    expect(res.status).toBe(200);
    expect(select).toHaveBeenCalledWith('-password');
  });
});

describe('commandes', () => {
  const order = { _id: '64c000000000000000000001', user: USER_ID, orderItems: [], totalPrice: 10 };

  test('un client ne peut pas lire la commande d\'un autre client', async () => {
    Order.findById.mockReturnValue(mockQuery(order));

    const res = await request(app).get(`/api/orders/${order._id}`).set(auth(OTHER_USER_ID));

    // Authentifié mais non propriétaire : 403 (401 est réservé au token absent ou invalide)
    expect(res.status).toBe(403);
    expect(res.body.message).toBe('Accès refusé à cette commande');
  });

  test('lire une commande sans token renvoie 401, pas 403', async () => {
    const res = await request(app).get(`/api/orders/${order._id}`);

    expect(res.status).toBe(401);
    expect(Order.findById).not.toHaveBeenCalled();
  });

  test.each([
    ['delete', '/api/users/64b000000000000000000002'],
    ['get', '/api/users/64b000000000000000000002'],
    ['delete', '/api/products/64e000000000000000000001'],
    ['put', '/api/products/64e000000000000000000001'],
    ['post', '/api/categories'],
    ['delete', '/api/categories/64f000000000000000000001'],
  ])('un client authentifié non administrateur reçoit 403 sur %s %s', async (method, url) => {
    const res = await request(app)[method](url).set(auth(USER_ID)).send({});

    expect(res.status).toBe(403);
    expect(res.body.message).toBe('Accès refusé, droits administrateur requis');
  });

  test('le propriétaire et un administrateur peuvent lire la commande', async () => {
    Order.findById.mockReturnValue(mockQuery(order));

    const asOwner = await request(app).get(`/api/orders/${order._id}`).set(auth(USER_ID));
    expect(asOwner.status).toBe(200);

    const asAdmin = await request(app).get(`/api/orders/${order._id}`).set(auth(ADMIN_ID));
    expect(asAdmin.status).toBe(200);
  });

  test('GET /api/orders ne renvoie que les commandes de l\'utilisateur connecté', async () => {
    Order.find.mockReturnValue(mockQuery([order]));

    await request(app).get('/api/orders').set(auth(USER_ID));

    expect(Order.find).toHaveBeenCalledWith({ user: USER_ID });
  });

  test('la liste complète et le changement de statut sont réservés aux administrateurs', async () => {
    const all = await request(app).get('/api/orders/all').set(auth(USER_ID));
    expect(all.status).toBe(403);

    const status = await request(app)
      .put(`/api/orders/${order._id}/status`)
      .set(auth(USER_ID))
      .send({ status: 'delivered' });
    expect(status.status).toBe(403);
    expect(Order.findOneAndUpdate).not.toHaveBeenCalled();
  });

  test('createOrder calcule le total à partir des prix en base, pas du client', async () => {
    const cart = takenCart(
      [
        { product: 'p1', qty: 2 },
        { product: 'p2', qty: 1 },
      ],
      { p1: { _id: 'p1', price: 12 }, p2: { _id: 'p2', price: 5 } }
    );
    Cart.findOneAndUpdate.mockResolvedValue(cart);
    Product.findOneAndUpdate.mockResolvedValue({ stock: 10 });
    Order.create.mockImplementation(async (data) => ({ ...data, populate: jest.fn() }));

    const res = await request(app)
      .post('/api/orders')
      .set(auth(USER_ID))
      .send({ totalPrice: 1, user: OTHER_USER_ID });

    expect(res.status).toBe(201);
    expect(Order.create).toHaveBeenCalledWith(
      expect.objectContaining({ user: USER_ID, totalPrice: 29 })
    );
  });
});

describe('changement de statut et annulation', () => {
  const ORDER_ID = '64c000000000000000000009';
  const orderDoc = (status) => ({
    _id: ORDER_ID,
    user: USER_ID,
    status,
    orderItems: [
      { product: 'p1', qty: 2, price: 12 },
      { product: 'p2', qty: 1, price: 5 },
    ],
    populate: jest.fn().mockResolvedValue(undefined),
  });
  const setStatus = (status) =>
    request(app).put(`/api/orders/${ORDER_ID}/status`).set(auth(ADMIN_ID)).send({ status });

  test('la transition est conditionnelle : une commande annulée est exclue de la mise à jour', async () => {
    Order.findOneAndUpdate.mockResolvedValue(orderDoc('paid'));

    const res = await setStatus('paid');

    expect(res.status).toBe(200);
    expect(Order.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: ORDER_ID, status: { $ne: 'cancelled' } },
      { status: 'paid' },
      { new: true, runValidators: true }
    );
    expect(Product.updateOne).not.toHaveBeenCalled();
  });

  test("deux annulations successives ne restituent le stock qu'une seule fois", async () => {
    Product.updateOne.mockResolvedValue({ modifiedCount: 1 });
    // 1re annulation : la transition a lieu ; 2e : la condition $ne échoue
    Order.findOneAndUpdate.mockResolvedValueOnce(orderDoc('cancelled')).mockResolvedValueOnce(null);
    Order.findById.mockResolvedValue(orderDoc('cancelled'));

    const first = await setStatus('cancelled');
    const second = await setStatus('cancelled');

    expect(first.status).toBe(200);
    expect(second.status).toBe(200);
    expect(second.body.status).toBe('cancelled');
    expect(Product.updateOne).toHaveBeenCalledTimes(2);
    expect(Product.updateOne).toHaveBeenCalledWith({ _id: 'p1' }, { $inc: { stock: 2 } });
    expect(Product.updateOne).toHaveBeenCalledWith({ _id: 'p2' }, { $inc: { stock: 1 } });
  });

  test('une commande annulée ne peut pas repasser dans un autre statut (409)', async () => {
    Order.findOneAndUpdate.mockResolvedValue(null);
    Order.findById.mockResolvedValue(orderDoc('cancelled'));

    const res = await setStatus('paid');

    expect(res.status).toBe(409);
    expect(res.body.message).toBe('Une commande annulée ne peut plus changer de statut');
    expect(Product.updateOne).not.toHaveBeenCalled();
  });

  test('renvoie 404 pour une commande inexistante', async () => {
    Order.findOneAndUpdate.mockResolvedValue(null);
    Order.findById.mockResolvedValue(null);

    const res = await setStatus('cancelled');

    expect(res.status).toBe(404);
    expect(Product.updateOne).not.toHaveBeenCalled();
  });
});

describe('stock à la création de commande', () => {
  const catalog = {
    p1: { _id: 'p1', name: 'Gel Aloe', price: 12 },
    p2: { _id: 'p2', name: 'Crème', price: 5 },
  };
  const rawItems = [
    { product: 'p1', qty: 2 },
    { product: 'p2', qty: 3 },
  ];
  const buildCart = () => takenCart(rawItems, catalog);
  const restoredCart = { $push: { items: { $each: rawItems } } };

  test('prend et vide le panier en une seule opération atomique', async () => {
    Cart.findOneAndUpdate.mockResolvedValue(buildCart());
    Product.findOneAndUpdate.mockResolvedValue({ stock: 10 });
    Order.create.mockImplementation(async (data) => ({ ...data, populate: jest.fn() }));

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(201);
    expect(Cart.findOneAndUpdate).toHaveBeenCalledWith(
      { user: USER_ID, 'items.0': { $exists: true } },
      { $set: { items: [] } },
      { new: false }
    );
    expect(Cart.updateOne).not.toHaveBeenCalled();
  });

  test('une seconde commande simultanée trouve le panier déjà pris (400 Panier vide)', async () => {
    Cart.findOneAndUpdate.mockResolvedValue(null);

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Panier vide');
    expect(Product.findOneAndUpdate).not.toHaveBeenCalled();
    expect(Order.create).not.toHaveBeenCalled();
  });

  test('décrémente le stock de chaque article de façon atomique et conditionnelle', async () => {
    Cart.findOneAndUpdate.mockResolvedValue(buildCart());
    Product.findOneAndUpdate.mockResolvedValue({ stock: 10 });
    Order.create.mockImplementation(async (data) => ({ ...data, populate: jest.fn() }));

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(201);
    expect(Product.findOneAndUpdate).toHaveBeenCalledTimes(2);
    expect(Product.findOneAndUpdate).toHaveBeenNthCalledWith(
      1,
      { _id: 'p1', stock: { $gte: 2 } },
      { $inc: { stock: -2 } },
      { new: true }
    );
    expect(Product.findOneAndUpdate).toHaveBeenNthCalledWith(
      2,
      { _id: 'p2', stock: { $gte: 3 } },
      { $inc: { stock: -3 } },
      { new: true }
    );
    expect(Product.updateOne).not.toHaveBeenCalled();
  });

  test('stock insuffisant : 409, stock déjà réservé restitué et panier restauré', async () => {
    Cart.findOneAndUpdate.mockResolvedValue(buildCart());
    // p1 réservé, p2 en rupture (la condition $gte n'est pas satisfaite)
    Product.findOneAndUpdate.mockResolvedValueOnce({ stock: 8 }).mockResolvedValueOnce(null);
    Product.updateOne.mockResolvedValue({ modifiedCount: 1 });
    Cart.updateOne.mockResolvedValue({ modifiedCount: 1 });

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(409);
    expect(res.body.message).toBe('Stock insuffisant pour le produit « Crème »');
    expect(res.body.productId).toBe('p2');
    expect(Product.updateOne).toHaveBeenCalledTimes(1);
    expect(Product.updateOne).toHaveBeenCalledWith({ _id: 'p1' }, { $inc: { stock: 2 } });
    expect(Order.create).not.toHaveBeenCalled();
    expect(Cart.updateOne).toHaveBeenCalledTimes(1);
    expect(Cart.updateOne).toHaveBeenCalledWith({ user: USER_ID }, restoredCart);
  });

  test('échec de création : stock restitué, panier restauré et 500 générique', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    Cart.findOneAndUpdate.mockResolvedValue(buildCart());
    Product.findOneAndUpdate.mockResolvedValue({ stock: 10 });
    Product.updateOne.mockResolvedValue({ modifiedCount: 1 });
    Cart.updateOne.mockResolvedValue({ modifiedCount: 1 });
    Order.create.mockRejectedValue(new Error('écriture impossible'));

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(500);
    expect(res.body.message).toBe('Erreur serveur');
    expect(Product.updateOne).toHaveBeenCalledWith({ _id: 'p1' }, { $inc: { stock: 2 } });
    expect(Product.updateOne).toHaveBeenCalledWith({ _id: 'p2' }, { $inc: { stock: 3 } });
    expect(Cart.updateOne).toHaveBeenCalledTimes(1);
    expect(Cart.updateOne).toHaveBeenCalledWith({ user: USER_ID }, restoredCart);
    console.error.mockRestore();
  });

  test("produit supprimé : 400 et panier restauré avec ses identifiants d'origine", async () => {
    Cart.findOneAndUpdate.mockResolvedValue(takenCart([{ product: 'p-supprime', qty: 1 }], catalog));
    Cart.updateOne.mockResolvedValue({ modifiedCount: 1 });

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Un produit du panier n'est plus disponible");
    expect(Product.findOneAndUpdate).not.toHaveBeenCalled();
    expect(Order.create).not.toHaveBeenCalled();
    expect(Cart.updateOne).toHaveBeenCalledWith(
      { user: USER_ID },
      { $push: { items: { $each: [{ product: 'p-supprime', qty: 1 }] } } }
    );
  });
});

describe('panier', () => {
  test('le panier est toujours celui de l\'utilisateur connecté', async () => {
    Cart.findOne.mockReturnValue(mockQuery({ user: USER_ID, items: [] }));

    await request(app).get('/api/cart').set(auth(USER_ID));

    expect(Cart.findOne).toHaveBeenCalledWith({ user: USER_ID });
  });

  test('supprimer un article absent renvoie 404 au lieu d\'une erreur serveur', async () => {
    Cart.findOne.mockResolvedValue({ items: { id: () => null } });

    const res = await request(app).delete('/api/cart/64d000000000000000000001').set(auth(USER_ID));

    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Article non trouvé');
  });

  test('refuse une quantité nulle ou négative', async () => {
    const res = await request(app)
      .post('/api/cart')
      .set(auth(USER_ID))
      .send({ productId: '64e000000000000000000001', qty: -3 });

    expect(res.status).toBe(400);
    expect(Product.findById).not.toHaveBeenCalled();
  });

  test('une quantité envoyée en chaîne est convertie en nombre avant l\x27addition', async () => {
    const productId = '64e000000000000000000001';
    const cart = {
      items: [{ product: productId, qty: 2 }],
      save: jest.fn().mockResolvedValue(undefined),
      populate: jest.fn().mockResolvedValue(undefined),
    };
    Product.findById.mockResolvedValue({ _id: productId });
    Cart.findOne.mockResolvedValue(cart);

    const res = await request(app).post('/api/cart').set(auth(USER_ID)).send({ productId, qty: '5' });

    expect(res.status).toBe(200);
    expect(cart.items[0].qty).toBe(7);
  });

  test('refuse une quantité supérieure à 99', async () => {
    const res = await request(app)
      .post('/api/cart')
      .set(auth(USER_ID))
      .send({ productId: '64e000000000000000000001', qty: 100 });

    expect(res.status).toBe(400);
    expect(Product.findById).not.toHaveBeenCalled();
  });

  test('refuse un ajout qui porterait la quantité cumulée d\x27un article au-delà de 99', async () => {
    const productId = '64e000000000000000000001';
    const cart = {
      items: [{ product: productId, qty: 98 }],
      save: jest.fn().mockResolvedValue(undefined),
      populate: jest.fn().mockResolvedValue(undefined),
    };
    Product.findById.mockResolvedValue({ _id: productId });
    Cart.findOne.mockResolvedValue(cart);

    const res = await request(app).post('/api/cart').set(auth(USER_ID)).send({ productId, qty: 2 });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Quantité maximale par article : 99');
    expect(cart.items[0].qty).toBe(98);
    expect(cart.save).not.toHaveBeenCalled();
  });

  test('accepte un ajout qui atteint exactement 99 au cumul', async () => {
    const productId = '64e000000000000000000001';
    const cart = {
      items: [{ product: productId, qty: 98 }],
      save: jest.fn().mockResolvedValue(undefined),
      populate: jest.fn().mockResolvedValue(undefined),
    };
    Product.findById.mockResolvedValue({ _id: productId });
    Cart.findOne.mockResolvedValue(cart);

    const res = await request(app).post('/api/cart').set(auth(USER_ID)).send({ productId, qty: 1 });

    expect(res.status).toBe(200);
    expect(cart.items[0].qty).toBe(99);
  });

  test('refuse une mise à jour de quantité supérieure à 99', async () => {
    const res = await request(app)
      .put('/api/cart/64d000000000000000000001')
      .set(auth(USER_ID))
      .send({ qty: 100 });

    expect(res.status).toBe(400);
    expect(Cart.findOne).not.toHaveBeenCalled();
  });
});

describe('uploads d\'images', () => {
  const filter = (originalname, mimetype) =>
    new Promise((resolve) => {
      imageFileFilter({}, { originalname, mimetype }, (err, accepted) => resolve({ err, accepted }));
    });

  test.each([
    ['photo.png', 'image/png'],
    ['photo.JPG', 'image/jpeg'],
    ['photo.webp', 'image/webp'],
  ])('accepte %s (%s)', async (name, mime) => {
    const { err, accepted } = await filter(name, mime);
    expect(err).toBeNull();
    expect(accepted).toBe(true);
  });

  test.each([
    ['image.svg', 'image/svg+xml'],
    ['page.html', 'text/html'],
    ['photo.png', 'text/html'],
    ['photo.jpgx', 'image/jpeg'],
    ['photo.png', 'image/jpeg'],
  ])('refuse %s (%s)', async (name, mime) => {
    const { err } = await filter(name, mime);
    expect(err).toBeInstanceOf(Error);
    expect(err.status).toBe(400);
  });

  test('POST /api/products refuse un fichier non image avec une erreur 400', async () => {
    const res = await request(app)
      .post('/api/products')
      .set(auth(ADMIN_ID))
      .field('name', 'Produit')
      .field('price', '10')
      .attach('image', Buffer.from('<svg></svg>'), { filename: 'x.svg', contentType: 'image/svg+xml' });

    expect(res.status).toBe(400);
    expect(Product.create).not.toHaveBeenCalled();
  });

  test('POST /api/products enregistre une image valide dans uploads/products', async () => {
    Product.create.mockImplementation(async (data) => data);

    const res = await request(app)
      .post('/api/products')
      .set(auth(ADMIN_ID))
      .field('name', 'Produit')
      .field('price', '10')
      .attach('image', Buffer.from([0x89, 0x50, 0x4e, 0x47]), { filename: 'x.png', contentType: 'image/png' });

    expect(res.status).toBe(201);
    expect(res.body.image).toMatch(/^\/uploads\/products\/product-.+\.png$/);

    const savedFile = resolveUploadPath(res.body.image);
    expect(fs.existsSync(savedFile)).toBe(true);
    fs.unlinkSync(savedFile);
  });

  test('POST /api/products ne transmet au modèle que les champs autorisés', async () => {
    Product.create.mockImplementation(async (data) => data);

    const res = await request(app)
      .post('/api/products')
      .set(auth(ADMIN_ID))
      .send({
        name: 'Gel Aloe',
        price: 20,
        stock: 5,
        description: 'Gel',
        rating: 5,
        numReviews: 1000,
        image: '/uploads/../../app.js',
        _id: '64e0000000000000000000ff',
        $set: { price: 0 },
      });

    expect(res.status).toBe(201);
    expect(Product.create).toHaveBeenCalledWith({ name: 'Gel Aloe', price: 20, stock: 5, description: 'Gel' });
  });

  test('PUT /api/products/:id ignore les opérateurs MongoDB et champs non autorisés', async () => {
    const productId = '64e000000000000000000001';
    Product.findById.mockResolvedValue({ _id: productId, name: 'Gel Aloe' });
    Product.findByIdAndUpdate.mockReturnValue(mockQuery({ _id: productId, price: 25 }));

    const res = await request(app)
      .put(`/api/products/${productId}`)
      .set(auth(ADMIN_ID))
      .send({ price: 25, $inc: { stock: 1000 }, $set: { rating: 5 }, numReviews: 3 });

    expect(res.status).toBe(200);
    expect(Product.findByIdAndUpdate).toHaveBeenCalledWith(
      productId,
      { price: 25 },
      { new: true, runValidators: true }
    );
  });

  test('POST /api/categories ne transmet au modèle que le nom et la description', async () => {
    Category.create.mockImplementation(async (data) => data);

    const res = await request(app)
      .post('/api/categories')
      .set(auth(ADMIN_ID))
      .send({ name: 'Soins', description: 'Visage', image: 'http://exemple.test/x.png', $set: { name: 'x' } });

    expect(res.status).toBe(201);
    expect(Category.create).toHaveBeenCalledWith({ name: 'Soins', description: 'Visage' });
  });

  test('POST /api/products est refusé à un client (403)', async () => {
    const res = await request(app).post('/api/products').set(auth(USER_ID)).send({ name: 'P', price: 1 });
    expect(res.status).toBe(403);
  });

  test('resolveUploadPath n\'autorise que des chemins internes au dossier uploads', () => {
    expect(resolveUploadPath('/uploads/products/a.png')).toBe(path.join(UPLOADS_ROOT, 'products', 'a.png'));
    expect(resolveUploadPath('/uploads/../app.js')).toBeNull();
    expect(resolveUploadPath('/uploads/../../../etc/passwd')).toBeNull();
    expect(resolveUploadPath('/etc/passwd')).toBeNull();
    expect(resolveUploadPath('')).toBeNull();
    expect(resolveUploadPath(undefined)).toBeNull();
  });
});

describe('erreurs serveur', () => {
  const fakeRes = () => {
    const res = { statusCode: 200 };
    res.status = jest.fn((code) => {
      res.statusCode = code;
      return res;
    });
    res.json = jest.fn();
    return res;
  };

  test('un contrôleur renvoie un message générique pour une erreur 500', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    Product.find.mockImplementation(() => {
      throw new Error('détail interne MongoDB');
    });

    const res = await request(app).get('/api/products');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ message: 'Erreur serveur', stack: null });
    expect(console.error).toHaveBeenCalled();
    console.error.mockRestore();
  });

  test('createOrder ne divulgue pas le message d\x27une erreur interne (500 générique)', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    Cart.findOneAndUpdate.mockImplementation(() => {
      throw new Error('détail interne MongoDB');
    });

    const res = await request(app).post('/api/orders').set(auth(USER_ID));

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ message: 'Erreur serveur', stack: null });
    expect(JSON.stringify(res.body)).not.toContain('MongoDB');
    console.error.mockRestore();
  });

  test('une erreur d\x27écriture du panier renvoie 500 générique et non plus le message brut', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    Product.findById.mockRejectedValue(new Error('connexion perdue vers mongo:27017'));

    const res = await request(app)
      .post('/api/cart')
      .set(auth(USER_ID))
      .send({ productId: '64e000000000000000000001', qty: 1 });

    expect(res.status).toBe(500);
    expect(res.body.message).toBe('Erreur serveur');
    console.error.mockRestore();
  });

  test('un identifiant mal formé (CastError) renvoie 400 sans détail Mongoose', async () => {
    Product.findById.mockImplementation(() => {
      throw Object.assign(new Error('Cast to ObjectId failed for value "abc" at path "_id"'), {
        name: 'CastError',
      });
    });

    const res = await request(app).get('/api/products/abc');

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Identifiant ou valeur invalide');
  });

  test('une erreur de validation Mongoose renvoie 400 avec le détail des champs', () => {
    const res = fakeRes();
    const err = Object.assign(new Error('Product validation failed'), {
      name: 'ValidationError',
      errors: { price: { path: 'price', message: 'Path `price` is required.' } },
    });

    errorHandler(err, {}, res, () => {});

    expect(res.statusCode).toBe(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Données invalides',
      errors: [{ path: 'price', msg: 'Path `price` is required.' }],
      stack: null,
    });
  });

  test('une clé dupliquée (E11000) renvoie 409 sans exposer l\x27index', () => {
    const res = fakeRes();
    const err = Object.assign(new Error('E11000 duplicate key error collection: test.users index: email_1'), {
      code: 11000,
    });

    errorHandler(err, {}, res, () => {});

    expect(res.statusCode).toBe(409);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cette valeur est déjà utilisée', stack: null });
  });

  test.each([201, 302])(
    'un statut préréglé %i ne fait ni passer l\x27erreur pour un succès ni fuiter son message',
    (preset) => {
      jest.spyOn(console, 'error').mockImplementation(() => {});
      const res = fakeRes();
      res.statusCode = preset;

      errorHandler(new Error('détail interne'), {}, res, () => {});

      expect(res.statusCode).toBe(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Erreur serveur', stack: null });
      console.error.mockRestore();
    }
  );

  test('une erreur 4xx marquée expose === false renvoie un message générique', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const res = fakeRes();
    const err = Object.assign(new Error('détail interne'), { status: 400, expose: false });

    errorHandler(err, {}, res, () => {});

    expect(res.statusCode).toBe(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Erreur serveur', stack: null });
    console.error.mockRestore();
  });

  test('si les en-têtes sont déjà envoyés, l\x27erreur est déléguée à Express', () => {
    const res = fakeRes();
    res.headersSent = true;
    const next = jest.fn();
    const err = new Error('flux interrompu');

    errorHandler(err, {}, res, next);

    expect(next).toHaveBeenCalledWith(err);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('un JSON mal formé renvoie 400 avec un message générique', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send('{"email": ');

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Corps de requête JSON invalide');
  });

  test('le gestionnaire d\x27erreurs ne renvoie ni stack ni détail hors développement', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const res = fakeRes();

    errorHandler(new Error('détail interne'), {}, res, () => {});

    expect(res.statusCode).toBe(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Erreur serveur', stack: null });
    console.error.mockRestore();
  });

  test('le gestionnaire d\x27erreurs renvoie la stack uniquement en développement', () => {
    const previousEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const res = fakeRes();
    const err = new Error('détail interne');

    try {
      errorHandler(err, {}, res, () => {});
    } finally {
      process.env.NODE_ENV = previousEnv;
      console.error.mockRestore();
    }

    expect(res.json).toHaveBeenCalledWith({ message: 'détail interne', stack: err.stack });
  });

  test('une route inconnue renvoie 404 sans stack', async () => {
    const res = await request(app).get('/api/inexistante');

    expect(res.status).toBe(404);
    expect(res.body.stack).toBeNull();
  });
});

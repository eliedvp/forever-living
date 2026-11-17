jest.mock('../src/models/User', () => require('./modelMocks').model());
jest.mock('../src/models/Order', () => require('./modelMocks').model());
jest.mock('../src/models/Cart', () => require('./modelMocks').model());
jest.mock('../src/models/Product', () => require('./modelMocks').model());
jest.mock('../src/models/Category', () => require('./modelMocks').model());

const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');
const { protect } = require('../src/middleware/authMiddleware');
const { admin } = require('../src/middleware/adminMiddleware');
const { mockQuery, tokenFor, users, USER_ID, ADMIN_ID } = require('./helpers');

beforeEach(() => {
  jest.resetAllMocks();
  User.findById.mockImplementation((id) => mockQuery(users[id] || null));
});

describe('middleware protect', () => {
  test('refuse une requête sans token (401)', async () => {
    const res = await request(app).get('/api/users/profile');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Accès refusé, aucun token');
  });

  test('refuse un en-tête Authorization qui n\'est pas de type Bearer (401)', async () => {
    const res = await request(app).get('/api/users/profile').set('Authorization', 'Basic abc');
    expect(res.status).toBe(401);
  });

  test('refuse un token mal formé (401)', async () => {
    const res = await request(app).get('/api/users/profile').set('Authorization', 'Bearer pas-un-jwt');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Token invalide ou expiré');
  });

  test('refuse un token signé avec un autre secret (401)', async () => {
    const jwt = require('jsonwebtoken');
    const forged = jwt.sign({ id: ADMIN_ID }, 'mauvais-secret');
    const res = await request(app).get('/api/users/profile').set('Authorization', `Bearer ${forged}`);
    expect(res.status).toBe(401);
  });

  test('refuse un token expiré (401)', async () => {
    const expired = tokenFor(USER_ID, { expiresIn: -10 });
    const res = await request(app).get('/api/users/profile').set('Authorization', `Bearer ${expired}`);
    expect(res.status).toBe(401);
  });

  test('refuse un token valide dont l\'utilisateur n\'existe plus (401)', async () => {
    const res = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${tokenFor('64b0000000000000000000ff')}`);
    expect(res.status).toBe(401);
  });

  test('accepte un token valide et expose req.user', async () => {
    const req = { headers: { authorization: `Bearer ${tokenFor(USER_ID)}` } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    await protect(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(res.status).not.toHaveBeenCalled();
    expect(req.user).toEqual(users[USER_ID]);
  });
});

describe('middleware admin', () => {
  const run = (user) => {
    const req = { user };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    admin(req, res, next);
    return { res, next };
  };

  test('laisse passer un administrateur', () => {
    const { res, next } = run({ isAdmin: true });
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('refuse un utilisateur non administrateur (403)', () => {
    const { res, next } = run({ isAdmin: false });
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
  });

  test('refuse une requête sans utilisateur (403)', () => {
    const { res, next } = run(undefined);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
  });

  test('protège GET /api/users : 403 pour un client, 200 pour un admin', async () => {
    User.find.mockReturnValue(mockQuery([users[USER_ID]]));

    const asClient = await request(app).get('/api/users').set('Authorization', `Bearer ${tokenFor(USER_ID)}`);
    expect(asClient.status).toBe(403);

    const asAdmin = await request(app).get('/api/users').set('Authorization', `Bearer ${tokenFor(ADMIN_ID)}`);
    expect(asAdmin.status).toBe(200);
    expect(asAdmin.body).toHaveLength(1);
  });
});

describe('POST /api/auth/register', () => {
  test('ignore isAdmin envoyé dans le body et ne renvoie pas le mot de passe', async () => {
    User.findOne.mockResolvedValue(null);
    User.create.mockImplementation(async (data) => ({ _id: USER_ID, ...data, isAdmin: false }));

    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Client', email: 'client@example.com', password: 'motdepasse', isAdmin: true });

    expect(res.status).toBe(201);
    expect(User.create).toHaveBeenCalledWith({
      name: 'Client',
      email: 'client@example.com',
      password: 'motdepasse',
    });
    expect(res.body.password).toBeUndefined();
    expect(res.body.token).toEqual(expect.any(String));
  });
});

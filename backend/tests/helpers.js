const jwt = require('jsonwebtoken');

// Simule une requête Mongoose chaînable (select/populate) et "awaitable"
const mockQuery = (value) => {
  const query = {
    select: () => query,
    populate: () => query,
    then: (resolve, reject) => Promise.resolve(value).then(resolve, reject),
  };
  return query;
};

const tokenFor = (id, options = {}) => jwt.sign({ id }, process.env.JWT_SECRET, options);

const USER_ID = '64b000000000000000000001';
const OTHER_USER_ID = '64b000000000000000000002';
const ADMIN_ID = '64b000000000000000000003';

const users = {
  [USER_ID]: { _id: USER_ID, name: 'Client', email: 'client@example.com', isAdmin: false },
  [OTHER_USER_ID]: { _id: OTHER_USER_ID, name: 'Autre', email: 'autre@example.com', isAdmin: false },
  [ADMIN_ID]: { _id: ADMIN_ID, name: 'Admin', email: 'admin@example.com', isAdmin: true },
};

module.exports = { mockQuery, tokenFor, users, USER_ID, OTHER_USER_ID, ADMIN_ID };

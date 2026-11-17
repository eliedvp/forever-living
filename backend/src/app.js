const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');

// Origines CORS autorisées : liste séparée par des virgules dans CORS_ORIGIN.
// Sans configuration, toutes les origines sont acceptées (comportement historique).
const buildCorsOptions = () => {
  const origins = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  return origins.length > 0 ? { origin: origins } : {};
};

// Initialisation Express
const app = express();

// Middlewares globaux
app.use(express.json());
app.use(cors(buildCorsOptions()));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Servir les fichiers statiques (images uploadées)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Route de santé
app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes principales
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

// Gestion des erreurs
app.use(notFound);
app.use(errorHandler);

module.exports = app;

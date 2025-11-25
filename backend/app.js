const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./src/config/db');
const { errorHandler, notFound } = require('./src/middleware/errorMiddleware');

// Chargement des variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

// Initialisation Express
const app = express();

// Middlewares globaux
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Servir les fichiers statiques (images uploadées)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route de santé
app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes principales
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/categories', require('./src/routes/categoryRoutes'));
app.use('/api/orders', require('./src/routes/orderRoutes'));
app.use('/api/cart', require('./src/routes/cartRoutes'));

// Gestion des erreurs
app.use(notFound);
app.use(errorHandler);

// Lancement du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port http://localhost:${PORT}`));

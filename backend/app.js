const dotenv = require('dotenv');

// Chargement des variables d'environnement
dotenv.config();

// Le secret JWT est indispensable : sans lui, aucun token ne peut être signé ni vérifié.
if (!process.env.JWT_SECRET) {
  console.error(
    "Erreur de configuration : la variable d'environnement JWT_SECRET est absente. " +
      'Définissez-la dans backend/.env (voir backend/.env.example) puis relancez le serveur.'
  );
  process.exit(1);
}

const connectDB = require('./src/config/db');
const app = require('./src/app');

// Connexion à MongoDB
connectDB();

// Lancement du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port http://localhost:${PORT}`));

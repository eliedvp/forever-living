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

// Un secret trop court (ou laissé à la valeur d'exemple) rend les jetons JWT faciles à forger.
const JWT_SECRET_MIN_LENGTH = 32;
const JWT_SECRET_PLACEHOLDER = 'remplacer_par_une_valeur_aleatoire_longue_de_32_caracteres_minimum';
if (process.env.JWT_SECRET.length < JWT_SECRET_MIN_LENGTH || process.env.JWT_SECRET === JWT_SECRET_PLACEHOLDER) {
  console.error(
    `Erreur de configuration : JWT_SECRET doit contenir au moins ${JWT_SECRET_MIN_LENGTH} caractères ` +
      "et ne pas reprendre la valeur d'exemple de backend/.env.example. " +
      "Générez-en un avec : node -e \"console.log(require('crypto').randomBytes(48).toString('hex'))\""
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

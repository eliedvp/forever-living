# Forever Living – Boutique e-commerce MERN

Application e-commerce full stack (MongoDB, Express, React, Node.js) dédiée aux produits Forever Living à base d'Aloe Vera : API REST sécurisée par JWT et interface React avec espace client et back-office.

![CI](https://github.com/eliedvp/forever-living/actions/workflows/ci.yml/badge.svg)

## Fonctionnalités

**API (backend)**

- Inscription et connexion avec mots de passe hachés (bcrypt) et jetons JWT (validité 30 jours).
- Rôles utilisateur / administrateur : les routes de gestion sont protégées par deux middlewares (`protect`, `admin`).
- Produits et catégories : lecture publique, création / modification / suppression réservées aux administrateurs, avec upload d'image (JPEG, PNG, GIF, WebP, 5 Mo max).
- Panier persistant par utilisateur : ajout, modification de quantité, suppression d'article, vidage.
- Commandes : création à partir du panier (prix et total recalculés côté serveur), historique personnel, consultation limitée au propriétaire ou à un administrateur, liste globale et changement de statut pour l'administrateur.
- Validation des entrées avec `express-validator` et gestion centralisée des erreurs.

**Interface (frontend)**

- Pages client : accueil, boutique, catalogue, panier (conservé dans le `localStorage`), paiement, contact, à propos.
- Back-office : gestion des produits et des catégories connectée à l'API (CRUD avec upload d'image).
- Tableau de bord, analytics, commandes et utilisateurs : écrans d'administration présents sous forme de maquettes, pas encore reliés à l'API.

## Stack technique

| Couche | Technologies |
| --- | --- |
| Backend | Node.js, Express 4, Mongoose 8 (MongoDB), JSON Web Token, bcryptjs, Multer, express-validator, CORS, Morgan |
| Frontend | React 19, React Router 7, Bootstrap 5, Sass, Chart.js, ApexCharts, SweetAlert2 |
| Tests | Jest + Supertest (backend), React Testing Library / Jest via `react-scripts` (frontend) |
| CI | GitHub Actions (Node 20) |

## Architecture

```
forever-living/
├── backend/
│   ├── app.js                 # Point d'entrée : variables d'env, connexion MongoDB, démarrage
│   ├── src/
│   │   ├── app.js             # Application Express (middlewares, routes, erreurs)
│   │   ├── config/            # Connexion MongoDB
│   │   ├── controllers/       # Logique métier (auth, produits, catégories, panier, commandes, utilisateurs)
│   │   ├── middleware/        # Auth JWT, rôle admin, uploads, gestion d'erreurs
│   │   ├── models/            # Schémas Mongoose
│   │   ├── routes/            # Définition des routes /api/*
│   │   ├── utils/             # Génération de token, chemins d'upload
│   │   └── validators/        # Règles express-validator
│   ├── tests/                 # Tests Jest + Supertest (modèles mockés, sans base de données)
│   └── .env.example
├── frontend/
│   ├── public/                # HTML et assets du thème client
│   └── src/
│       ├── api/               # Services d'appel à l'API
│       ├── components/        # Layouts client et admin
│       ├── context/           # Contexte d'authentification et panier
│       └── pages/             # Pages client et admin
└── .github/workflows/ci.yml
```

## Installation et lancement

Prérequis : Node.js 20 ou supérieur, une instance MongoDB (locale ou distante).

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # puis renseigner les valeurs
npm run dev            # ou : npm start
```

Variables d'environnement (`backend/.env`) :

| Variable | Rôle |
| --- | --- |
| `PORT` | Port de l'API (5001 par défaut) |
| `MONGO_URI` | Chaîne de connexion MongoDB |
| `JWT_SECRET` | Secret de signature des jetons, **obligatoire** : le serveur refuse de démarrer sans lui |
| `CORS_ORIGIN` | Optionnel : origines autorisées, séparées par des virgules (toutes si vide) |
| `NODE_ENV` | Mettre `production` en production pour masquer les traces d'erreur dans les réponses |

L'API répond sur `http://localhost:5001` ; les images uploadées sont servies depuis `/uploads`.

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

L'interface est servie sur `http://localhost:3000`. L'URL de l'API peut être modifiée avec la variable `REACT_APP_API_URL` (par défaut `http://localhost:5001/api`).

La carte Google Maps de la page contact n'est chargée que si une clé est fournie via `window.GOOGLE_MAPS_API_KEY` (aucune clé n'est versionnée).

## Tests

```bash
# Backend : middlewares d'authentification et d'administration, règles d'accès
# aux commandes et au panier, mise à jour du profil, validation des uploads
cd backend && npm test

# Frontend
cd frontend && npm test -- --watchAll=false
```

Les tests backend mockent les modèles Mongoose : aucune base MongoDB n'est nécessaire. Ils sont exécutés automatiquement par GitHub Actions à chaque push et pull request.

## Endpoints principaux de l'API

Préfixe : `/api`. « Auth » = en-tête `Authorization: Bearer <token>` requis ; « Admin » = compte administrateur requis.

| Méthode | Route | Accès | Description |
| --- | --- | --- | --- |
| POST | `/auth/register` | Public | Créer un compte |
| POST | `/auth/login` | Public | Se connecter et obtenir un token |
| GET | `/users/profile` | Auth | Consulter son profil |
| PUT | `/users/profile` | Auth | Modifier nom, email ou mot de passe |
| GET | `/users` | Admin | Lister les utilisateurs |
| GET | `/users/:id` | Admin | Consulter un utilisateur |
| DELETE | `/users/:id` | Admin | Supprimer un utilisateur |
| GET | `/products` | Public | Lister les produits |
| GET | `/products/:id` | Public | Détail d'un produit |
| POST | `/products` | Admin | Créer un produit (multipart, champ `image`) |
| PUT | `/products/:id` | Admin | Modifier un produit |
| DELETE | `/products/:id` | Admin | Supprimer un produit |
| GET | `/categories` | Public | Lister les catégories |
| GET | `/categories/:id` | Public | Détail d'une catégorie |
| POST | `/categories` | Admin | Créer une catégorie (multipart, champ `image`) |
| PUT | `/categories/:id` | Admin | Modifier une catégorie |
| DELETE | `/categories/:id` | Admin | Supprimer une catégorie |
| GET | `/cart` | Auth | Consulter son panier |
| POST | `/cart` | Auth | Ajouter un produit (`productId`, `qty`) |
| PUT | `/cart/:itemId` | Auth | Modifier la quantité d'un article |
| DELETE | `/cart/:itemId` | Auth | Retirer un article |
| DELETE | `/cart` | Auth | Vider le panier |
| POST | `/orders` | Auth | Passer commande à partir du panier |
| GET | `/orders` | Auth | Lister ses commandes |
| GET | `/orders/:id` | Auth | Détail d'une commande (propriétaire ou admin) |
| GET | `/orders/all` | Admin | Lister toutes les commandes |
| PUT | `/orders/:id/status` | Admin | Changer le statut (`pending`, `paid`, `shipped`, `delivered`, `cancelled`) |

## Pistes d'amélioration

- Ajouter les pages de connexion et d'inscription côté frontend (les liens existent, les routes pas encore) et protéger les routes d'administration côté client.
- Relier le panier et le paiement du frontend aux endpoints `/cart` et `/orders`, et connecter les écrans commandes, utilisateurs et tableau de bord à l'API.
- Vérifier et décrémenter le stock lors de la création d'une commande.
- Ajouter une limitation de débit sur les routes d'authentification.
- Corriger les avertissements ESLint du frontend pour pouvoir ajouter le build à la CI.

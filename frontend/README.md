# 🌿 Forever Living – Frontend e-commerce

> **Application e-commerce moderne spécialisée dans les produits naturels à base d'Aloe Vera**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple.svg)](https://getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/SCSS-Supported-pink.svg)](https://sass-lang.com/)

## 📋 Description

Interface React d'une boutique en ligne dédiée aux produits Forever Living à base d'Aloe Vera (bien-être, beauté et santé). Elle comprend un espace client et un back-office d'administration, et s'appuie sur l'API Express du dossier `backend/` (voir le README à la racine du dépôt).

> Projet personnel de formation inspiré du catalogue Forever Living ; non affilié à Forever Living Products.

### ✨ Fonctionnalités Principales

#### 🛒 **Espace Client**
- **Page d'accueil** : Présentation des produits phares avec slides (carrousel)
- **Boutique / Catalogue** : Pages de présentation des produits
- **Panier** et **Paiement** : Pages d'interface (pas encore reliées à l'API panier / commandes)
- **Contact** et **À propos** : Pages d'information

> Les pages client sont pour l'instant des intégrations statiques du thème : elles n'appellent pas encore l'API.

#### 👨‍💼 **Administration**
- **Gestion des produits** : CRUD complet connecté à l'API, avec upload d'image, recherche et filtres
- **Gestion des catégories** : CRUD complet connecté à l'API, avec upload d'image
- **Dashboard, Analytics, Commandes, Utilisateurs** : écrans de maquette (données d'exemple), pas encore reliés à l'API

### 🚧 **En cours / à venir**
- Pages de connexion et d'inscription (les liens existent dans l'en-tête, pas encore les routes)
- Branchement du panier et du paiement sur les endpoints `/api/cart` et `/api/orders`
- Protection des routes d'administration côté client
 
## 🚀 Technologies Utilisées

### **Frontend**
- **React 19.2.0** - Bibliothèque JavaScript moderne
- **React Router DOM 7** - Gestion du routing
- **Bootstrap 5.3.8** - Framework CSS responsive
- **SCSS/Sass** - Préprocesseur CSS avancé
- **Bootstrap Icons** - Bibliothèque d'icônes

### **Graphiques & Analytics**
- **Chart.js 4.5.1** - Graphiques interactifs
- **ApexCharts 5.3.6** - Graphiques avancés
- **Lucide Icons** - Icônes modernes

### **Utilitaires**
- **SweetAlert2** - Modales élégantes
- **Alpine.js** - Framework JavaScript léger

## 📁 Structure du Projet

```
frontend/
├── public/
│   ├── assets/
│   │   ├── client/          # Assets client (CSS, JS, images)
│   │   └── icons/           # Icônes PWA
│   └── index.html
├── src/
│   ├── api/                 # Services API
│   │   ├── categoryService.js
│   │   ├── productService.js
│   │   ├── orderService.js
│   │   └── userService.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── admin/       # Composants admin
│   │   │   └── client/      # Composants client
│   ├── context/             # Context React (Auth, Cart)
│   ├── pages/
│   │   ├── admin/           # Pages administration
│   │   └── client/          # Pages client
│   │       ├── home/        # Page d'accueil
│   │       ├── shop/        # Boutique
│   │       ├── cart/        # Panier
│   │       ├── checkout/    # Paiement
│   │       └── apropos/     # À propos
│   ├── styles/
│   │   └── scss/
│   │       ├── abstracts/   # Variables, mixins, utilities
│   │       ├── components/  # Styles composants
│   │       ├── layout/      # Styles layout
│   │       ├── pages/       # Styles pages spécifiques
│   │       └── themes/      # Thèmes (light/dark)
│   ├── scripts/             # Scripts utilitaires
│   └── App.js               # Application principale
├── package.json
└── README.md
```

## 🛠️ Installation & Configuration

### **Prérequis**
- Node.js 20 ou supérieur
- npm
- L'API du dossier `backend/` démarrée (port 5001 par défaut)

### **Installation**

1. **Cloner le projet**
   ```bash
   git clone https://github.com/eliedvp/forever-living.git
   cd forever-living/frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement (optionnel)**
   ```bash
   # Créer un fichier .env.local si l'API n'est pas sur l'URL par défaut
   REACT_APP_API_URL=http://localhost:5001/api
   ```

4. **Démarrer le serveur de développement**
   ```bash
   npm start
   ```

   L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### **Scripts Disponibles**

```bash
# Démarrage en mode développement
npm start

# Build de production
npm run build

# Lancement des tests
npm test -- --watchAll=false

# Éjection (attention : irréversible)
npm run eject
```

## 🎯 Architecture & Routing

### **Routes Client**
- `/` - Page d'accueil
- `/shop` - Boutique
- `/catalogue` - Catalogue
- `/cart` - Panier
- `/checkout` - Paiement
- `/apropos` - À propos de Forever Living
- `/contact` - Contact

### **Routes Administration**
- `/dashboard` - Tableau de bord
- `/products` - Gestion des produits
- `/categories` - Gestion des catégories
- `/orders` - Gestion des commandes
- `/users` - Gestion des utilisateurs
- `/analytics` - Analytics & rapports

## 🎨 Personnalisation du Thème

### **Variables SCSS**
Les couleurs principales sont définies dans `src/styles/scss/abstracts/_variables.scss` :

```scss
// Couleurs Forever Living Products
$primary: #FFD700;    // Jaune doré
$secondary: #8B4513;  // Marron
```

### **Utilisation des Couleurs**
```jsx
// Dans vos composants React
<div className="bg-yellow-500 text-brown-900">
  Contenu avec thème Forever Living
</div>

<div className="forever-living-primary">
  Bouton principal
</div>
```

## 🚀 Déploiement

### **Build de Production**
```bash
npm run build
```

Le build sera généré dans le dossier `build/` avec optimisation automatique.

Le fichier `public/manifest.json` et les icônes sont présents, mais aucun Service Worker n'est enregistré : l'application ne fonctionne pas hors ligne.

## 🤝 Contribution

### **Standards de Code**
- ESLint configuré pour React
- SCSS avec architecture 7-1
- Tests avec Jest & React Testing Library (`src/api/config.test.js`), exécutés par la CI GitHub Actions

### **Commits**
Utiliser des messages de commit conventionnels :
- `feat:` nouvelles fonctionnalités
- `fix:` corrections de bugs
- `style:` changements de style
- `docs:` documentation

---

**Développé avec ❤️ par [Tano Elie Vianney Adiko](https://eliedvp.vercel.app)**

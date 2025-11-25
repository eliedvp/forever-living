# 🌿 Forever Living Products - Frontend E-commerce

> **Application e-commerce moderne spécialisée dans les produits naturels à base d'Aloe Vera**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple.svg)](https://getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/SCSS-Supported-pink.svg)](https://sass-lang.com/)

## 📋 Description

Application frontend e-commerce développée pour Forever Living Products, leader mondial des produits naturels à base d'Aloe Vera. Cette plateforme moderne offre une expérience utilisateur exceptionnelle pour découvrir et acheter des produits de bien-être, beauté et santé.

### ✨ Fonctionnalités Principales

#### 🛒 **Espace Client**
- **Page d'accueil** : Présentation des produits phares avec slides dynamiques
- **Boutique** : Catalogue complet avec filtrage et recherche
- **Panier** : Gestion intuitive des achats
- **Paiement** : Processus de checkout sécurisé
- **À propos** : Histoire et mission de Forever Living Products

#### 👨‍💼 **Administration**
- **Dashboard** : Tableaux de bord avec statistiques
- **Gestion des produits** : CRUD complet
- **Gestion des catégories** : Organisation du catalogue
- **Gestion des commandes** : Suivi et traitement
- **Gestion des utilisateurs** : Administration des comptes
- **Analytics** : Rapports et métriques
 
## 🚀 Technologies Utilisées

### **Frontend**
- **React 19.2.0** - Bibliothèque JavaScript moderne
- **React Router DOM 7.9.5** - Gestion du routing
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
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Backend API Forever Living Products (port 8000)

### **Installation**

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement**
   ```bash
   # Créer un fichier .env.local
   REACT_APP_API_URL=http://localhost:8000/api
   REACT_APP_ENVIRONMENT=development
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
npm test

# Éjection (attention : irréversible)
npm run eject
```

## 🎯 Architecture & Routing

### **Routes Client**
- `/` - Page d'accueil
- `/shop` - Boutique / Catalogue
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

### **Configuration PWA**
L'application est configurée comme Progressive Web App avec :
- Service Worker
- Manifest.json
- Icônes optimisées
- Cache offline

## 🤝 Contribution

### **Standards de Code**
- ESLint configuré pour React
- SCSS avec architecture 7-1
- Tests avec Jest & React Testing Library

### **Commits**
Utiliser des messages de commit conventionnels :
- `feat:` nouvelles fonctionnalités
- `fix:` corrections de bugs
- `style:` changements de style
- `docs:` documentation

## 📞 Support & Contact

**Forever Living Products**
- Site web : [foreverliving.com](https://www.foreverliving.com)
- Support technique : support@foreverliving.com

## 📄 Licence

Copyright © 2025 Forever Living Products. Tous droits réservés.

---

**Développé avec ❤️ pour Forever Living Products**

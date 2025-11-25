const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// @desc    Récupérer tous les produits
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Récupérer un produit par ID
// @route   GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Créer un produit
// @route   POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const productData = { ...req.body };
    
    // Si une image est uploadée, ajouter le chemin de l'image
    if (req.file) {
      productData.image = `/uploads/products/${req.file.filename}`;
    }
    
    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (err) {
    // Supprimer l'image uploadée en cas d'erreur
    if (req.file) {
      const filePath = path.join(__dirname, '../../uploads/products', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    res.status(400).json({ message: err.message });
  }
};

// @desc    Mettre à jour un produit
// @route   PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      // Supprimer l'image uploadée si le produit n'existe pas
      if (req.file) {
        const filePath = path.join(__dirname, '../../uploads/products', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    const updateData = { ...req.body };
    
    // Si une nouvelle image est uploadée
    if (req.file) {
      // Supprimer l'ancienne image si elle existe
      if (product.image) {
        const oldImagePath = path.join(__dirname, '../..', product.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Ajouter le chemin de la nouvelle image
      updateData.image = `/uploads/products/${req.file.filename}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate('category', 'name');
    
    res.json(updatedProduct);
  } catch (err) {
    // Supprimer l'image uploadée en cas d'erreur
    if (req.file) {
      const filePath = path.join(__dirname, '../../uploads/products', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    res.status(400).json({ message: err.message });
  }
};

// @desc    Supprimer un produit
// @route   DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    // Supprimer l'image associée si elle existe
    if (product.image) {
      const imagePath = path.join(__dirname, '../..', product.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Produit supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


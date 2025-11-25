const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');

// @desc    Récupérer toutes les catégories
// @route   GET /api/categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Récupérer une catégorie par ID
// @route   GET /api/categories/:id
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Créer une catégorie
// @route   POST /api/categories
exports.createCategory = async (req, res) => {
  try {
    const categoryData = { ...req.body };
    
    // Si une image est uploadée, ajouter le chemin de l'image
    if (req.file) {
      categoryData.image = `/uploads/categories/${req.file.filename}`;
    }
    
    const category = await Category.create(categoryData);
    res.status(201).json(category);
  } catch (err) {
    // Supprimer l'image uploadée en cas d'erreur
    if (req.file) {
      const filePath = path.join(__dirname, '../../uploads/categories', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    res.status(400).json({ message: err.message });
  }
};

// @desc    Mettre à jour une catégorie
// @route   PUT /api/categories/:id
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      // Supprimer l'image uploadée si la catégorie n'existe pas
      if (req.file) {
        const filePath = path.join(__dirname, '../../uploads/categories', req.file.filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }

    const updateData = { ...req.body };
    
    // Si une nouvelle image est uploadée
    if (req.file) {
      // Supprimer l'ancienne image si elle existe
      if (category.image) {
        const oldImagePath = path.join(__dirname, '../..', category.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Ajouter le chemin de la nouvelle image
      updateData.image = `/uploads/categories/${req.file.filename}`;
    }

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });
    
    res.json(updatedCategory);
  } catch (err) {
    // Supprimer l'image uploadée en cas d'erreur
    if (req.file) {
      const filePath = path.join(__dirname, '../../uploads/categories', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    res.status(400).json({ message: err.message });
  }
};

// @desc    Supprimer une catégorie
// @route   DELETE /api/categories/:id
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }

    // Supprimer l'image associée si elle existe
    if (category.image) {
      const imagePath = path.join(__dirname, '../..', category.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Catégorie supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');
const { resolveUploadPath } = require('../utils/uploadPath');
const pickFields = require('../utils/pickFields');

// Champs modifiables depuis la requête (l'image passe uniquement par l'upload)
const CATEGORY_FIELDS = ['name', 'description'];

// @desc    Récupérer toutes les catégories
// @route   GET /api/categories
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

// @desc    Récupérer une catégorie par ID
// @route   GET /api/categories/:id
exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    res.json(category);
  } catch (err) {
    next(err);
  }
};

// @desc    Créer une catégorie
// @route   POST /api/categories
exports.createCategory = async (req, res, next) => {
  try {
    const categoryData = pickFields(req.body, CATEGORY_FIELDS);
    
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
    next(err);
  }
};

// @desc    Mettre à jour une catégorie
// @route   PUT /api/categories/:id
exports.updateCategory = async (req, res, next) => {
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

    const updateData = pickFields(req.body, CATEGORY_FIELDS);
    
    // Si une nouvelle image est uploadée
    if (req.file) {
      // Supprimer l'ancienne image si elle existe
      if (category.image) {
        const oldImagePath = resolveUploadPath(category.image);
        if (oldImagePath && fs.existsSync(oldImagePath)) {
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
    next(err);
  }
};

// @desc    Supprimer une catégorie
// @route   DELETE /api/categories/:id
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }

    // Supprimer l'image associée si elle existe
    if (category.image) {
      const imagePath = resolveUploadPath(category.image);
      if (imagePath && fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Catégorie supprimée' });
  } catch (err) {
    next(err);
  }
};


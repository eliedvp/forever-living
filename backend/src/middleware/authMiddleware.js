const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Accès refusé, aucun token' });
  }

  try {
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
  } catch (error) {
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }

  // Token valide mais compte supprimé entre-temps
  if (!req.user) {
    return res.status(401).json({ message: 'Utilisateur introuvable, token invalide' });
  }

  next();
};

exports.notFound = (req, res, next) => {
  const error = new Error(`Non trouvé - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

exports.errorHandler = (err, req, res, next) => {
  // Erreurs client connues (fichier refusé, fichier trop volumineux, JSON invalide) : 400
  const clientErrorStatus =
    err.name === 'MulterError' ? 400 : err.status >= 400 && err.status < 500 ? err.status : null;
  const statusCode = res.statusCode === 200 ? clientErrorStatus || 500 : res.statusCode;
  res.status(statusCode);
  // Erreurs serveur : détail journalisé côté serveur, message générique côté client
  if (statusCode >= 500) {
    console.error(err);
  }
  const isDevelopment = process.env.NODE_ENV === 'development';
  res.json({
    message: statusCode >= 500 && !isDevelopment ? 'Erreur serveur' : err.message,
    stack: isDevelopment ? err.stack : null,
  });
};

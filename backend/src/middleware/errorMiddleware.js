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
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

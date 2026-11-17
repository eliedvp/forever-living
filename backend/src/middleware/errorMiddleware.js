exports.notFound = (req, res, next) => {
  const error = new Error(`Non trouvé - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Traduit les erreurs connues (Mongoose, body-parser, multer) en erreurs client
// avec un message utile mais sans détail interne. Renvoie null pour les autres.
const toClientError = (err) => {
  if (err.name === 'ValidationError' && err.errors) {
    return {
      status: 400,
      body: {
        message: 'Données invalides',
        errors: Object.values(err.errors).map((e) => ({ path: e.path, msg: e.message })),
      },
    };
  }
  if (err.name === 'CastError') {
    return { status: 400, body: { message: 'Identifiant ou valeur invalide' } };
  }
  if (err.code === 11000) {
    return { status: 409, body: { message: 'Cette valeur est déjà utilisée' } };
  }
  if (err.type === 'entity.parse.failed') {
    return { status: 400, body: { message: 'Corps de requête JSON invalide' } };
  }
  // Fichier refusé ou trop volumineux, ou erreur levée volontairement avec un statut 4xx
  if (err.name === 'MulterError' || (err.status >= 400 && err.status < 500)) {
    return { status: err.name === 'MulterError' ? 400 : err.status, body: { message: err.message } };
  }
  return null;
};

exports.errorHandler = (err, req, res, next) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  // Un statut déjà positionné (ex. 404 par notFound) est conservé
  const presetStatus = res.statusCode !== 200 ? res.statusCode : null;
  const clientError = presetStatus ? null : toClientError(err);
  const statusCode = presetStatus || (clientError ? clientError.status : 500);

  // Erreurs serveur : détail journalisé côté serveur, message générique côté client
  if (statusCode >= 500) {
    console.error(err);
  }

  let body;
  if (clientError) {
    body = clientError.body;
  } else {
    body = { message: statusCode >= 500 && !isDevelopment ? 'Erreur serveur' : err.message };
  }

  res.status(statusCode).json({ ...body, stack: isDevelopment ? err.stack : null });
};

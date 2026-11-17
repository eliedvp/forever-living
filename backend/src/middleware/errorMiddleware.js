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
  if (err.name === 'MulterError') {
    return { status: 400, body: { message: err.message } };
  }
  // Erreur 4xx levée volontairement : son message n'est renvoyé que s'il n'est pas
  // explicitement marqué comme non exposable (convention http-errors : expose === false)
  if (err.status >= 400 && err.status < 500 && err.expose !== false) {
    return { status: err.status, body: { message: err.message } };
  }
  return null;
};

exports.errorHandler = (err, req, res, next) => {
  // Réponse déjà partiellement envoyée : on laisse Express fermer la connexion
  if (res.headersSent) {
    return next(err);
  }

  const isDevelopment = process.env.NODE_ENV === 'development';
  // Seul un statut d'erreur déjà positionné (ex. 404 par notFound) est conservé :
  // un 2xx/3xx préréglé ne doit pas faire passer une erreur interne pour un succès
  const presetStatus = res.statusCode >= 400 ? res.statusCode : null;
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

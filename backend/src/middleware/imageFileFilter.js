const path = require('path');

// Extensions autorisées et types MIME correspondants (comparaison exacte)
const ALLOWED_IMAGE_TYPES = {
  '.jpg': ['image/jpeg'],
  '.jpeg': ['image/jpeg'],
  '.png': ['image/png'],
  '.gif': ['image/gif'],
  '.webp': ['image/webp'],
};

// Filtre multer : n'accepte que les images dont l'extension ET le type MIME
// figurent dans la liste blanche et sont cohérents entre eux.
const imageFileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname || '').toLowerCase();
  const allowedMimeTypes = ALLOWED_IMAGE_TYPES[extension];

  if (allowedMimeTypes && allowedMimeTypes.includes(file.mimetype)) {
    return cb(null, true);
  }

  const error = new Error('Seules les images sont autorisées (jpeg, jpg, png, gif, webp)');
  error.status = 400;
  return cb(error);
};

module.exports = imageFileFilter;
module.exports.ALLOWED_IMAGE_TYPES = ALLOWED_IMAGE_TYPES;

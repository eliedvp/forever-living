const path = require('path');

const UPLOADS_ROOT = path.resolve(__dirname, '../../uploads');

// Convertit un chemin public (ex. "/uploads/products/x.png") en chemin disque,
// uniquement s'il pointe à l'intérieur du dossier uploads. Renvoie null sinon,
// pour éviter de supprimer un fichier arbitraire via une valeur "image" forgée.
const resolveUploadPath = (publicPath) => {
  if (typeof publicPath !== 'string' || publicPath.length === 0) return null;

  const absolutePath = path.resolve(path.dirname(UPLOADS_ROOT), publicPath.replace(/^[/\\]+/, ''));
  if (!absolutePath.startsWith(UPLOADS_ROOT + path.sep)) return null;

  return absolutePath;
};

module.exports = { resolveUploadPath, UPLOADS_ROOT };

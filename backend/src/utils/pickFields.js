// Ne conserve de `source` (en général req.body) que les champs autorisés.
// Empêche d'écrire des champs non prévus (rating, numReviews, image...) ou de
// glisser des opérateurs MongoDB ($set, $inc...) dans une création ou mise à jour.
const pickFields = (source, allowedFields) =>
  allowedFields.reduce((picked, field) => {
    if (source && Object.prototype.hasOwnProperty.call(source, field) && source[field] !== undefined) {
      picked[field] = source[field];
    }
    return picked;
  }, {});

module.exports = pickFields;

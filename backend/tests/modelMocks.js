// Fabriques de mocks des modèles Mongoose, utilisées via jest.mock(..., () => require('./modelMocks').model())
const model = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  findById: jest.fn(),
  findOneAndUpdate: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  updateOne: jest.fn(),
  create: jest.fn(),
});

module.exports = { model };

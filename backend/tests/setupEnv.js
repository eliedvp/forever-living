// Variables d'environnement minimales pour les tests (aucune base MongoDB requise)
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'secret-de-test-uniquement';
delete process.env.CORS_ORIGIN;

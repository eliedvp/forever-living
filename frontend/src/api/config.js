// Configuration de l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Fonction pour obtenir l'URL de base du serveur (sans /api)
export const getBaseUrl = () => {
  return process.env.REACT_APP_API_URL?.replace("/api", "") || "http://localhost:5001";
};

// Fonction pour obtenir le token depuis localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Fonction pour obtenir les headers avec authentification
export const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Fonction pour obtenir les headers pour FormData (upload de fichiers)
export const getFormDataHeaders = () => {
  const token = getToken();
  return {
    ...(token && { Authorization: `Bearer ${token}` }),
    // Ne pas définir Content-Type pour FormData, le navigateur le fera automatiquement
  };
};

export default API_BASE_URL;


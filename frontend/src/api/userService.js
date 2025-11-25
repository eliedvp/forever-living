import API_BASE_URL, { getAuthHeaders } from './config';

// Récupérer tous les utilisateurs (admin)
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Récupérer un utilisateur par ID (admin)
export const getUserById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de l\'utilisateur');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Récupérer le profil de l'utilisateur connecté
export const getUserProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Mettre à jour le profil de l'utilisateur
export const updateUserProfile = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la mise à jour du profil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Supprimer un utilisateur (admin)
export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la suppression de l\'utilisateur');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};




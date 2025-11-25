import API_BASE_URL, { getAuthHeaders } from './config';

// Récupérer toutes les commandes (admin)
export const getAllOrders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/all`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des commandes');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Récupérer les commandes de l'utilisateur connecté
export const getMyOrders = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des commandes');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching my orders:', error);
    throw error;
  }
};

// Récupérer une commande par ID
export const getOrderById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération de la commande');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

// Créer une commande
export const createOrder = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la création de la commande');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Mettre à jour le statut d'une commande (admin)
export const updateOrderStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${id}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la mise à jour du statut');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};




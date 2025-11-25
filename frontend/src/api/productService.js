import API_BASE_URL, { getAuthHeaders, getFormDataHeaders } from './config';

// Récupérer tous les produits
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des produits');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Récupérer un produit par ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du produit');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Créer un produit
export const createProduct = async (productData, imageFile = null) => {
  try {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('stock', productData.stock);
    if (productData.description) {
      formData.append('description', productData.description);
    }
    if (productData.category) {
      formData.append('category', productData.category);
    }
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: getFormDataHeaders(),
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la création du produit');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Mettre à jour un produit
export const updateProduct = async (id, productData, imageFile = null) => {
  try {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('stock', productData.stock);
    if (productData.description) {
      formData.append('description', productData.description);
    }
    if (productData.category) {
      formData.append('category', productData.category);
    }
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: getFormDataHeaders(),
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la mise à jour du produit');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Supprimer un produit
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la suppression du produit');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};




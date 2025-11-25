import React, { useState, useEffect } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productService";
import { getCategories } from "../../api/categoryService";
import { getBaseUrl } from "../../api/config";

export default function Products() {
  // ==== États principaux ====
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;

  // ==== États pour le modal ====
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // ==== Stats calculées ====
  const [stats, setStats] = useState({
    total: 0,
    inStock: 0,
    lowStock: 0,
    totalValue: 0,
  });

  // ==== Charger les données ====
  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
      calculateStats(data);
    } catch (err) {
      setError(err.message || "Erreur lors du chargement des produits");
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Error loading categories:", err);
    }
  };

  const calculateStats = (productsList) => {
    const total = productsList.length;
    const inStock = productsList.filter((p) => p.stock > 20).length;
    const lowStock = productsList.filter((p) => p.stock > 0 && p.stock <= 20).length;
    const totalValue = productsList.reduce((sum, p) => sum + (p.price * p.stock), 0);
    setStats({ total, inStock, lowStock, totalValue });
  };

  // ==== Filtres ====
  useEffect(() => {
    filterProducts();
  }, [searchQuery, categoryFilter, stockFilter, products]);

  const filterProducts = () => {
    let filtered = [...products];
    if (searchQuery)
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (categoryFilter)
      filtered = filtered.filter((p) => 
        p.category && (p.category._id === categoryFilter || p.category === categoryFilter)
      );
    if (stockFilter) {
      if (stockFilter === "in-stock") filtered = filtered.filter((p) => p.stock > 20);
      else if (stockFilter === "low-stock") filtered = filtered.filter((p) => p.stock > 0 && p.stock <= 20);
      else if (stockFilter === "out-of-stock") filtered = filtered.filter((p) => p.stock === 0);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // ==== Pagination ====
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // ==== Sélection ====
  const toggleAll = (checked) => {
    if (checked) setSelectedProducts(filteredProducts.map((p) => p._id));
    else setSelectedProducts([]);
  };

  const toggleProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  // ==== Modal ====
  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        stock: product.stock || "",
        category: product.category?._id || product.category || "",
        image: null,
      });
      setImagePreview(
        product.image
          ? `${getBaseUrl()}${product.image}`
          : null
      );
    } else {
      setEditingProduct(null);
      setFormData({ name: "", description: "", price: "", stock: "", category: "", image: null });
      setImagePreview(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setFormData({ name: "", description: "", price: "", stock: "", category: "", image: null });
    setImagePreview(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price || !formData.stock) {
      alert("Veuillez remplir tous les champs requis");
      return;
    }

    try {
      setSubmitting(true);
      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        category: formData.category || undefined,
      };

      if (editingProduct) {
        await updateProduct(editingProduct._id, productData, formData.image);
      } else {
        await createProduct(productData, formData.image);
      }
      closeModal();
      loadProducts();
    } catch (err) {
      alert(err.message || "Erreur lors de l'enregistrement");
    } finally {
      setSubmitting(false);
    }
  };

  // ==== Actions ====
  const editProduct = (p) => openModal(p);
  const viewProduct = (p) => alert(`Produit: ${p.name}\nPrix: $${p.price}\nStock: ${p.stock}`);
  
  const duplicateProduct = async (p) => {
    try {
      await createProduct({
        name: `${p.name} (Copy)`,
        description: p.description,
        price: p.price,
        stock: p.stock,
        category: p.category?._id || p.category,
      }, null);
      loadProducts();
    } catch (err) {
      alert(err.message || "Erreur lors de la duplication");
    }
  };

  const handleDeleteProduct = async (p) => {
    if (window.confirm(`Supprimer le produit "${p.name}" ?`)) {
      try {
        await deleteProduct(p._id);
        loadProducts();
      } catch (err) {
        alert(err.message || "Erreur lors de la suppression");
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  return (
    <main className="admin-main">
      <div className="container-fluid p-4 p-lg-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-5">
          <div>
            <h1 className="h3 mb-0">Product Management</h1>
            <p className="text-muted mb-0">
              Manage your product catalog and inventory
            </p>
          </div>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => alert("Exporting products")}
            >
              <i className="bi bi-download me-2"></i>Export
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openModal()}
            >
              <i className="bi bi-plus-lg me-2"></i>Add Product
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError(null)}
            ></button>
          </div>
        )}

        {/* Product Stats */}
        <div className="row g-4 g-lg-5 mb-5">
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card">
              <div className="card-body p-3 p-lg-4 d-flex align-items-center">
                <div className="stats-icon bg-primary bg-opacity-10 text-primary me-3">
                  <i className="bi bi-box"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Total Products</h6>
                  <h3 className="mb-0">{stats.total}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card">
              <div className="card-body p-3 p-lg-4 d-flex align-items-center">
                <div className="stats-icon bg-success bg-opacity-10 text-success me-3">
                  <i className="bi bi-check-circle"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-muted">In Stock</h6>
                  <h3 className="mb-0">{stats.inStock}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card">
              <div className="card-body p-3 p-lg-4 d-flex align-items-center">
                <div className="stats-icon bg-warning bg-opacity-10 text-warning me-3">
                  <i className="bi bi-exclamation-triangle"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Low Stock</h6>
                  <h3 className="mb-0">{stats.lowStock}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card">
              <div className="card-body p-3 p-lg-4 d-flex align-items-center">
                <div className="stats-icon bg-info bg-opacity-10 text-info me-3">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Total Value</h6>
                  <h3 className="mb-0">${stats.totalValue.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Product Catalog</h5>
              </div>
              <div className="col-auto d-flex gap-2">
                <div className="position-relative">
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: "200px" }}
                  />
                  <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-2 text-muted"></i>
                </div>

                <select
                  className="form-select form-select-sm"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select form-select-sm"
                  value={stockFilter}
                  onChange={(e) => setStockFilter(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="">All Stock</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {/* Loading State */}
            {loading && (
              <div className="text-center p-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
              <div className="text-center p-5">
                <p className="text-muted">Aucun produit trouvé</p>
              </div>
            )}

            {/* Table content */}
            {!loading && filteredProducts.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: "40px" }}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={(e) => toggleAll(e.target.checked)}
                            checked={
                              selectedProducts.length === filteredProducts.length &&
                              filteredProducts.length > 0
                            }
                          />
                        </th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Created</th>
                        <th style={{ width: "120px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedProducts.map((product) => (
                        <tr key={product._id}>
                          <td>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={selectedProducts.includes(product._id)}
                              onChange={() => toggleProduct(product._id)}
                            />
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              {product.image ? (
                                <img
                                  src={`${getBaseUrl()}${product.image}`}
                                  alt={product.name}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                    marginRight: "12px",
                                  }}
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    backgroundColor: "#e9ecef",
                                    borderRadius: "4px",
                                    marginRight: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <i className="bi bi-image text-muted"></i>
                                </div>
                              )}
                              <div>
                                <div className="fw-medium">{product.name}</div>
                                <small className="text-muted">
                                  {product.description ? product.description.substring(0, 30) + "..." : ""}
                                </small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-light text-dark">
                              {product.category?.name || "N/A"}
                            </span>
                          </td>
                          <td>${product.price?.toFixed(2) || "0.00"}</td>
                          <td>
                            <span
                              className={`badge ${
                                product.stock > 20
                                  ? "bg-success"
                                  : product.stock > 0
                                  ? "bg-warning"
                                  : "bg-danger"
                              }`}
                            >
                              {product.stock} units
                            </span>
                          </td>
                          <td>{formatDate(product.createdAt)}</td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bi bi-three-dots"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => editProduct(product)}
                                  >
                                    <i className="bi bi-pencil me-2"></i>Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => viewProduct(product)}
                                  >
                                    <i className="bi bi-eye me-2"></i>View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => duplicateProduct(product)}
                                  >
                                    <i className="bi bi-copy me-2"></i>Duplicate
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item text-danger"
                                    onClick={() => handleDeleteProduct(product)}
                                  >
                                    <i className="bi bi-trash me-2"></i>Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-between align-items-center p-3">
                  <div className="text-muted">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, filteredProducts.length)}{" "}
                    of {filteredProducts.length} results
                  </div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => goToPage(currentPage - 1)}
                        >
                          Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              page === currentPage ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => goToPage(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => goToPage(currentPage + 1)}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal pour créer/éditer un produit */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingProduct ? "Edit Product" : "Add Product"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat._id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="price" className="form-label">
                        Price <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="stock" className="form-label">
                        Stock <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          style={{
                            maxWidth: "200px",
                            maxHeight: "200px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Saving...
                      </>
                    ) : (
                      editingProduct ? "Update" : "Create"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

import React, { useState, useEffect } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categoryService";
import { getBaseUrl } from "../../api/config";

export default function Categories() {
  // ==== États principaux ====
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  // ==== États pour le modal ====
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // ==== Charger les catégories ====
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCategories();
      setCategories(data);
      setFilteredCategories(data);
    } catch (err) {
      setError(err.message || "Erreur lors du chargement des catégories");
      console.error("Error loading categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==== Filtres ====
  useEffect(() => {
    filterCategories();
  }, [searchQuery, statusFilter, categories]);

  const filterCategories = () => {
    let filtered = [...categories];
    if (searchQuery)
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (statusFilter)
      filtered = filtered.filter((c) => c.status === statusFilter);

    setFilteredCategories(filtered);
    setCurrentPage(1);
  };

  // ==== Pagination ====
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // ==== Sélection ====
  const toggleAll = (checked) => {
    if (checked) setSelectedCategories(filteredCategories.map((c) => c._id));
    else setSelectedCategories([]);
  };

  const toggleCategory = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // ==== Modal ====
  const openModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name || "",
        description: category.description || "",
        image: null,
      });
      setImagePreview(
        category.image
          ? `${getBaseUrl()}${category.image}`
          : null
      );
    } else {
      setEditingCategory(null);
      setFormData({ name: "", description: "", image: null });
      setImagePreview(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCategory(null);
    setFormData({ name: "", description: "", image: null });
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
    if (!formData.name.trim()) {
      alert("Le nom de la catégorie est requis");
      return;
    }

    try {
      setSubmitting(true);
      if (editingCategory) {
        await updateCategory(editingCategory._id, formData, formData.image);
      } else {
        await createCategory(formData, formData.image);
      }
      closeModal();
      loadCategories();
    } catch (err) {
      alert(err.message || "Erreur lors de l'enregistrement");
    } finally {
      setSubmitting(false);
    }
  };

  // ==== Actions ====
  const editCategory = (cat) => {
    openModal(cat);
  };

  const viewCategory = (cat) => {
    alert(`Catégorie: ${cat.name}\nDescription: ${cat.description || "Aucune"}`);
  };

  const duplicateCategory = async (cat) => {
    try {
      await createCategory(
        {
          name: `${cat.name} (Copy)`,
          description: cat.description,
        },
        null
      );
      loadCategories();
    } catch (err) {
      alert(err.message || "Erreur lors de la duplication");
    }
  };

  const handleDeleteCategory = async (cat) => {
    if (window.confirm(`Supprimer la catégorie "${cat.name}" ?`)) {
      try {
        await deleteCategory(cat._id);
        loadCategories();
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
            <h1 className="h3 mb-0">Category Management</h1>
            <p className="text-muted mb-0">
              Manage and organize your product categories
            </p>
          </div>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => alert("Exporting categories")}
            >
              <i className="bi bi-download me-2"></i>Export
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openModal()}
            >
              <i className="bi bi-plus-lg me-2"></i>Add Category
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

        {/* Table */}
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Category List</h5>
              </div>
              <div className="col-auto d-flex gap-2">
                <div className="position-relative">
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: "200px" }}
                  />
                  <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-2 text-muted"></i>
                </div>

                <select
                  className="form-select form-select-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
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
            {!loading && filteredCategories.length === 0 && (
              <div className="text-center p-5">
                <p className="text-muted">Aucune catégorie trouvée</p>
              </div>
            )}

            {/* Table content */}
            {!loading && filteredCategories.length > 0 && (
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
                              selectedCategories.length === filteredCategories.length &&
                              filteredCategories.length > 0
                            }
                          />
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created</th>
                        <th style={{ width: "120px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedCategories.map((cat) => (
                        <tr key={cat._id}>
                          <td>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              checked={selectedCategories.includes(cat._id)}
                              onChange={() => toggleCategory(cat._id)}
                            />
                          </td>
                          <td>
                            {cat.image ? (
                              <img
                                src={`${getBaseUrl()}${cat.image}`}
                                alt={cat.name}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  backgroundColor: "#e9ecef",
                                  borderRadius: "4px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <i className="bi bi-image text-muted"></i>
                              </div>
                            )}
                          </td>
                          <td className="fw-medium">{cat.name}</td>
                          <td className="text-muted">
                            {cat.description || "-"}
                          </td>
                          <td>{formatDate(cat.createdAt)}</td>
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
                                    onClick={() => editCategory(cat)}
                                  >
                                    <i className="bi bi-pencil me-2"></i>Edit
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => viewCategory(cat)}
                                  >
                                    <i className="bi bi-eye me-2"></i>View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() => duplicateCategory(cat)}
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
                                    onClick={() => handleDeleteCategory(cat)}
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
                    {Math.min(currentPage * itemsPerPage, filteredCategories.length)}{" "}
                    of {filteredCategories.length} results
                  </div>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li
                        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                      >
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

      {/* Modal pour créer/éditer une catégorie */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingCategory ? "Edit Category" : "Add Category"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
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
                      editingCategory ? "Update" : "Create"
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

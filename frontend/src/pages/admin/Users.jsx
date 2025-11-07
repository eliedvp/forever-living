import React from "react";

export default function Users({  stats = { total: 0, active: 0, newThisMonth: 0, activeRate: "0%" }, 
  departmentStats, 
  recentActivities, 
  systemAlerts, 
  paginatedUsers = [], 
  filteredUsers = [], 
  selectedUsers = [], 
  currentPage, 
  totalPages, 
  itemsPerPage, 
  visiblePages, 
  searchQuery, 
  statusFilter, 
  roleFilter, 
  filterUsers, 
  toggleAll, 
  sortBy, 
  bulkAction, 
  editUser, 
  viewUser, 
  deleteUser, 
  exportUsers, 
  sendBulkInvites, 
  generateReport }) {

  return (
    <main className="admin-main">
      <div className="container-fluid p-4 p-lg-5">
        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-5 mb-xl-6">
          <div>
            <h1 className="h3 mb-0">User Management</h1>
            <p className="text-muted mb-0">Manage users, roles, and permissions</p>
          </div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#importModal">
              <i className="bi bi-upload me-2"></i>Import Users
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={exportUsers}>
              <i className="bi bi-download me-2"></i>Export
            </button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">
              <i className="bi bi-person-plus me-2"></i>Add User
            </button>
          </div>
        </div>

        {/* User Stats Widgets */}
        <div className="row g-4 g-lg-5 g-xl-6 mb-5 mb-lg-5 mb-xl-6">
          <div className="col-xl-3 col-lg-6">
            <div className="card stats-card">
              <div className="card-body p-3 p-lg-4">
                <div className="d-flex align-items-center">
                  <div className="stats-icon bg-primary bg-opacity-10 text-primary me-3">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 text-muted">Total Users</h6>
                    <h3 className="mb-0">{stats.total}</h3>
                    <small className="text-success">
                      <i className="bi bi-arrow-up"></i> +12% from last month
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Répéter pour les autres statistiques (Active Users, New This Month, Active Rate) */}
        </div>

        {/* Users Table */}
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="card-title mb-0">Users Directory</h5>
              </div>
              <div className="col-auto">
                <div className="d-flex gap-2">
                  {/* Search */}
                  <div className="position-relative">
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => filterUsers(e.target.value)}
                      style={{ width: 200 }}
                    />
                    <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-2 text-muted"></i>
                  </div>

                  {/* Status Filter */}
                  <select className="form-select form-select-sm" value={statusFilter} onChange={(e) => filterUsers(e.target.value)} style={{ width: 150 }}>
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>

                  {/* Role Filter */}
                  <select className="form-select form-select-sm" value={roleFilter} onChange={(e) => filterUsers(e.target.value)} style={{ width: 150 }}>
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body p-0">
            {/* Users Table */}
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: 40 }}>
                      <input
                        type="checkbox"
                        className="form-check-input user-select-checkbox"
                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                        onChange={(e) => toggleAll(e.target.checked)}
                      />
                    </th>
                    <th onClick={() => sortBy("name")} className="sortable">Name</th>
                    <th onClick={() => sortBy("email")} className="sortable">Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th onClick={() => sortBy("lastActive")} className="sortable">Last Active</th>
                    <th style={{ width: 120 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr key={user.id} className={selectedUsers.includes(user.id) ? "selected" : ""}>
                      <td>
                        <input type="checkbox" className="form-check-input user-select-checkbox" value={user.id} checked={selectedUsers.includes(user.id)} onChange={() => toggleAll(user.id)} />
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={user.avatar} className="rounded-circle me-2" width={32} height={32} alt={user.name} />
                          <div>
                            <div className="fw-medium">{user.name}</div>
                            <small className="text-muted">ID: {user.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>
                        <span className={`badge ${user.role === "admin" ? "bg-danger" : user.role === "user" ? "bg-primary" : "bg-warning"}`}>{user.role}</span>
                      </td>
                      <td>
                        <span className={`badge ${user.status === "active" ? "bg-success" : user.status === "inactive" ? "bg-secondary" : "bg-warning"}`}>{user.status}</span>
                      </td>
                      <td>{user.lastActive}</td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i className="bi bi-three-dots"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button className="dropdown-item" onClick={() => editUser(user)}>
                                <i className="bi bi-pencil me-2"></i>Edit
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" onClick={() => viewUser(user)}>
                                <i className="bi bi-eye me-2"></i>View Profile
                              </button>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                              <button className="dropdown-item text-danger" onClick={() => deleteUser(user)}>
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
          </div>
        </div>
      </div>
    </main>
  );
}

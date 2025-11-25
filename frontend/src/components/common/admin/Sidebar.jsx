// src/components/common/admin/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="bi bi-speedometer2" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/analytics">
                <i className="bi bi-graph-up" />
                <span>Analytics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <i className="bi bi-people" />
                <span>Users</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="bi bi-box" />
                <span>Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                <i className="bi bi-bag-check" />
                <span>Orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                <i className="bi bi-check" />
                <span>Categories</span>
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

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
              <Link className="nav-link" to="/forms">
                <i className="bi bi-ui-checks" />
                <span>Forms</span>
                <span className="badge bg-success rounded-pill ms-auto">New</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#elementsSubmenu"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                <i className="bi bi-puzzle" />
                <span>Elements</span>
                <span className="badge bg-primary rounded-pill me-2">New</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <div className="collapse show" id="elementsSubmenu">
                <ul className="nav nav-submenu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements">
                      <i className="bi bi-grid" />
                      <span>Overview</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-buttons">
                      <i className="bi bi-square" />
                      <span>Buttons</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-alerts">
                      <i className="bi bi-exclamation-triangle" />
                      <span>Alerts</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-badges">
                      <i className="bi bi-award" />
                      <span>Badges</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-cards">
                      <i className="bi bi-card-text" />
                      <span>Cards</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-modals">
                      <i className="bi bi-window" />
                      <span>Modals</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-forms">
                      <i className="bi bi-ui-checks" />
                      <span>Forms</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/elements-tables">
                      <i className="bi bi-table" />
                      <span>Tables</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                <i className="bi bi-file-earmark-text" />
                <span>Reports</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages">
                <i className="bi bi-chat-dots" />
                <span>Messages</span>
                <span className="badge bg-danger rounded-pill ms-auto">3</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">
                <i className="bi bi-calendar-event" />
                <span>Calendar</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/files">
                <i className="bi bi-folder2-open" />
                <span>Files</span>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <small className="text-muted px-3 text-uppercase fw-bold">Admin</small>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <i className="bi bi-gear" />
                <span>Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/security">
                <i className="bi bi-shield-check" />
                <span>Security</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logs">
                <i className="bi bi-list-ul" />
                <span>Logs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/backup">
                <i className="bi bi-cloud-arrow-up" />
                <span>Backup</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

import { useState } from "react";
import { Link } from "react-router-dom";

 
const Header = () => {
  const [query, setQuery] = useState("");
  const [currentTheme, setCurrentTheme] = useState("light");

  const search = () => {
    console.log("Recherche :", query);
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="admin-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" href="./index.html">
            <img
              src="/assets/images/logo.svg"
              alt="Logo"
              height="32"
              className="d-inline-block align-text-top me-2"
            />
            <h1 className="h4 mb-0 fw-bold text-primary">Metis</h1>
          </Link>

          <div className="search-container flex-grow-1 mx-4">
            <div className="position-relative">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onInput={search}
              />
              <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
          </div>

          <div className="navbar-nav flex-row">
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={toggleTheme}>
                {currentTheme === "light" ? (
                  <i className="bi bi-sun-fill"></i>
                ) : (
                  <i className="bi bi-moon-fill"></i>
                )}
              </button>
            </div>

            <button className="btn btn-outline-secondary me-2" data-fullscreen-toggle>
              <i className="bi bi-arrows-fullscreen"></i>
            </button>

            <div className="dropdown">
              <button
                className="btn btn-outline-secondary d-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/assets/images/avatar-placeholder.svg"
                  width="24"
                  height="24"
                  className="rounded-circle me-2"
                  alt="avatar"
                />
                <span className="d-none d-md-inline">John Doe</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" href="#">
                    <i className="bi bi-person me-2"></i>Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <i className="bi bi-gear me-2"></i>Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

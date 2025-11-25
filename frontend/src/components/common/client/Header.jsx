import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header header-style-1">
      <div className="container-fluid">
        <div className="row">
          {/* --- TOP BAR --- */}
          <div className="topbar-menu-area">
            <div className="container">
              <div className="topbar-menu left-menu">
                <ul>
                  <li className="menu-item">
                    <a title="Service Client Forever Living" href="#">
                      <span className="icon label-before fa fa-mobile" />
                      Service Client: 01 42 33 44 55
                    </a>
                  </li>
                </ul>
              </div>

              <div className="topbar-menu right-menu">
                <ul>
                  <li className="menu-item">
                    <Link to="/login">Login</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/register">Register</Link>
                  </li>

                  {/* LANG MENU */}
                  <li className="menu-item lang-menu menu-item-has-children parent">
                    <a href="#">
                      <span className="img label-before">
                        <img src="assets/images/lang-en.png" alt="lang-en" />
                      </span>
                      English
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="submenu lang">
                      <li className="menu-item">
                        <a href="#">
                          <span className="img label-before">
                            <img src="assets/images/lang-hun.png" alt="hungary" />
                          </span>
                          Hungary
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <span className="img label-before">
                            <img src="assets/images/lang-ger.png" alt="german" />
                          </span>
                          German
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <span className="img label-before">
                            <img src="assets/images/lang-fra.png" alt="french" />
                          </span>
                          French
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <span className="img label-before">
                            <img src="assets/images/lang-can.png" alt="canada" />
                          </span>
                          Canada
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* DEVISA */}
                  <li className="menu-item menu-item-has-children parent">
                    <a href="#">
                      Dollar (USD)
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="submenu curency">
                      <li className="menu-item"><a href="#">Pound (GBP)</a></li>
                      <li className="menu-item"><a href="#">Euro (EUR)</a></li>
                      <li className="menu-item"><a href="#">Dollar (USD)</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* --- LOGO + SEARCH BAR + ICONS --- */}
          <div className="container">
            <div className="mid-section main-info-area">
              <div className="wrap-logo-top left-section">
                <Link to="/" className="link-to-home">
                  <img src="assets/images/logo-top-1.png" alt="logo" />
                </Link>
              </div>

              <div className="wrap-search center-section">
                <div className="wrap-search-form">
                  <form id="form-search-top">
                    <input type="text" placeholder="Search here..." />

                    <button type="button">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="wrap-icon right-section">
                <div className="wrap-icon-section wishlist">
                  <Link to="/wishlist" className="link-direction">
                    <i className="fa fa-heart" />
                    <div className="left-info">
                      <span className="index">0 item</span>
                      <span className="title">Wishlist</span>
                    </div>
                  </Link>
                </div>

                <div className="wrap-icon-section minicart">
                  <Link to="/cart" className="link-direction">
                    <i className="fa fa-shopping-basket" />
                    <div className="left-info">
                      <span className="index">4 items</span>
                      <span className="title">Cart</span>
                    </div>
                  </Link>
                </div>

                <div className="wrap-icon-section show-up-after-1024">
                  <a href="#" className="mobile-navigation">
                    <span /><span /><span />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- NAVIGATION --- */}
          <div className="nav-section header-sticky">
            <div className="header-nav-section">
              <div className="container">
                <ul className="nav menu-nav">
                  <li className="menu-item"><a href="#">Weekly Featured</a></li>
                  <li className="menu-item"><a href="#">Hot Sale items</a></li>
                  <li className="menu-item"><a href="#">Top new items</a></li>
                  <li className="menu-item"><a href="#">Top Selling</a></li>
                  <li className="menu-item"><a href="#">Top rated items</a></li>
                </ul>
              </div>
            </div>

            <div className="primary-nav-section">
              <div className="container">
                <ul className="nav primary">
                  <li className="menu-item home-icon">
                    <Link to="/">
                      <i className="fa fa-home" />
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/apropos">About Us</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/shop">Shop</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/cart">Cart</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/checkout">Checkout</Link>
                  </li>

                  <li className="menu-item">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header header-style-1">
  <div className="container-fluid">
    <div className="row">
      <div className="topbar-menu-area">
        <div className="container">
          <div className="topbar-menu left-menu">
            <ul>
              <li className="menu-item">
                <Link title="Hotline: (+123) 456 789" to="#">
                  <span className="icon label-before fa fa-mobile" />
                  Hotline: (+123) 456 789
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-menu right-menu">
            <ul>
              <li className="menu-item">
                <Link title="Register or Login" to="login.html">
                  Login
                </Link>
              </li>
              <li className="menu-item">
                <Link title="Register or Login" to="register.html">
                  Register
                </Link>
              </li>
              <li className="menu-item lang-menu menu-item-has-children parent">
                <Link title="English" to="#">
                  <span className="img label-before">
                    <img src="assets/images/lang-en.png" alt="lang-en" />
                  </span>
                  English
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </Link>
                <ul className="submenu lang">
                  <li className="menu-item">
                    <Link title="hungary" to="#">
                      <span className="img label-before">
                        <img src="assets/images/lang-hun.png" alt="lang-hun" />
                      </span>
                      Hungary
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link title="german" to="#">
                      <span className="img label-before">
                        <img src="assets/images/lang-ger.png" alt="lang-ger" />
                      </span>
                      German
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link title="french" to="#">
                      <span className="img label-before">
                        <img src="assets/images/lang-fra.png" alt="lang-fre" />
                      </span>
                      French
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link title="canada" to="#">
                      <span className="img label-before">
                        <img src="assets/images/lang-can.png" alt="lang-can" />
                      </span>
                      Canada
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children parent">
                <Link title="Dollar (USD)" to="#">
                  Dollar (USD)
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </Link>
                <ul className="submenu curency">
                  <li className="menu-item">
                    <Link title="Pound (GBP)" to="#">
                      Pound (GBP)
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link title="Euro (EUR)" to="#">
                      Euro (EUR)
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link title="Dollar (USD)" to="#">
                      Dollar (USD)
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mid-section main-info-area">
          <div className="wrap-logo-top left-section">
            <Link to="index.html" className="link-to-home">
              <img src="assets/images/logo-top-1.png" alt="mercado" />
            </Link>
          </div>
          <div className="wrap-search center-section">
            <div className="wrap-search-form">
              <form action="#" id="form-search-top" name="form-search-top">
                <input
                  type="text"
                  name="search"
                  defaultValue=""
                  placeholder="Search here..."
                />
                <button form="form-search-top" type="button">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
                <div className="wrap-list-cate">
                  <input
                    type="hidden"
                    name="product-cate"
                    defaultValue={0}
                    id="product-cate"
                  />
                  <Link to="#" className="link-control">
                    All Category
                  </Link>
                  <ul className="list-cate">
                    <li className="level-0">All Category</li>
                    <li className="level-1">-Electronics</li>
                    <li className="level-2">Batteries &amp; Chargens</li>
                    <li className="level-2">Headphone &amp; Headsets</li>
                    <li className="level-2">Mp3 Player &amp; Acessories</li>
                    <li className="level-1">-Smartphone &amp; Table</li>
                    <li className="level-2">Batteries &amp; Chargens</li>
                    <li className="level-2">Mp3 Player &amp; Headphones</li>
                    <li className="level-2">Table &amp; Accessories</li>
                    <li className="level-1">-Electronics</li>
                    <li className="level-2">Batteries &amp; Chargens</li>
                    <li className="level-2">Headphone &amp; Headsets</li>
                    <li className="level-2">Mp3 Player &amp; Acessories</li>
                    <li className="level-1">-Smartphone &amp; Table</li>
                    <li className="level-2">Batteries &amp; Chargens</li>
                    <li className="level-2">Mp3 Player &amp; Headphones</li>
                    <li className="level-2">Table &amp; Accessories</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="wrap-icon right-section">
            <div className="wrap-icon-section wishlist">
              <Link to="#" className="link-direction">
                <i className="fa fa-heart" aria-hidden="true" />
                <div className="left-info">
                  <span className="index">0 item</span>
                  <span className="title">Wishlist</span>
                </div>
              </Link>
            </div>
            <div className="wrap-icon-section minicart">
              <Link to="#" className="link-direction">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <div className="left-info">
                  <span className="index">4 items</span>
                  <span className="title">CART</span>
                </div>
              </Link>
            </div>
            <div className="wrap-icon-section show-up-after-1024">
              <Link to="#" className="mobile-navigation">
                <span />
                <span />
                <span />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: 84 }}
      >
        <div className="nav-section header-sticky" style={{ width: 865 }}>
          <div className="header-nav-section">
            <div className="container">
              <ul
                className="nav menu-nav clone-main-menu"
                id="mercado_haead_menu"
                data-menuname="Sale Info"
              >
                <li className="menu-item">
                  <Link to="#" className="link-term">
                    Weekly Featured
                  </Link>
                  <span className="nav-label hot-label">hot</span>
                </li>
                <li className="menu-item">
                  <Link to="#" className="link-term">
                    Hot Sale items
                  </Link>
                  <span className="nav-label hot-label">hot</span>
                </li>
                <li className="menu-item">
                  <Link to="#" className="link-term">
                    Top new items
                  </Link>
                  <span className="nav-label hot-label">hot</span>
                </li>
                <li className="menu-item">
                  <Link to="#" className="link-term">
                    Top Selling
                  </Link>
                  <span className="nav-label hot-label">hot</span>
                </li>
                <li className="menu-item">
                  <Link to="#" className="link-term">
                    Top rated items
                  </Link>
                  <span className="nav-label hot-label">hot</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="primary-nav-section">
            <div className="container">
              <ul
                className="nav primary clone-main-menu"
                id="mercado_main"
                data-menuname="Main menu"
              >
                <li className="menu-item home-icon">
                  <Link to="/" className="link-term mercado-item-title">
                    <i className="fa fa-home" aria-hidden="true" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/a-propos"
                    className="link-term mercado-item-title"
                  >
                    A propos de nous
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/shop" className="link-term mercado-item-title">
                    Shop
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/cart" className="link-term mercado-item-title">
                    Cart
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="link-term mercado-item-title"
                  >
                    Checkout
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className="link-term mercado-item-title"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Navbar;
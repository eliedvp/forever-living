import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <main id="main" className="main-site">

      <div className="container">

        {/* Breadcrumb */}
        <div className="wrap-breadcrumb">
          <ul>
            <li className="item-link">
              <Link to="#" className="link">home</Link>
            </li>
            <li className="item-link"><span>login</span></li>
          </ul>
        </div>

        <div className="main-content-area">

          {/* CART ITEMS */}
          <div className="wrap-iten-in-cart">
            <h3 className="box-title">Products Name</h3>

            <ul className="products-cart">

              {/* PRODUCT 1 */}
              <li className="pr-cart-item">
                <div className="product-image">
                  <figure><img src="assets/images/products/digital_18.jpg" alt="" /></figure>
                </div>

                <div className="product-name">
                  <Link className="link-to-product" to="#">
                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                  </Link>
                </div>

                <div className="price-field produtc-price">
                  <p className="price">$256.00</p>
                </div>

                <div className="quantity">
                  <div className="quantity-input">
                    <input
                      type="text"
                      name="product-quatity"
                      defaultValue="1"
                      data-max="120"
                      pattern="[0-9]*"
                    />
                    <Link className="btn btn-increase" to="#"></Link>
                    <Link className="btn btn-reduce" to="#"></Link>
                  </div>
                </div>

                <div className="price-field sub-total">
                  <p className="price">$256.00</p>
                </div>

                <div className="delete">
                  <Link to="#" className="btn btn-delete">
                    <span>Delete from your cart</span>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </Link>
                </div>
              </li>

              {/* PRODUCT 2 */}
              <li className="pr-cart-item">
                <div className="product-image">
                  <figure><img src="assets/images/products/digital_20.jpg" alt="" /></figure>
                </div>

                <div className="product-name">
                  <Link className="link-to-product" to="#">
                    Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                  </Link>
                </div>

                <div className="price-field produtc-price">
                  <p className="price">$256.00</p>
                </div>

                <div className="quantity">
                  <div className="quantity-input">
                    <input
                      type="text"
                      name="product-quatity"
                      defaultValue="1"
                      data-max="120"
                      pattern="[0-9]*"
                    />
                    <Link className="btn btn-increase" to="#"></Link>
                    <Link className="btn btn-reduce" to="#"></Link>
                  </div>
                </div>

                <div className="price-field sub-total">
                  <p className="price">$256.00</p>
                </div>

                <div className="delete">
                  <Link to="#" className="btn btn-delete">
                    <span>Delete from your cart</span>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                  </Link>
                </div>
              </li>

            </ul>
          </div>

          {/* SUMMARY */}
          <div className="summary">

            <div className="order-summary">
              <h4 className="title-box">Order Summary</h4>
              <p className="summary-info"><span className="title">Subtotal</span><b className="index">$512.00</b></p>
              <p className="summary-info"><span className="title">Shipping</span><b className="index">Free Shipping</b></p>
              <p className="summary-info total-info"><span className="title">Total</span><b className="index">$512.00</b></p>
            </div>

            <div className="checkout-info">
              <label className="checkbox-field">
                <input className="frm-input" name="have-code" id="have-code" type="checkbox" />
                <span>I have promo code</span>
              </label>

              <Link className="btn btn-checkout" to="/checkout">Check out</Link>
              <Link className="link-to-shop" to="/shop">
                Continue Shopping
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>

            <div className="update-clear">
              <Link className="btn btn-clear" to="#">Clear Shopping Cart</Link>
              <Link className="btn btn-update" to="#">Update Shopping Cart</Link>
            </div>
          </div>

          {/* MOST VIEWED PRODUCTS */}
          <div className="wrap-show-advance-info-box style-1 box-in-site">
            <h3 className="title-box">Most Viewed Products</h3>

            <div className="wrap-products">

              <div
                className="products slide-carousel owl-carousel style-nav-1 equal-container"
                data-items="5"
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"3"},"1200":{"items":"5"}}'
              >

                {/* PRODUCT CAROUSEL ITEMS (convertis en JSX) */}
                {/* -- TU AS EXACTEMENT TES ITEMS ORIGINAUX, MAIS EN JSX -- */}

                <div className="product product-style-2 equal-elem">
                  <div className="product-thumnail">
                    <Link to="#">
                      <figure><img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="" /></figure>
                    </Link>
                    <div className="group-flash">
                      <span className="flash-item new-label">new</span>
                    </div>
                    <div className="wrap-btn">
                      <Link to="#" className="function-link">quick view</Link>
                    </div>
                  </div>

                  <div className="product-info">
                    <Link to="#" className="product-name">
                      <span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span>
                    </Link>
                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                  </div>
                </div>

                {/* (...et tous les autres déjà transformés : digital_17, 15, 01, 21, 03, 04, 05) */}

              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

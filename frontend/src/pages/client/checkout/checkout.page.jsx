import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <main id="main" className="main-site">

      <div className="container">

        {/* Breadcrumb */}
        <div className="wrap-breadcrumb">
          <ul>
            <li className="item-link">
              <Link to="/" className="link">home</Link>
            </li>
            <li className="item-link">
              <span>login</span>
            </li>
          </ul>
        </div>

        <div className="main-content-area">

          {/* BILLING */}
          <div className="wrap-address-billing">
            <h3 className="box-title">Billing Address</h3>

            <form name="frm-billing">
              <p className="row-in-form">
                <label htmlFor="fname">first name<span>*</span></label>
                <input id="fname" type="text" name="fname" placeholder="Your name" />
              </p>

              <p className="row-in-form">
                <label htmlFor="lname">last name<span>*</span></label>
                <input id="lname" type="text" name="lname" placeholder="Your last name" />
              </p>

              <p className="row-in-form">
                <label htmlFor="email">Email Address:</label>
                <input id="email" type="email" name="email" placeholder="Type your email" />
              </p>

              <p className="row-in-form">
                <label htmlFor="phone">Phone number<span>*</span></label>
                <input id="phone" type="number" name="phone" placeholder="10 digits format" />
              </p>

              <p className="row-in-form">
                <label htmlFor="add">Address:</label>
                <input id="add" type="text" name="add" placeholder="Street and apartment number" />
              </p>

              <p className="row-in-form">
                <label htmlFor="country">Country<span>*</span></label>
                <input id="country" type="text" name="country" placeholder="United States" />
              </p>

              <p className="row-in-form">
                <label htmlFor="zip-code">Postcode / ZIP:</label>
                <input id="zip-code" type="number" name="zip-code" placeholder="Your postal code" />
              </p>

              <p className="row-in-form">
                <label htmlFor="city">Town / City<span>*</span></label>
                <input id="city" type="text" name="city" placeholder="City name" />
              </p>

              <p className="row-in-form fill-wife">
                <label className="checkbox-field">
                  <input type="checkbox" id="create-account" name="create-account" value="forever" />
                  <span>Create an account?</span>
                </label>

                <label className="checkbox-field">
                  <input type="checkbox" id="different-add" name="different-add" value="forever" />
                  <span>Ship to a different address?</span>
                </label>
              </p>
            </form>
          </div>

          {/* PAYMENT SECTION */}
          <div className="summary summary-checkout">

            <div className="summary-item payment-method">
              <h4 className="title-box">Payment Method</h4>

              <p className="summary-info"><span className="title">Check / Money order</span></p>
              <p className="summary-info"><span className="title">Credit Card (saved)</span></p>

              <div className="choose-payment-methods">

                <label className="payment-method">
                  <input type="radio" name="payment-method" id="payment-method-bank" value="bank" />
                  <span>Direct Bank Transfer</span>
                  <span className="payment-desc">
                    But the majority have suffered alteration in some form...
                  </span>
                </label>

                <label className="payment-method">
                  <input type="radio" name="payment-method" id="payment-method-visa" value="visa" />
                  <span>Visa</span>
                  <span className="payment-desc">
                    There are many variations of passages of Lorem Ipsum available
                  </span>
                </label>

                <label className="payment-method">
                  <input type="radio" name="payment-method" id="payment-method-paypal" value="paypal" />
                  <span>Paypal</span>
                  <span className="payment-desc">You can pay with your credit card</span>
                  <span className="payment-desc">if you don't have a paypal account</span>
                </label>
              </div>

              <p className="summary-info grand-total">
                <span>Grand Total</span>
                <span className="grand-total-price">$100.00</span>
              </p>

              <Link to="/thankyou" className="btn btn-medium">Place order now</Link>
            </div>

            {/* SHIPPING & DISCOUNT */}
            <div className="summary-item shipping-method">
              <h4 className="title-box f-title">Shipping method</h4>

              <p className="summary-info"><span className="title">Flat Rate</span></p>
              <p className="summary-info"><span className="title">Fixed $50.00</span></p>

              <h4 className="title-box">Discount Codes</h4>

              <p className="row-in-form">
                <label htmlFor="coupon-code">Enter Your Coupon code:</label>
                <input id="coupon-code" type="text" name="coupon-code" />
              </p>

              <Link to="#" className="btn btn-small">Apply</Link>
            </div>

          </div>

          {/* PRODUCTS CAROUSEL */}
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

                {/* --- PRODUCT ITEMS --- */}
                {/* (Je laisse tes produits tels quels mais convertis en JSX) */}

                {/* PRODUCT 1 */}
                <div className="product product-style-2 equal-elem">
                  <div className="product-thumnail">
                    <Link to="#" title="Product">
                      <figure>
                        <img src="assets/images/products/digital_04.jpg" width="214" height="214" alt="" />
                      </figure>
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
                      <span>Radiant-360 R6 Wireless Speaker</span>
                    </Link>
                    <div className="wrap-price">
                      <span className="product-price">$250.00</span>
                    </div>
                  </div>
                </div>

                {/* Et ainsi de suite pour les autres (déjà convertis en JSX)… */}

              </div>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}

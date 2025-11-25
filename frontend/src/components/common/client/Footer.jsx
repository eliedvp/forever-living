import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap-footer-content footer-style-1">

        {/* FUNCTION INFO */}
        <div className="wrap-function-info">
          <div className="container">
            <ul>
              <li className="fc-info-item">
                <i className="fa fa-truck" aria-hidden="true" />
                <div className="wrap-left-info">
                  <h4 className="fc-name">Free Shipping</h4>
                  <p className="fc-desc">Free On Order Over $99</p>
                </div>
              </li>

              <li className="fc-info-item">
                <i className="fa fa-recycle" aria-hidden="true" />
                <div className="wrap-left-info">
                  <h4 className="fc-name">Guarantee</h4>
                  <p className="fc-desc">30 Days Money Back</p>
                </div>
              </li>

              <li className="fc-info-item">
                <i className="fa fa-credit-card-alt" aria-hidden="true" />
                <div className="wrap-left-info">
                  <h4 className="fc-name">Safe Payment</h4>
                  <p className="fc-desc">Secure online payment</p>
                </div>
              </li>

              <li className="fc-info-item">
                <i className="fa fa-life-ring" aria-hidden="true" />
                <div className="wrap-left-info">
                  <h4 className="fc-name">Online Support</h4>
                  <p className="fc-desc">Support 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="main-footer-content">
          <div className="container">

            <div className="row">
              {/* CONTACT DETAILS */}
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Contact Details</h3>
                  <div className="item-content">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <p className="contact-txt">
                          45 Grand Central Terminal, New York, USA
                        </p>
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <p className="contact-txt">(+123) 456 789</p>
                      </li>
                      <li>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <p className="contact-txt">Contact@yourcompany.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* HOTLINE + NEWSLETTER */}
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Hot Line</h3>
                  <div className="item-content">
                    <div className="wrap-hotline-footer">
                      <span className="desc">Call Us toll Free</span>
                      <b className="phone-number">(+123) 456 789</b>
                    </div>
                  </div>
                </div>

                <div className="wrap-footer-item footer-item-second">
                  <h3 className="item-header">Newsletter</h3>
                  <form className="frm-newletter">
                    <input
                      type="email"
                      className="input-email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className="btn-submit">Subscribe</button>
                  </form>
                </div>
              </div>

              {/* MY ACCOUNT + INFO */}
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12 box-twin-content">
                <div className="row">

                  <div className="wrap-footer-item twin-item">
                    <h3 className="item-header">My Account</h3>
                    <ul>
                      <li><Link to="#" className="link-term">My Account</Link></li>
                      <li><Link to="#" className="link-term">Brands</Link></li>
                      <li><Link to="#" className="link-term">Gift Certificates</Link></li>
                      <li><Link to="#" className="link-term">Affiliates</Link></li>
                      <li><Link to="#" className="link-term">Wish list</Link></li>
                    </ul>
                  </div>

                  <div className="wrap-footer-item twin-item">
                    <h3 className="item-header">Information</h3>
                    <ul>
                      <li><Link to="#" className="link-term">Contact Us</Link></li>
                      <li><Link to="#" className="link-term">Returns</Link></li>
                      <li><Link to="#" className="link-term">Site Map</Link></li>
                      <li><Link to="#" className="link-term">Specials</Link></li>
                      <li><Link to="#" className="link-term">Order History</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* SOCIAL + PAYMENTS + APP */}
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <h3 className="item-header">We Use Safe Payments:</h3>
                <img src="assets/images/payment.png" alt="payment" style={{ maxWidth: 260 }} />
              </div>

              <div className="col-lg-4 col-sm-4">
                <h3 className="item-header">Social Network</h3>
                <ul className="social-network">
                  <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                  <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                  <li><Link to="#"><i className="fa fa-instagram" /></Link></li>
                </ul>
              </div>

              <div className="col-lg-4 col-sm-4">
                <h3 className="item-header">Download App</h3>
                <ul className="apps-list">
                  <li>
                    <Link to="#">
                      <img src="assets/images/brands/apple-store.png" width={128} height={36} alt="apple store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/images/brands/google-play-store.png" width={128} height={36} alt="google play" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="coppy-right-box">
            <div className="container">
              <p className="coppy-right-text">
                © 2024 Your Company. All rights reserved.
              </p>

              <ul className="horizontal-nav">
                <li><Link to="/about-us" className="link-term">About us</Link></li>
                <li><Link to="/privacy-policy" className="link-term">Privacy Policy</Link></li>
                <li><Link to="/terms" className="link-term">Terms & Conditions</Link></li>
                <li><Link to="/return-policy" className="link-term">Return Policy</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

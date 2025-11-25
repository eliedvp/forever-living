import  {Link} from 'react-router-dom';
 

const Home = () =>{
     
   return(
     <main id="main">
  <div className="container">
    {/*MAIN SLIDE*/}
    <div className="wrap-main-slide">
      <div
        className="slide-carousel owl-carousel style-nav-1 owl-loaded owl-drag"
        data-items={1}
        data-loop={1}
        data-nav="true"
        data-dots="false"
      >
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(-1440px, 0px, 0px)",
              transition: "all",
              width: 5040
            }}
          >
            <div className="owl-item cloned" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-2.jpg"
                  alt=""
                  className="img-slide"
                />
                <div className="slide-info slide-2">
                  <h2 className="f-title">Extra 25% Off</h2>
                  <span className="f-subtitle">On online payments</span>
                  <p className="discount-code">Use Code: #FA6868</p>
                  <h4 className="s-title">Get Free</h4>
                  <p className="s-subtitle">TRansparent Bra Straps</p>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-3.jpg"
                  alt=""
                  className="img-slide"
                />
                <div className="slide-info slide-3">
                  <h2 className="f-title">
                    Great Range of <b>Exclusive Furniture Packages</b>
                  </h2>
                  <span className="f-subtitle">
                    Exclusive Furniture Packages to Suit every need.
                  </span>
                  <p className="sale-info">
                    Stating at: <b className="price">$225.00</b>
                  </p>
                  <Link to="#" className="btn-link">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-1.jpg"
                  alt="Aloe Vera Forever Living Products"
                  className="img-slide"
                />
                <div className="slide-info slide-1">
                  <h2 className="f-title">
                    Pure <b>Aloe Vera</b>
                  </h2>
                  <span className="subtitle">
                    Découvrez le pouvoir naturel de l'Aloe Vera pur pour votre bien-être quotidien.
                  </span>
                  <p className="sale-info">
                    À partir de: <span className="price">€29.99</span>
                  </p>
                  <Link to="/shop" className="btn-link">
                    Acheter Maintenant
                  </Link>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-2.jpg"
                  alt="Compléments Alimentaires Naturels"
                  className="img-slide"
                />
                <div className="slide-info slide-2">
                  <h2 className="f-title">Compléments <b>Naturels</b></h2>
                  <span className="f-subtitle">Pour votre santé et votre vitalité</span>
                  <p className="discount-code">Code Promo: #ALOE2024</p>
                  <h4 className="s-title">Soins Complets</h4>
                  <p className="s-subtitle">Boissons & Compléments à l'Aloe Vera</p>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-3.jpg"
                  alt="Cosmétiques Naturels Aloe Vera"
                  className="img-slide"
                />
                <div className="slide-info slide-3">
                  <h2 className="f-title">
                    Cosmétiques <b>Naturels</b>
                  </h2>
                  <span className="f-subtitle">
                    Soins de beauté formulés avec de l'Aloe Vera pure pour une peau éclatante.
                  </span>
                  <p className="sale-info">
                    À partir de: <b className="price">€39.99</b>
                  </p>
                  <Link to="/shop" className="btn-link">
                    Acheter Maintenant
                  </Link>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-1.jpg"
                  alt=""
                  className="img-slide"
                />
                <div className="slide-info slide-1">
                  <h2 className="f-title">
                    Kid Smart <b>Watches</b>
                  </h2>
                  <span className="subtitle">
                    Compra todos tus productos Smart por internet.
                  </span>
                  <p className="sale-info">
                    Only price: <span className="price">$59.99</span>
                  </p>
                  <Link to="#" className="btn-link">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: 720 }}>
              <div className="item-slide">
                <img
                  src="assets/client/images/main-slider-1-2.jpg"
                  alt=""
                  className="img-slide"
                />
                <div className="slide-info slide-2">
                  <h2 className="f-title">Extra 25% Off</h2>
                  <span className="f-subtitle">On online payments</span>
                  <p className="discount-code">Use Code: #FA6868</p>
                  <h4 className="s-title">Get Free</h4>
                  <p className="s-subtitle">TRansparent Bra Straps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
        <div className="owl-dots disabled" />
      </div>
    </div>
    {/*BANNER*/}
    <div className="wrap-banner style-twin-default">
      <div className="banner-item">
        <Link to="#" className="link-banner banner-effect-1">
          <figure>
            <img
              src="assets/client/images/home-1-banner-1.jpg"
              alt=""
              width={580}
              height={190}
            />
          </figure>
        </Link>
      </div>
      <div className="banner-item">
        <Link to="#" className="link-banner banner-effect-1">
          <figure>
            <img
              src="assets/client/images/home-1-banner-2.jpg"
              alt=""
              width={580}
              height={190}
            />
          </figure>
        </Link>
      </div>
    </div>
    {/*On Sale*/}
    <div className="wrap-show-advance-info-box style-1 has-countdown">
      <h3 className="title-box">On Sale</h3>
      <div
        className="wrap-countdown mercado-countdown"
        data-expire="2020/12/12 12:34:56"
      >
        <span>
          <b>00</b> Days
        </span>{" "}
        <span>
          <b>0</b> Hrs
        </span>{" "}
        <span>
          <b>00</b> Mins
        </span>{" "}
        <span>
          <b>00</b> Secs
        </span>
      </div>
      <div
        className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
        data-items={5}
        data-loop="false"
        data-nav="true"
        data-dots="false"
        data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
      >
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transition: "all",
              width: 1915
            }}
          >
            <div className="owl-item active" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/tools_equipment_7.jpg"
                        width={800}
                        height={800}
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/digital_18.jpg"
                        width={800}
                        height={800}
                        alt=""
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <ins>
                      <p className="product-price">$168.00</p>
                    </ins>{" "}
                    <del>
                      <p className="product-price">$250.00</p>
                    </del>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/fashion_08.jpg"
                        width={800}
                        height={800}
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/digital_17.jpg"
                        width={800}
                        height={800}
                        alt=""
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <ins>
                      <p className="product-price">$168.00</p>
                    </ins>{" "}
                    <del>
                      <p className="product-price">$250.00</p>
                    </del>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/tools_equipment_3.jpg"
                        width={800}
                        height={800}
                        alt=""
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/fashion_05.jpg"
                        width={800}
                        height={800}
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <ins>
                      <p className="product-price">$168.00</p>
                    </ins>{" "}
                    <del>
                      <p className="product-price">$250.00</p>
                    </del>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/digital_04.jpg"
                        width={800}
                        height={800}
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "239.333px" }}>
              <div
                className="product product-style-2 equal-elem "
                style={{ height: 321 }}
              >
                <div className="product-thumnail">
                  <Link
                    to="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/client/images/products/kidtoy_05.jpg"
                        width={800}
                        height={800}
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                  <div className="group-flash">
                    <span className="flash-item sale-label">sale</span>
                  </div>
                  <div className="wrap-btn">
                    <Link to="#" className="function-link">
                      quick view
                    </Link>
                  </div>
                </div>
                <div className="product-info">
                  <Link to="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <ins>
                      <p className="product-price">$168.00</p>
                    </ins>{" "}
                    <del>
                      <p className="product-price">$250.00</p>
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev disabled"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
        <div className="owl-dots disabled" />
      </div>
    </div>
    {/*Latest Products*/}
    <div className="wrap-show-advance-info-box style-1">
      <h3 className="title-box">Latest Products</h3>
      <div className="wrap-top-banner">
        <Link to="#" className="link-banner banner-effect-2">
          <figure>
            <img
              src="assets/client/images/digital-electronic-banner.jpg"
              width={1170}
              height={240}
              alt=""
            />
          </figure>
        </Link>
      </div>
      <div className="wrap-products">
        <div className="wrap-product-tab tab-style-1">
          <div className="tab-contents">
            <div
              className="tab-content-item active"
              id="digital_1a"
              style={{ height: 330 }}
            >
              <div
                className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
                data-items={5}
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1915
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_04.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_17.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_15.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_01.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_21.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_03.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_04.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/digital_05.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Product Categories*/}
    <div className="wrap-show-advance-info-box style-1">
      <h3 className="title-box">Product Categories</h3>
      <div className="wrap-top-banner">
        <Link to="#" className="link-banner banner-effect-2">
          <figure>
            <img
              src="assets/client/images/fashion-accesories-banner.jpg"
              width={1170}
              height={240}
              alt=""
            />
          </figure>
        </Link>
      </div>
      <div className="wrap-products">
        <div className="wrap-product-tab tab-style-1">
          <div className="tab-control">
            <Link to="#fashion_1a" className="tab-control-item active">
              Smartphone
            </Link>
            <Link to="#fashion_1b" className="tab-control-item">
              Watch
            </Link>
            <Link to="#fashion_1c" className="tab-control-item">
              Laptop
            </Link>
            <Link to="#fashion_1d" className="tab-control-item">
              Tablet
            </Link>
          </div>
          <div className="tab-contents">
            <div
              className="tab-content-item active"
              id="fashion_1a"
              style={{ height: 348 }}
            >
              <div
                className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
                data-items={5}
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1915
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_01.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Lois Caron LCS-4027 Analog Watch - For Men
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_02.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Business Men Leather Laptop Tote Bags Man
                              Crossbody{" "}
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_09.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Alberto Torresi Borgo Yellow Shoes - Alberto
                              Torresi
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_03.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Alberto Torresi Borgo Yellow Shoes - Alberto
                              Torresi
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_07.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_08.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_06.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_05.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
            <div
              className="tab-content-item"
              id="fashion_1b"
              style={{ height: 348 }}
            >
              <div
                className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
                data-items={5}
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1915
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_03.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_07.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_08.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_09.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_02.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_05.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_08.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_04.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
            <div
              className="tab-content-item"
              id="fashion_1c"
              style={{ height: 348 }}
            >
              <div
                className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
                data-items={5}
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1915
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_02.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_03.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_04.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_05.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_06.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_07.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_08.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 321 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_09.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
            <div
              className="tab-content-item"
              id="fashion_1d"
              style={{ height: 348 }}
            >
              <div
                className="wrap-products slide-carousel owl-carousel style-nav-1 equal-container owl-loaded owl-drag"
                data-items={5}
                data-loop="false"
                data-nav="true"
                data-dots="false"
                data-responsive='{"0":{"items":"1"},"480":{"items":"2"},"768":{"items":"3"},"992":{"items":"4"},"1200":{"items":"5"}}'
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all",
                      width: 1915
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_05.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quick view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_04.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_03.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "239.333px" }}
                    >
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_02.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_01.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_06.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item sale-label">sale</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_08.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item new-label">new</span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <span className="product-price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "239.333px" }}>
                      <div
                        className="product product-style-2 equal-elem "
                        style={{ height: 339 }}
                      >
                        <div className="product-thumnail">
                          <Link
                            to="detail.html"
                            title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                          >
                            <figure>
                              <img
                                src="assets/client/images/products/fashion_09.jpg"
                                width={800}
                                height={800}
                                alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                              />
                            </figure>
                          </Link>
                          <div className="group-flash">
                            <span className="flash-item bestseller-label">
                              Bestseller
                            </span>
                          </div>
                          <div className="wrap-btn">
                            <Link to="#" className="function-link">
                              quic view
                            </Link>
                          </div>
                        </div>
                        <div className="product-info">
                          <Link to="#" className="product-name">
                            <span>
                              Radiant-360 R6 Wireless Omnidirectional Speaker
                              [White]
                            </span>
                          </Link>
                          <div className="product-rating">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                          </div>
                          <div className="wrap-price">
                            <ins>
                              <p className="product-price">$168.00</p>
                            </ins>{" "}
                            <del>
                              <p className="product-price">$250.00</p>
                            </del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev disabled"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
   )
 

}


export default Home;
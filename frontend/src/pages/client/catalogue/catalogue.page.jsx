import  {Link} from 'react-router-dom';
 

const Catalogue = () =>{
   return(
     <>
  <div className="container">
    <div className="wrap-breadcrumb">
      <ul>
        <li className="item-link">
          <Link href="#" className="link">
            home
          </Link>
        </li>
        <li className="item-link">
          <span>Digital &amp; Electronics</span>
        </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">
        <div className="banner-shop">
          <Link href="#" className="banner-link">
            <figure>
              <img src="assets/images/shop-banner.jpg" alt="" />
            </figure>
          </Link>
        </div>
        <div className="wrap-shop-control">
          <h1 className="shop-title">Digital &amp; Electronics</h1>
          <div className="wrap-right">
            <div className="sort-item orderby ">
              <select name="orderby" className="use-chosen">
                <option value="menu_order" selected="selected">
                  Default sorting
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
            <div className="sort-item product-per-page">
              <select name="post-per-page" className="use-chosen">
                <option value={12} selected="selected">
                  12 per page
                </option>
                <option value={16}>16 per page</option>
                <option value={18}>18 per page</option>
                <option value={21}>21 per page</option>
                <option value={24}>24 per page</option>
                <option value={30}>30 per page</option>
                <option value={32}>32 per page</option>
              </select>
            </div>
            <div className="change-display-mode">
              <Link href="#" className="grid-mode display-mode active">
                <i className="fa fa-th" />
                Grid
              </Link>
              <Link href="list.html" className="list-mode display-mode">
                <i className="fa fa-th-list" />
                List
              </Link>
            </div>
          </div>
        </div>
        {/*end wrap shop control*/}
        <div className="row">
          <ul className="product-list grid-products equal-container">
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_20.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_22.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_10.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_01.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_21.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_15.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_17.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_05.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_07.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_02.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_09.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
            <li className="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
              <div className="product product-style-3 equal-elem ">
                <div className="product-thumnail">
                  <Link
                    href="detail.html"
                    title="T-Shirt Raw Hem Organic Boro Constrast Denim"
                  >
                    <figure>
                      <img
                        src="assets/images/products/digital_06.jpg"
                        alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
                      />
                    </figure>
                  </Link>
                </div>
                <div className="product-info">
                  <Link href="#" className="product-name">
                    <span>
                      Radiant-360 R6 Wireless Omnidirectional Speaker [White]
                    </span>
                  </Link>
                  <div className="wrap-price">
                    <span className="product-price">$250.00</span>
                  </div>
                  <Link href="#" className="btn add-to-cart">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrap-pagination-info">
          <ul className="page-numbers">
            <li>
              <span className="page-number-item current">1</span>
            </li>
            <li>
              <Link className="page-number-item" href="#">
                2
              </Link>
            </li>
            <li>
              <Link className="page-number-item" href="#">
                3
              </Link>
            </li>
            <li>
              <Link className="page-number-item next-link" href="#">
                Next
              </Link>
            </li>
          </ul>
          <p className="result-count">Showing 1-8 of 12 result</p>
        </div>
      </div>
      {/*end main products area*/}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
        <div className="widget mercado-widget categories-widget">
          <h2 className="widget-title">All Categories</h2>
          <div className="widget-content">
            <ul className="list-category">
              <li className="category-item has-child-cate">
                <Link href="#" className="cate-link">
                  Fashion &amp; Accessories
                </Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Batteries (22)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Headsets (16)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Screen (28)
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-item has-child-cate">
                <Link href="#" className="cate-link">
                  Furnitures &amp; Home Decors
                </Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Batteries (22)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Headsets (16)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Screen (28)
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-item has-child-cate">
                <Link href="#" className="cate-link">
                  Digital &amp; Electronics
                </Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Batteries (22)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Headsets (16)
                    </Link>
                  </li>
                  <li className="category-item">
                    <Link href="#" className="cate-link">
                      Screen (28)
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-item">
                <Link href="#" className="cate-link">
                  Tools &amp; Equipments
                </Link>
              </li>
              <li className="category-item">
                <Link href="#" className="cate-link">
                  Kid’s Toys
                </Link>
              </li>
              <li className="category-item">
                <Link href="#" className="cate-link">
                  Organics &amp; Spa
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Categories widget*/}
        <div className="widget mercado-widget filter-widget brand-widget">
          <h2 className="widget-title">Brand</h2>
          <div className="widget-content">
            <ul className="list-style vertical-list list-limited" data-show={6}>
              <li className="list-item">
                <Link className="filter-link active" href="#">
                  Fashion Clothings
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Laptop Batteries
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Printer &amp; Ink
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  CPUs &amp; Prosecsors
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Sound &amp; Speaker
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Shop Smartphone &amp; Tablets
                </Link>
              </li>
              <li className="list-item default-hiden">
                <Link className="filter-link " href="#">
                  Printer &amp; Ink
                </Link>
              </li>
              <li className="list-item default-hiden">
                <Link className="filter-link " href="#">
                  CPUs &amp; Prosecsors
                </Link>
              </li>
              <li className="list-item default-hiden">
                <Link className="filter-link " href="#">
                  Sound &amp; Speaker
                </Link>
              </li>
              <li className="list-item default-hiden">
                <Link className="filter-link " href="#">
                  Shop Smartphone &amp; Tablets
                </Link>
              </li>
              <li className="list-item">
                <Link
                  data-label='Show less<i class="fa fa-angle-up" aria-hidden="true"></i>'
                  className="btn-control control-show-more"
                  href="#"
                >
                  Show more
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* brand widget*/}
        <div className="widget mercado-widget filter-widget price-filter">
          <h2 className="widget-title">Price</h2>
          <div className="widget-content">
            <div id="slider-range" />
            <p>
              <label htmlFor="amount">Price:</label>
              <input type="text" id="amount" readOnly="" />
              <button className="filter-submit">Filter</button>
            </p>
          </div>
        </div>
        {/* Price*/}
        <div className="widget mercado-widget filter-widget">
          <h2 className="widget-title">Color</h2>
          <div className="widget-content">
            <ul className="list-style vertical-list has-count-index">
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Red <span>(217)</span>
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Yellow <span>(179)</span>
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Black <span>(79)</span>
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Blue <span>(283)</span>
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Grey <span>(116)</span>
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  Pink <span>(29)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Color */}
        <div className="widget mercado-widget filter-widget">
          <h2 className="widget-title">Size</h2>
          <div className="widget-content">
            <ul className="list-style inline-round ">
              <li className="list-item">
                <Link className="filter-link active" href="#">
                  s
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  M
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  l
                </Link>
              </li>
              <li className="list-item">
                <Link className="filter-link " href="#">
                  xl
                </Link>
              </li>
            </ul>
            <div className="widget-banner">
              <figure>
                <img
                  src="assets/images/size-banner-widget.jpg"
                  width={270}
                  height={331}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
        {/* Size */}
        <div className="widget mercado-widget widget-product">
          <h2 className="widget-title">Popular Products</h2>
          <div className="widget-content">
            <ul className="products">
              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link
                      href="detail.html"
                      title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    >
                      <figure>
                        <img
                          src="assets/images/products/digital_01.jpg"
                          alt=""
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link href="#" className="product-name">
                      <span>
                        Radiant-360 R6 Wireless Omnidirectional Speaker...
                      </span>
                    </Link>
                    <div className="wrap-price">
                      <span className="product-price">$168.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link
                      href="detail.html"
                      title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    >
                      <figure>
                        <img
                          src="assets/images/products/digital_17.jpg"
                          alt=""
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link href="#" className="product-name">
                      <span>
                        Radiant-360 R6 Wireless Omnidirectional Speaker...
                      </span>
                    </Link>
                    <div className="wrap-price">
                      <span className="product-price">$168.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link
                      href="detail.html"
                      title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    >
                      <figure>
                        <img
                          src="assets/images/products/digital_18.jpg"
                          alt=""
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link href="#" className="product-name">
                      <span>
                        Radiant-360 R6 Wireless Omnidirectional Speaker...
                      </span>
                    </Link>
                    <div className="wrap-price">
                      <span className="product-price">$168.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link
                      href="detail.html"
                      title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    >
                      <figure>
                        <img
                          src="assets/images/products/digital_20.jpg"
                          alt=""
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link href="#" className="product-name">
                      <span>
                        Radiant-360 R6 Wireless Omnidirectional Speaker...
                      </span>
                    </Link>
                    <div className="wrap-price">
                      <span className="product-price">$168.00</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* brand widget*/}
      </div>
      {/*end sitebar*/}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</>
   )

}

export default Catalogue;
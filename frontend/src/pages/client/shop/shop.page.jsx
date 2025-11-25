import React from "react";

const Shop = ({ products = [] }) => {
    return (
        <main id="main" className="main-site left-sidebar">
            <div className="container">

                {/* Breadcrumb */}
                <div className="wrap-breadcrumb">
                    <ul>
                        <li className="item-link"><a href="/" className="link">Accueil</a></li>
                        <li className="item-link"><span>Produits Naturels Forever Living</span></li>
                    </ul>
                </div>

                <div className="row">
                    {/* MAIN CONTENT */}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">

                        {/* Banner */}
                        <div className="banner-shop">
                            <a href="#" className="banner-link">
                                <figure>
                                    <img src="/assets/client/images/shop-banner.jpg" alt="Shop Banner" />
                                </figure>
                            </a>
                        </div>

                        {/* Controls */}
                        <div className="wrap-shop-control">
                            <h1 className="shop-title">Produits Naturels Forever Living</h1>

                            <div className="wrap-right">
                                <div className="sort-item orderby">
                                    <select name="orderby" className="use-chosen">
                                        <option value="menu_order">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by newness</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </div>

                                <div className="sort-item product-per-page">
                                    <select name="post-per-page" className="use-chosen">
                                        <option value="12">12 per page</option>
                                        <option value="16">16 per page</option>
                                        <option value="18">18 per page</option>
                                        <option value="21">21 per page</option>
                                        <option value="24">24 per page</option>
                                        <option value="30">30 per page</option>
                                        <option value="32">32 per page</option>
                                    </select>
                                </div>

                                <div className="change-display-mode">
                                    <a href="#" className="grid-mode display-mode active">
                                        <i className="fa fa-th"></i>Grid
                                    </a>
                                    <a href="#" className="list-mode display-mode">
                                        <i className="fa fa-th-list"></i>List
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCTS */}
                        <div className="row">
                            <ul className="product-list grid-products equal-container">

                                {products.map((product, index) => (
                                    <li key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                        <div className="product product-style-3 equal-elem">
                                            <div className="product-thumnail">
                                                <a href={`/product/${product.id}`}>
                                                    <figure>
                                                        <img src={product.image} alt={product.name} />
                                                    </figure>
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name">
                                                    <span>{product.name}</span>
                                                </a>
                                                <div className="wrap-price">
                                                    <span className="product-price">${product.price}</span>
                                                </div>
                                                <a href="#" className="btn add-to-cart">Add To Cart</a>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        {/* Pagination */}
                        <div className="wrap-pagination-info">
                            <ul className="page-numbers">
                                <li><span className="page-number-item current">1</span></li>
                                <li><a className="page-number-item" href="#">2</a></li>
                                <li><a className="page-number-item" href="#">3</a></li>
                                <li><a className="page-number-item next-link" href="#">Next</a></li>
                            </ul>
                            <p className="result-count">Showing 1-8 of 12 result</p>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">

                        {/* Categories */}
                        <div className="widget mercado-widget categories-widget">
                            <h2 className="widget-title">All Categories</h2>
                            <div className="widget-content">
                                <ul className="list-category">
                                    <li className="category-item has-child-cate">
                                        <a href="#" className="cate-link">Boissons Naturelles</a>
                                        <span className="toggle-control">+</span>
                                        <ul className="sub-cate">
                                            <li className="category-item"><a href="#">Jus d'Aloe Vera (12)</a></li>
                                            <li className="category-item"><a href="#">Boissons Énergétiques (8)</a></li>
                                            <li className="category-item"><a href="#">Smoothies Naturels (15)</a></li>
                                        </ul>
                                    </li>

                                    <li className="category-item"><a href="#" className="cate-link">Compléments Alimentaires</a></li>
                                    <li className="category-item"><a href="#" className="cate-link">Cosmétiques & Soins</a></li>
                                    <li className="category-item"><a href="#" className="cate-link">Produits Bien-être</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* More sidebar widgets ici si tu veux */}
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Shop;

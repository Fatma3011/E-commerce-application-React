import React from 'react';
export const TopSellers = () => {
    return (
        <div className="single-product-widget">
                            <h2 className="product-wid-title">Top Sellers</h2>
                            <a href className="wid-view-more">View All</a>
                            <div className="single-wid-product">
                                <a href="single-product.html">
                                    <img src="/assets/img/product-thumb-1.jpg" alt className="product-thumb" />
                                </a>
                                <h2>
                                    <a href="single-product.html">Sony Smart TV - 2015</a>
                                </h2>
                                <div className="product-wid-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                                <div className="product-wid-price">
                                    <ins>$400.00</ins>
                                    <del>$425.00</del>
                                </div>
                            </div>
                            <div className="single-wid-product">
                                <a href="single-product.html">
                                    <img src="/assets/img/product-thumb-2.jpg" alt className="product-thumb" />
                                </a>
                                <h2>
                                    <a href="single-product.html">Apple new mac book 2015</a>
                                </h2>
                                <div className="product-wid-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                                <div className="product-wid-price">
                                    <ins>$400.00</ins>
                                    <del>$425.00</del>
                                </div>
                            </div>
                            <div className="single-wid-product">
                                <a href="single-product.html">
                                    <img src="/assets/img/product-thumb-3.jpg" alt className="product-thumb" />
                                </a>
                                <h2>
                                    <a href="single-product.html">Apple new i phone 6</a>
                                </h2>
                                <div className="product-wid-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                                <div className="product-wid-price">
                                    <ins>$400.00</ins>
                                    <del>$425.00</del>
                                </div>
                            </div>
                        </div>
        

    );
};

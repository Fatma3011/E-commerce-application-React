import React from 'react';
export const TopNew = () => {
    return(
        <div className="single-product-widget">
        <h2 className="product-wid-title">Top New</h2>
        <a href="#" className="wid-view-more">View All</a>
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
        <div className="single-wid-product">
            <a href="single-product.html">
                <img src="/assets/img/product-thumb-4.jpg" alt className="product-thumb" />
            </a>
            <h2>
                <a href="single-product.html">Samsung gallaxy note 4</a>
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
                <img src="/assets/img/product-thumb-1.jpg" alt className="product-thumb" />
            </a>
            <h2>
                <a href="single-product.html">Sony playstation microsoft</a>
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

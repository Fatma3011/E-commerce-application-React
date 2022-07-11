import React from 'react';
export const ProductItem = () => {
    return(
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
    );
};

import React from 'react';
export const ProductCard = (props) => {
    const {id, image, name, price, review,discountRate,categoryName} =props;
    
    return (
        <div className="single-shop-product">
            <div className="product-upper">
                <img src={`/assets/produts-img/${categoryName}/${image}`} alt />
            </div>
            <h2>       <a href="product.html">{name}</a></h2>
            <div className="product-carousel-price">
                <ins>{price}</ins> <del>$999.00</del>
            </div>
            <div className="product-option-shop">
                <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
            </div>
        </div>
    );
};

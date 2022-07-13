import {useState} from 'react';
import {Link  } from 'react-router-dom'
import { useParams } from 'react-router-dom';
export const ProductCard = (props) => {
    const {id, image, name, price, review,discountRate,categoryName} =props;
    const crossedOutPrice=(price, discountRate)=>{
        var priceCrossed= price + (discountRate * price)/100;
        return priceCrossed;
    }
    const cardId = localStorage.getItem("cartId");
    const addToCart = () => {
        
    }
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper">
                    <img src={`/assets/img/${image}`} alt="" />
                </div>
                <Link to={`/product/${id}`}>
                    <h2>{name}</h2>
                </Link>
                <div className="product-carousel-price">
                    <ins>{price}</ins> <del>${crossedOutPrice(price,discountRate )}</del>
                </div>
                <div className="product-option-shop">
                    <Link to={`/carts/${cardId}`} onClick={addToCart()}>
                        <a className="add_to_cart_button" 
                            data-quantity={1} 
                            data-product_sku data-product_id={70} 
                            rel="nofollow" 
                            href=""
                        >
                            Add to cart
                        </a>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

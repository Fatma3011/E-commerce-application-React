import {Link  } from 'react-router-dom'
import { AddToCartButton } from '../cartComponents/AddToCartButton';
export const ProductCard = (props) => {
    const {id, image, name, price, review,discountRate,categoryName} =props;
    const crossedOutPrice=(price, discountRate)=>{
        var priceCrossed= price + (discountRate * price)/100;
        return priceCrossed;
    }
    const cartId = localStorage.getItem("cartId");

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
                    <ins>{price}</ins> <del>${crossedOutPrice(price, discountRate)}</del>
                </div>
                <div className="product-option-shop">
                    <AddToCartButton cartId={cartId} name = {name} price = {price} image = {image} id = {id} nbToAdd={1} />
                </div>
            </div>
        </div>
    );
};

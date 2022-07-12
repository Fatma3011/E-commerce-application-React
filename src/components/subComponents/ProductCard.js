import {useState} from 'react';
import {Link  } from 'react-router-dom'
import { useParams } from 'react-router-dom';
export const ProductCard = (props) => {
    const {id, image, name, price, review,discountRate,categoryName} =props;
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    
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
                    <ins>{price}</ins> <del>$</del>
                </div>
                <div className="product-option-shop">
                    <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                </div>
            </div>
        </div>
    );
};

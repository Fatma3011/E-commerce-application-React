import {Link, useNavigate  } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { addProductToCart } from '../../../services/CartService';

export const AddToCartButton = (props) => {
    
    
    const navigate = useNavigate();
    const {cartId, name, price, image, id, nbToAdd} = props;
    const cartData = useSelector(state => state.cart);
    let data = {};
    let sameItem, ancientItems;

    const addToCart = (e,id, name, image, price,nbToAdd) => {
        e.preventDefault();
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": nbToAdd
        }
        sameItem = cartData.items.filter(item => {
            return item.id === id;
          });
        cartData.totalQuantities = cartData.totalQuantities + nbToAdd;
        cartData.subTotal = cartData.subTotal+ price * nbToAdd;
        cartData.total = cartData.subTotal + ( cartData.subTotal * cartData.tax)/100;
        if (sameItem.length == 0) {
            cartData.items.push(data);
        }
        else {
            ancientItems = cartData.items.filter(item => {
                return item.id !== data.id;
              });
            sameItem[0].qty = sameItem[0].qty + nbToAdd;
            ancientItems.push(...sameItem);
            cartData.items = ancientItems;
        }
        
        
        addProductToCart("carts/"+cartId, cartData).then((response) => {
        })
    }
   
    return(

        
                    <a 
                        className="add_to_cart_button"
                        data-quantity="1" 
                        data-product_sku="" 
                        data-product_id="70" 
                        rel="nofollow" 
                        href="" 
                        onClick={(e)=>{addToCart(e,id, name, image, price, Number(nbToAdd))}}>
                        Add to cart
                    </a>
          
        );
};

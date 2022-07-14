import {Link, useNavigate  } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { addProductToCart } from '../../../services/CartService';
import { setCartData } from '../../../redux/reducers/cart/cartActions';

export const AddToCartButton = (props) => {
    //lezem nzid l produit lel redux
    //ntesti kn mawjoud nzid fil quantité
    //sinon nzidou
    //
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartId, name, price, image, id} = props;
    const cartData = useSelector(state => state.cart);
    let data = {};
    let result, result2;
    const addToCart = (e,id, name, image, price) => {
        e.preventDefault();
        console.log("debut");
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": 1
        }
        result = cartData.items.filter(item => {
            return item.id === id;
          });
        cartData.subTotal = cartData.subTotal+ price;
        cartData.total = cartData.subTotal + ( cartData.subTotal * cartData.tax)/100;
        
        if (result.length == 0) {
            cartData.items.push(data);
            console.log("if");
        }
        else {
            result2 = cartData.items.filter(item => {
                return item.id !== data.id;
              });
            result[0].qty = result[0].qty + 1;
            result2.push(...result);
            cartData.items = result2;
            console.log("else");
        }
        
        console.log(cartData);
        
        addProductToCart("carts/"+cartId, cartData).then((response) => {
            console.log("then adddToCart");
        })
        console.log("fin");
        navigate(`/carts/${cartId}`);
        console.log("fin2");
    }
   
    return(

        
                    <a 
                        className="add_to_cart_button"
                        data-quantity="1" 
                        data-product_sku="" 
                        data-product_id="70" 
                        rel="nofollow" 
                        href="" 
                        onClick={(e)=>{addToCart(e,id, name, image, price)}}>
                        Add to cart
                    </a>
          
        );
};

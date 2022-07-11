import { getCartId } from '../../../services/CartService';
import {
    SET_CART_ID,
} from '../../actionTypes'

export function setCartId() {
    let url = "/cart/";
    //todo recuperer comingFrom
    
    return function (dispatch) {
        getCartId(url)
            .then(response => {
                dispatch({
                    type: SET_CART_ID, id: response.id
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

}
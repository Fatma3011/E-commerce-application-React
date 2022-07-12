import { getCartId, getCartData } from '../../../services/CartService';
import {
    SET_CART_ID,
    SET_CART_DATA,
} from '../../actionTypes'

export function setCartId() {
    const url = "carts";

    return function (dispatch) {
        getCartId(url)
            .then(response => {
                dispatch({
                    type: SET_CART_ID, id: response.id
                });
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

}
export function setCartData(id) {
    const url = "cart/";

    return function (dispatch) {
        getCartData(url +id)
            .then(response => {
                dispatch({
                    type: SET_CART_DATA, data: response.data
                });
            })
            .catch((error) => {
                console.log("ERROR");
            })
    }

}
import {
    SET_CART_ID,
} from '../../actionTypes'

const initialState = {
    cartId: "",
}

const cartReducer = (state = initialState, action) => {
    if (action.type === SET_CART_ID) {
            return {
                cartId: action.id,
            }
        }
    return {
            cartId: "",
    }
    }
export default cartReducer
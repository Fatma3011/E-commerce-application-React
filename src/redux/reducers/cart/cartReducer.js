import {
    SET_CART_ID,
    SET_CART_DATA,
} from '../../actionTypes'

const initialState = {
    data: [],
    cartId: "",
}

const cartReducer = (state = initialState, action) => {
    if (action.type === SET_CART_ID) {
            return {
                cartId: action.id,
                data: state.data
            }
        }
        if (action.type === SET_CART_DATA) {
            return {
                cartId: state.cartId,
                data: action.data
            }
        }
    return {
        cartId: state.cartId,
        data: state.data
    }
    }
export default cartReducer
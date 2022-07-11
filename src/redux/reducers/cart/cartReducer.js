import {
    SET_CART_ID,
} from '../../actionTypes'

const initialState = {
    cartId: "fff",
}

const cartReducer = (state = initialState, action) => {
    if (action.type === SET_CART_ID) {
            return {
                cartId: action.id,
            }
        }
    }
export default cartReducer
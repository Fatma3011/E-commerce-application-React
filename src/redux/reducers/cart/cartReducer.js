import {
    SET_CART_ID,
    SET_CART_DATA,
} from '../../actionTypes'

const initialState = {
    cartId: "",
    total: 0,
    subTotal: 0,
    items: [],

}

const cartReducer = (state = initialState, action) => {
    if (action.type === SET_CART_ID) {
        return {
            cartId: action.id,
            total: state.data.total,
            subTotal: state.data.subTotal,
            items: state.data.items
        }
    }
    if (action.type === SET_CART_DATA) {
        return {
            cartId: action.data.id,
            total: action.data.total,
            subTotal: action.data.subTotal,
            items: state.items.concat( action.data.items),
        }
    }
    return {
        cartId: state.cartId,
        total: state.total,
        subTotal: state.subTotal,
        items: state.items
    }
}
export default cartReducer
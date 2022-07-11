import {createStore} from 'redux';
import cartReducer from './reducers/cart/cartReducer';

let store = createStore(cartReducer);
export default store;
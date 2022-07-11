import { combineReducers} from "redux";
import categoryReducer from './reducers/category/categoryReducer';
import cartReducer from './reducers/cart/cartReducer';

const combinedReducer = combineReducers({
    cart: categoryReducer,
    category: cartReducer,
});

export default combinedReducer;


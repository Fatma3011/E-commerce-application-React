import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducer from './combineReducers';
import cartReducer from './reducers/cart/cartReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

let store = createStore(cartReducer,composedEnhancer);
export default store;
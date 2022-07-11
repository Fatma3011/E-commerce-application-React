import React, {useEffect, useRef, useState} from 'react';
import { getProductsSearch } from '../../services/ProductService';
import {useSelector,useDispatch} from 'react-redux';
import {Link ,useNavigate } from 'react-router-dom'
import { setCartId } from '../../redux/reducers/cart/cartActions';

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartId = useSelector(state => state.cartId);
    const [searchField, setSearchFields] = useState('');
    useEffect(()=>{
        
        dispatch(setCartId());
    },[])
    const  formSubmitSearch = event => {
        console.log(searchField);  
        //console.log(getProductsSearch(searchField)); RETURN PROMISE <PENDING> WE SHOULD WRITE .THEN

        //appel à une fonction qui retourne un promesse sans utiliser async et await 
        getProductsSearch(searchField).then(function(result) {
            console.log(result) 
         })
        
        // function with ASYNC and AWAIT
        //getProductsSearch2(searchField);
        
  }

    const inputHandler = event => {
        setSearchFields(event.target.value);
    }
    const goToCart = event =>{
        navigate(`/cart/${cartId}`);
     
    }

    return (
        <div>
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo" style={{ width: 100, height: 100 }}>
                                <h1>
                                    <Link to="/home"><img src="/assets/img/logo.png" /></Link>
                                </h1>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" style={{ marginTop: 30 }} placeholder="Search products..." onChange={inputHandler} />
                            <input type="button" onClick={formSubmitSearch}  defaultValue="Search" />
                        </div>
                        <div className="col-sm-4">
                            <div className="shopping-item">
                                <Link to="/cart" onClick={goToCart}>
                                    Cart :  <span className="cart-amunt">100.58 €</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

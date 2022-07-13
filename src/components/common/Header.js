import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { setCartData } from '../../redux/reducers/cart/cartActions';
import { getCartId } from '../../services/CartService';

export const Header = (props) => {
    const {pathname} = useLocation();
    const location = pathname.substr(0,7); 
    const [visibility, setVisibility] = useState(true);
    const dispatch = useDispatch();
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();
    const cartId =  localStorage.getItem('cartId');
    useEffect(()=>{
        const url = "carts";
        if (!cartId){
            getCartId(url)
                .then(response => {
                    localStorage.setItem('cartId', response.id);
                    dispatch(setCartData(response.id));
            })
        }
        
    },[])
    const  formSubmitSearch = event => {
        console.log(searchField);
        if (searchField !== "")  {
            navigate(`/product-list/search=${searchField}`)
        }
  }

    const inputHandler = event => {
        setSearchField(event.target.value);
    }

    useEffect(()=>{
        if (location === "/carts/"){
            setVisibility(false);
        }
        else {setVisibility(true);}
    }
    ,[pathname])

    return (
         <div>
            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo" style={{ width: 100, height: 100 }}>
                                <h1>
                                    <Link to="/home"><img alt ="" src="/assets/img/logo.png" /></Link>
                                </h1>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        {visibility &&
                                <>
                                    <input type="text" style={{ marginTop: 30 }} placeholder="Search products..." onChange={inputHandler} />
                                    <input type="button" onClick={formSubmitSearch}  defaultValue="Search" />
                                </>
                            }
                        </div> 
                        <div className="col-sm-4">
                        {cartId &&
                            <div className="shopping-item">
                            <Link to={ `/carts/${cartId}` }>
                                    Cart :  <span className="cart-amunt">100.58 €</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span>
                                </Link>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

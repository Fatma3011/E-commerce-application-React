import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { setCartData } from '../../redux/reducers/cart/cartActions';
import { getCartId } from '../../services/CartService';

export const Header = (props) => {
    const {pathname} = useLocation();
    const [visibility, setVisibility] = useState(true);
    const dispatch = useDispatch();
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();
    const cartId =  localStorage.getItem('cartId');
    const data = useSelector(state => state.cart);
    const totalQuantities = useSelector(state => state.cart.totalQuantities)
    let newCart = {
        "total": 0,
        "subTotal": 0,
        "tax": 0,
        "totalQuantities":0,
        "items": []
    };
    let searchWord = "";
    useEffect(()=>{
        const url = "carts";
        if (!cartId){
            getCartId(url, newCart)
                .then(response => {
                    localStorage.setItem('cartId', response.id);
                    dispatch(setCartData(response.id));
            })
        }
        else{
            dispatch(setCartData(cartId));
        }

    },[cartId])

    const  formSubmitSearch = event => {
            searchWord = searchField;
            setSearchField("");
        if (searchField !== "")  {
            navigate(`/product-list/search=${searchWord}`)
        }
  }

    const inputHandler = event => {
        setSearchField(event.target.value);
    }

    useEffect(()=>{
        if (pathname === "/carts"){
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
                        {cartId && totalQuantities !== 0 &&
                            <div className="shopping-item">
                            <Link to={ `/carts` }>
                                    Cart :  <span className="cart-amunt">{data.total} €</span> <i className="fa fa-shopping-cart" /> <span className="product-count">{totalQuantities}</span>
                                </Link>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

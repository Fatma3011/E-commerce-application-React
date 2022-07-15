import {useEffect} from 'react';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { PageLayout } from '../pages/PageLayout';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';

import { setCategories } from '../redux/reducers/category/categoryActions';
export const Routess = () => {
    //<Route path="*" element={<PageNotFound />} />
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCategories());
    },[dispatch])
    return(
        <BrowserRouter>
            <PageLayout>
                <Routes>
                        <Route path="/home" exact element={<HomePage/> } />
                        <Route path="/carts/:cartId" element={<CartPage/> } />
                        <Route path="/checkout" exact element={<CheckoutPage/> } />
                        <Route path="/product/:productId" element={<ProductPage/> } />
                        <Route path="/product-list/:categoryId" element={<ProductListPage/> } />
                </Routes>
            </PageLayout>
        </BrowserRouter>
        );
};

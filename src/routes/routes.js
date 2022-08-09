import {useEffect} from 'react';
import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HomePage } from '../pages/HomePage';
import { PageLayout } from '../pages/PageLayout';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';
import { NotFound } from '../pages/NotFound';

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
                    <Route path="/home" exact element={<HomePage />} />
                    <Route path="/carts" exact element={<CartPage />} />
                    <Route path="/checkout" exact element={<CheckoutPage />} />
                    <Route path="/product/:productId" exact element={<ProductPage />} />
                    <Route path="/product-list/:categoryId" exact element={<ProductListPage />} />
                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
            </PageLayout>
        </BrowserRouter>
        );
};

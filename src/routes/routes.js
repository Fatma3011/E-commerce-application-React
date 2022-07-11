import React from 'react';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import { CartPage } from '../components/CartPage';
import { CheckoutPage } from '../components/CheckoutPage';
import { HomePage } from '../components/HomePage';
import { PageLayout } from '../components/PageLayout';
import { ProductListPage } from '../components/ProductListPage';
import { ProductPage } from '../components/ProductPage';
export const Routess = () => {
    return(
        <BrowserRouter>
            <PageLayout>
                <Routes>
                        <Route path="/home" exact element={<HomePage/> } />
                        <Route path="/cart/:cartId" element={<CartPage/> } />
                        <Route path="/checkout" exact element={<CheckoutPage/> } />
                        <Route path="/product/:productId" element={<ProductPage/> } />
                        <Route path="/product-list/:categoryId" element={<ProductListPage/> } />
                </Routes>
            </PageLayout>
        </BrowserRouter>
        );
};

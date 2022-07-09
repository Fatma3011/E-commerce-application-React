import React from 'react';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { ProductListLayout } from './subComponents/ProductListLayout';
export const ProductListPage = () => {
    return(
        <>
            <Header />
            <Navigation />
            <ProductListLayout/>
            <Footer />
        </>
    );
};

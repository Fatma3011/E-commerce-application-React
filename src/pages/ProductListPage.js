import React from 'react';
import { Pagination } from '../components/subComponents/productListComponents/Pagination';
import { ProductList } from '../components/subComponents/productListComponents/ProductList';
export const ProductListPage = () => {
    return(
        <>
            <ProductList/>
            
            <Pagination/>
                
        </>
    );
};

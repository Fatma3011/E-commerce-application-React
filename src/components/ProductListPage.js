import React from 'react';
import { Pagination } from './subComponents/Pagination';
import { ProductList } from './subComponents/ProductList';
export const ProductListPage = () => {
    return(
        <>
            <ProductList/>
            
            <Pagination/>
                
        </>
    );
};

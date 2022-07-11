import React from 'react';
import { ProductItem } from './ProductItem';
import { ViewAllButton } from './ViewAllButton';
export const TopProduct = (props) => {
    return (
        <div className="single-product-widget">
            <h2 className="product-wid-title">{props.top}</h2>
            <ViewAllButton/>
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
};

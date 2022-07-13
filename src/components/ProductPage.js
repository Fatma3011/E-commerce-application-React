import React from 'react';
import { ProductCard } from './subComponents/ProductCard';
import { ProductFP } from './subComponents/ProductFP';
import { ProductItem } from './subComponents/ProductItem';
export const ProductPage = () => {
    return(
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                    <ProductFP/>
                    </div>
                </div>
            </div>
        </div>

    );
};

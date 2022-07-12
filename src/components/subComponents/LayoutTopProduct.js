import React from 'react';
import { TopProduct } from './TopProduct';
export const LayoutTopProduct = () => {
    return(
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <TopProduct top="Top Sellers" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

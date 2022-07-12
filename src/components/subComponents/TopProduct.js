import React, { useEffect,useState } from 'react';
import { getTopProducts } from '../../services/ProductService';
import { ProductItem } from './ProductItem';
export const TopProduct = (props) => {
    const [topSellers, setTopSellers] = useState([]);
    const [topNew, setTopNew] = useState([]);
    useEffect(()=>{
        getTopProducts('top-sellers-products').then((response) => {
            setTopSellers(response);
         });
        getTopProducts('top-new-products').then((response) => {
            setTopNew(response);
         });
        
    }, [])
    return (
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    
                            <ProductItem title ="Top Sellers" products={topSellers} />
                        
                    
                            <ProductItem title ="Recently Viewed" />
                       
                            <ProductItem title ="Top New" products={topNew} />
                        
                    
                </div>
            </div>
        </div>
    );
};

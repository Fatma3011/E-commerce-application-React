import React, { useEffect,useState } from 'react';
import { getTopProducts } from '../../../services/ProductService';
import { ProductElement } from './ProductElement';
export const TopProduct = (props) => {
    const [topSellers, setTopSellers] = useState([]);
    const [topNew, setTopNew] = useState([]);
    const [recentlyViewedProducts , setRecentlyViewedProducts] = useState([]);

    useEffect(()=>{
        getTopProducts('top-sellers-products').then((response) => {
            setTopSellers(response);
         });
        getTopProducts('top-new-products').then((response) => {
            setTopNew(response);
         });
        setRecentlyViewedProducts (JSON.parse(localStorage.getItem('recentlyViewed')));
        console.log("TopProductComponents useEffect");
        
    }, [])
    return (
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    
                            <ProductElement title ="Top Sellers" products={topSellers} />
                    
                            <ProductElement title ="Recently Viewed" products = {recentlyViewedProducts} />
                       
                            <ProductElement title ="Top New" products={topNew} />
                        
                    
                </div>
            </div>
        </div>
    );
};

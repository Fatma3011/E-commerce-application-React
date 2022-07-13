import React, { useEffect,useState } from 'react';
import { getTopProducts } from '../../services/ProductService';
import { ProductItem } from './ProductItem';
export const TopProduct = (props) => {
    const [topSellers, setTopSellers] = useState([]);
    const [topNew, setTopNew] = useState([]);
    const [recentlyViewedProducts , setRecentlyViewedProducts] = useState([]);
    console.log(recentlyViewedProducts);


    useEffect(()=>{
        getTopProducts('top-sellers-products').then((response) => {
            setTopSellers(response);
         });
        getTopProducts('top-new-products').then((response) => {
            setTopNew(response);
         });
        setRecentlyViewedProducts (JSON.parse(localStorage.getItem('recentlyViewed')));
        console.log(recentlyViewedProducts);
        
    }, [])
    return (
        <div className="product-widget-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    
                            <ProductItem title ="Top Sellers" products={topSellers} />
                    
                            <ProductItem title ="Recently Viewed" products = {recentlyViewedProducts} />
                       
                            <ProductItem title ="Top New" products={topNew} />
                        
                    
                </div>
            </div>
        </div>
    );
};

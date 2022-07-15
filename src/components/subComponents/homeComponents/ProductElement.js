import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ViewAllButton } from './ViewAllButton';

export const ProductElement = (props) => {
    const [viewAll, setViewAll] = useState(true);
    const {products, title}=props;  
    let listItem = [];
    const threeItems = () =>{
        console.log("threeItems", products)
        for (let i = 0; i < 3; i++) { 
            listItem.push(
                <ProductItem key={i} index={i} item={products[i]}/>
            );
          }
          return listItem;
    }
    const callback = (name) => {
        if(name){
            setViewAll(false);
        }
    }
    useEffect(()=>{},[viewAll]);
    return(
        <div className="col-md-4">
            <div className="single-product-widget">
                <h2 className="product-wid-title">{title}</h2>
                <ViewAllButton onClick={callback} />
                {products  && !viewAll && threeItems() }
                {products && viewAll && products.map((item, index) => (
                    <ProductItem key={index} index={index} item={item}/>
                    ))}
            </div>
        </div>
    );
};

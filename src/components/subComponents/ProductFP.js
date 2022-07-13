import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../services/ProductService';
export const ProductFP = () => {
    const {productId} = useParams();
    const [ productData, setProductData] = useState([]);
    const items = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    let productItem ={}
    let result = [];
    const [ filteredProduct, setFilteredProduct] =  useState(false);
    useEffect(()=>{
        getProductData(productId).then((response)=>{
            setProductData(response);
            result = items.filter(item => {
                return item.id === response.id;
              });
              console.log(result.length)
            if (result.length === 0) {
                setFilteredProduct (true) ;
            }
            if (filteredProduct){
                console.log("in if");
                productItem = {
                    discountRate: response.discountRate,
                    id: response.id,
                    imageName: response.imageName,
                    name: response.name,
                    review: response.review,
                    price: response.price
                 }
                items.push(productItem);
                localStorage.setItem('recentlyViewed', JSON.stringify(items));
            }
           
        })
        
        
        
    },[]);
    
    return(
        <div className="product-content-right">
            <div className="product-breadcroumb">
                <a href>Home</a>
                <a href>Category Name</a>
                <a href>Sony Smart TV - 2015</a>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="product-images">
                        <div className="product-main-img">
                            <img src="img/product-2.jpg" alt />
                        </div>
                        <div className="product-gallery">
                            <img src="img/product-thumb-1.jpg" alt />
                            <img src="img/product-thumb-2.jpg" alt />
                            <img src="img/product-thumb-3.jpg" alt />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="product-inner">
                        <h2 className="product-name">Sony Smart TV - 2015</h2>
                        <div className="product-inner-price">
                            <ins>$700.00</ins> <del>$100.00</del>
                        </div>
                        <form action className="cart">
                            <div className="quantity">
                                <input type="number" size={4} className="input-text qty text" title="Qty" defaultValue={1} name="quantity" min={1} step={1} />
                            </div>
                            <button className="add_to_cart_button" type="submit">Add to cart</button>
                        </form>
                        <div className="product-inner-category">
                            <h2>Product Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    
        );
};

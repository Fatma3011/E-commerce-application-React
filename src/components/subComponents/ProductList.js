import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../services/CategoryService';
import { getProductsSearch } from '../../services/ProductService';
import { ProductCard } from './ProductCard';
import { Title } from './Title';
export const ProductList = () => {

  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if ( categoryId.includes("search")){
      const searchWord = categoryId.substr(7);
      getProductsSearch(searchWord).then(function(result) {
        setProducts(result); 
        setTitle(`Search result of '${searchWord}'`);
     })
    }
    else{
      getProductByCategory(categoryId).then((res) => { 
        setProducts(res.items); 
        setTitle(res.name) })
    }
    
  }, [categoryId])

  return (
    <>
      <Title categoryName={title} />
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
        <div className='row'>
          {products?.map((item, index) => (
              <ProductCard categoryName={title} id={item.id}
              image={item.imageName}
              name={item.name}
              price={item.price}
              review={item.review}
              discountRate={item.discountRate}
              key={index}
            />
              ))
            }
             </div>
        </div>
      </div>
    </>

  );
};

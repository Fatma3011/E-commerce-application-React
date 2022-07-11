import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../../services/Category';
import { ProductCard } from './ProductCard';
import { Title } from './Title';
export const ProductList = () => {

  const { categoryId } = useParams();

  const [productByCategory, setProductByCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  console.log(productByCategory)
  useEffect(() => {
    getProductByCategory(categoryId).then((res) => { setProductByCategory(res.items); setCategoryName(res.name) })

  }, [])

  const productRows = () => {
    let index = 0;
    let items = [];
    let list = [];
    let data=[];
    while (index < (productByCategory.length - productByCategory.length % 4)) {
      data = productByCategory[index];
      items =[];
      for (let i = 1; i <= 4; i++) {
        items.push(
          <ProductCard categoryName={categoryName} id={productByCategory[index+i].id}
            image={productByCategory[index+i].imageName}
            name={productByCategory[index+i].name}
            price={productByCategory[index+i].price}
            review={productByCategory[index+i].review}
            discountRate={productByCategory[index+i].discountRate}
          />);
      }
      index += 4;
      list.push(items);
    }
    items= [];
    if (index < productByCategory.length) {
      for (let i = index; i < productByCategory.length; i++) {
        items.push(
          <ProductCard categoryName={categoryName} id={data.id}
            image={data.imageName}
            name={data.name}
            price={data.price}
            review={data.review}
            discountRate={data.discountRate}
          />)
      }
      list.push(items);
    }
    return list;
  }

  return (
    <>
      <Title categoryName={categoryName} />
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          {productByCategory !== [] && productRows().map((item, index) => (
              <div className='row'>
                {item}
              </div>
              ))
            }
        </div>
      </div>
    </>

  );
};
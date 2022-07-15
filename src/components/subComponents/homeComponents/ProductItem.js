import {Link  } from 'react-router-dom';


export const ProductItem = (props) => {
    const {index,item} = props;
    const crossedOutPrice=(price, dicountRate)=>{
        var priceCrossed= price + (dicountRate * price)/100;
        return priceCrossed;
    }
    const stars = (starsNumber)=>{
        let list = [];
        for (let i = 1; i <= starsNumber; i++) {
            list.push(
                <i key={i} className="fa fa-star" />
            );
          }
          return list;
    }
    return(
        <div className="single-wid-product" key={index}>

            <Link to={`/product/${item.id}`}>

                <img src={`/assets/img/${item.imageName}`} alt="" className="product-thumb" />

            </Link>
            <Link to={`/product/${item.id}`}>
                <h2>{item.name}
                </h2>
            </Link>
            <div className="product-wid-rating">
                {stars(item.review)}
            </div>
            <div className="product-wid-price">
                <ins>${item.price}</ins>
                <del>${crossedOutPrice(item.price, item.discountRate)}</del>
            </div>
        </div>
    );
};

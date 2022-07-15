import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { addProductToCart } from '../../../services/CartService';

export const ShopTableCart = () => {
    const cartData = useSelector(state => state.cart);
    const navigate = useNavigate();

    let sameItem = [];
    let ancientItems = [];
    let data;
    const deleteFromCart = (e, id, name, image, price) => {
        e.preventDefault();
        data = {
            "id": id,
            "name": name,
            "imageName": image,
            "price": price,
            "qty": 1
        }
        sameItem = cartData.items.filter(item => {
            return item.id === id;
        });
        cartData.subTotal = cartData.subTotal - price;
        cartData.total = cartData.subTotal - (cartData.subTotal * cartData.tax) / 100;
        sameItem[0].qty = sameItem[0].qty - 1;
        ancientItems = cartData.items.filter(item => {
            return item.id !== data.id;
        });
        if (sameItem[0].qty == 0) {
            
            cartData.items = ancientItems;

        }
        else{
            ancientItems.push(...sameItem);
            cartData.items = ancientItems;
        }

        addProductToCart("carts/" + cartData.cartId, cartData).then((response) => {
        })
        navigate(`/carts/${cartData.cartId}`);
    }
    return(
        <table cellSpacing={0} className="shop_table cart">
            <thead>
                <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Total</th>
                </tr>
            </thead>
            <tbody>
                {cartData.items && cartData.items.map((item, index) => (
                    <tr className="cart_item" key={index}>
                        <td className="product-remove">
                            <a title="Remove this item" 
                                className="remove" 
                                href="#"
                                onClick={(e)=>{ deleteFromCart(e,item.id, item.name, item.imageName, item.price)}}
                            >×</a>
                        </td>
                        <td className="product-thumbnail">
                            <a href="single-product.html">
                                <img width={145} height={145} alt="PIC" className="shop_thumbnail" src={`/assets/img/${item.imageName}`} />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="single-product.html">{item.name}</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">{item.price}€</span>
                        </td>
                        <td className="product-quantity">
                            <div className="quantity buttons_added">
                                <input type="button" className="minus" defaultValue="-" />
                                <input type="number" size={4} className="input-text qty text" title="Qty" defaultValue={item.qty} min={0} step={1} />
                                <input type="button" className="plus" defaultValue="+" />
                            </div>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">{item.price * item.qty} €</span>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td className="actions" colSpan={6}>
                        <Link to="/checkout">
                            <input type="button"
                                defaultValue="Checkout"
                                name="proceed"
                                className="checkout-button button alt wc-forward" />
                        </Link>

                    </td>
                </tr>
            </tbody>
        </table>

        );
};

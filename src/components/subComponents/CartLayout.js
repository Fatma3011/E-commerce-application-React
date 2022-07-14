import React from 'react';
import { CartTotals } from './cartComponents/CartTotals';
import { CrossSells } from './cartComponents/CrossSells';
import { ShopTableCart } from './cartComponents/ShopTableCart';
export const CartLayout = () => {
    return(
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-content-right">
                            <div className="woocommerce">
                                <ShopTableCart/>
                                <div className="cart-collaterals">
                                    <CrossSells/>
                                    <CartTotals/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
};

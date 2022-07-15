import React from 'react';
import { CustomerDetails } from '../components/subComponents/checkoutComponents/CustomerDetails';
import { OrderReview } from '../components/subComponents/checkoutComponents/OrderReview';
import { Title } from '../components/common/Title';

export const CheckoutPage = () => {
    return(
        <>
            <Title categoryName="Checkout"/>
            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-content-right">
                                <div className="woocommerce">
                                    <form encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
                                        <CustomerDetails />
                                        <OrderReview />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
};

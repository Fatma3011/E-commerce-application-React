import React from 'react';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { CustomerDetails } from './subComponents/CustomerDetails';
import { OrderReview } from './subComponents/OrderReview';
import { Title } from './subComponents/Title';

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

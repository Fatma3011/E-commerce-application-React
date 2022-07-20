import React from 'react';
import swal from 'sweetalert';
import { OrderReview } from '../components/subComponents/checkoutComponents/OrderReview';
import { Title } from '../components/common/Title';
import {useSelector} from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";

export const CheckoutPage = () => {
    const cartData = useSelector(state => state.cart);
    const orderPlace = (e, cart) => {
        console.log(formik.errors === {})
        if (formik.errors){
            swal ( "Oops" ,  "There are missing data! Please complete them" ,  "error" )

        }
        //supprimer le panier
    }
    const initialValues = {
        billing_first_name: "",
        billing_last_name: "",
        billing_company: "",
        billing_address_1: "",
        billing_address_2: "",
        billing_city: "",
        billing_state: "",
        billing_postcode: "",
        billing_email: "",
        billing_phone: "",
        ship_to_different_address: "",
        shipping_first_name: "",
        shipping_last_name: "",
        shipping_company: "",
        shipping_address_1: "",
        shipping_address_2: "",
        shipping_city: "",
        shipping_state: "",
        shipping_postcode: "",
        order_comments: "",
      };
      const validationSchema = Yup.object({
        billing_first_name: Yup.string().required("Please set your firstname !"),
        billing_last_name: Yup.string().required("Please set your lastname !"),
        billing_company: Yup.string().required("Your campany is required"),
        billing_address_1: Yup.string().required("Your first address is required"),
        billing_city: Yup.string().required("Your city is required"),
        billing_state: Yup.string().required("Your country is required"),
        billing_email: Yup.string().email("Invalid email format").required("Required"),

      });
    function onSubmit(values) {
        const registred = {
            billing_first_name: values.billing_first_name,
            billing_last_name: values.billing_last_name,
            billing_company: values.billing_company,
            billing_address_1: values.billing_address_1,
            billing_address_2: values.billing_address_2,
            billing_city: values.billing_city,
            billing_state: values.billing_state,
            billing_postcode: values.billing_postcode,
            billing_email: values.billing_email,
            billing_phone: values.billing_phone,
            ship_to_different_address: values.ship_to_different_address,
            shipping_first_name: values.shipping_first_name,
            shipping_last_name: values.shipping_last_name,
            shipping_company: values.shipping_company,
            shipping_address_1: values.shipping_address_1,
            shipping_address_2: values.shipping_address_2,
            shipping_city: values.shipping_city,
            shipping_state: values.shipping_state,
            shipping_postcode: values.shipping_postcode,
            order_comments: values.order_comments,
        };
        
    }
      const formik = useFormik({ initialValues, onSubmit, validationSchema });

    return(
        <>
            <Title categoryName="Checkout" />
            <div className="single-product-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-content-right">
                                <div className="woocommerce">
                                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
                                        <div id="customer_details" className="col2-set">
                                            <div className="col-6">
                                                <div className="woocommerce-billing-fields">
                                                    <h3>Billing Details</h3>
                                                    <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                        <label className htmlFor="billing_country">Civility <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <select className="country_to_state country_select" id="shipping_country" name="shipping_country">
                                                            <option value="AX">Mr</option>
                                                            <option value="AF">Mlle</option>
                                                            <option value="AF">Mme</option>
                                                        </select>
                                                    </p>
                                                    <p id="billing_first_name_field" className="form-row form-row-first validate-required">
                                                        <label className htmlFor="billing_first_name">First Name <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text" defaultValue
                                                            placeholder
                                                            id="billing_first_name"
                                                            name="billing_first_name"
                                                            className="input-text "
                                                            value={formik.values.billing_first_name}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_first_name && formik.errors.billing_first_name ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_first_name}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_last_name_field" className="form-row form-row-last validate-required">
                                                        <label className htmlFor="billing_last_name">Last Name <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue placeholder
                                                            id="billing_last_name"
                                                            name="billing_last_name"
                                                            className="input-text "
                                                            value={formik.values.billing_last_name}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <div className="clear" />
                                                    <p id="billing_company_field" className="form-row form-row-wide">
                                                        <label className htmlFor="billing_company">Company Name</label>
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder
                                                            id="billing_company"
                                                            name="billing_company"
                                                            className="input-text "
                                                            value={formik.values.billing_company}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
                                                        <label className htmlFor="billing_address_1">Address <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder="Street address"
                                                            id="billing_address_1"
                                                            name="billing_address_1"
                                                            className="input-text "
                                                            value={formik.values.billing_address_1}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <p id="billing_address_2_field" className="form-row form-row-wide address-field">
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder="Apartment, suite, unit etc. (optional)"
                                                            id="billing_address_2"
                                                            name="billing_address_2"
                                                            className="input-text "
                                                            value={formik.values.billing_address_2}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <p id="billing_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                        <label className htmlFor="billing_city">Town / City <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder="Town / City"
                                                            id="billing_city"
                                                            name="billing_city"
                                                            className="input-text "
                                                            value={formik.values.billing_city}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <p id="billing_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                        <label className htmlFor="billing_state">County</label>
                                                        <input type="text"
                                                            id="billing_state"
                                                            name="billing_state"
                                                            placeholder="State / County"
                                                            defaultValue
                                                            className="input-text "
                                                            value={formik.values.billing_state}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                        <label className htmlFor="billing_postcode">Postcode <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder="Postcode / Zip"
                                                            id="billing_postcode"
                                                            name="billing_postcode"
                                                            className="input-text "
                                                            value={formik.values.billing_postcode}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <div className="clear" />
                                                    <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
                                                        <label className htmlFor="billing_email">Email Address <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue placeholder
                                                            id="billing_email"
                                                            name="billing_email"
                                                            className="input-text "
                                                            value={formik.values.billing_email}
                                                            onChange={formik.handleChange}
                                                        />
                                                        {formik.touched.billing_email && formik.errors.billing_email ? (
                                                            <div className="alert alert-danger" role="alert">{formik.errors.billing_email}</div>
                                                        ) : null}
                                                    </p>
                                                    <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
                                                        <label className htmlFor="billing_phone">Phone <abbr title="required" className="required">*</abbr>
                                                        </label>
                                                        <input type="text"
                                                            defaultValue
                                                            placeholder
                                                            id="billing_phone"
                                                            name="billing_phone"
                                                            className="input-text "
                                                            value={formik.values.billing_phone}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="woocommerce-shipping-fields">
                                                    <h3 id="ship-to-different-address">
                                                        <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                                                        <input type="checkbox"
                                                            defaultValue={1}
                                                            name="ship_to_different_address"
                                                            defaultChecked="checked"
                                                            className="input-checkbox"
                                                            id="ship-to-different-address-checkbox"
                                                            value={formik.values.ship_to_different_address}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </h3>
                                                    <div className="shipping_address" style={{ display: 'block' }}>
                                                        <p id="shipping_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                                                            <label className htmlFor="shipping_country">Civility <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <select className="country_to_state country_select" id="shipping_country" name="shipping_country">
                                                                <option value="AX">Mr</option>
                                                                <option value="AF">Mlle</option>
                                                                <option value="AF">Mme</option>
                                                            </select>
                                                        </p>
                                                        <p id="shipping_first_name_field" className="form-row form-row-first validate-required">
                                                            <label className htmlFor="shipping_first_name">First Name <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                defaultValue placeholder
                                                                id="shipping_first_name"
                                                                name="shipping_first_name"
                                                                className="input-text "
                                                                value={formik.values.shipping_first_name}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_last_name_field" className="form-row form-row-last validate-required">
                                                            <label className htmlFor="shipping_last_name">Last Name <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                defaultValue placeholder
                                                                id="shipping_last_name"
                                                                name="shipping_last_name"
                                                                className="input-text "
                                                                value={formik.values.shipping_last_name}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <div className="clear" />
                                                        <p id="shipping_company_field" className="form-row form-row-wide">
                                                            <label className htmlFor="shipping_company">Company Name</label>
                                                            <input type="text"
                                                                defaultValue placeholder
                                                                id="shipping_company"
                                                                name="shipping_company"
                                                                className="input-text "
                                                                value={formik.values.shipping_company}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_address_1_field" className="form-row form-row-wide address-field validate-required">
                                                            <label className htmlFor="shipping_address_1">Address <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                defaultValue placeholder="Street address"
                                                                id="shipping_address_1"
                                                                name="shipping_address_1"
                                                                className="input-text "
                                                                value={formik.values.shipping_address_1}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_address_2_field" className="form-row form-row-wide address-field">
                                                            <input type="text"
                                                                defaultValue
                                                                placeholder="Apartment, suite, unit etc. (optional)"
                                                                id="shipping_address_2"
                                                                name="shipping_address_2"
                                                                className="input-text "
                                                                value={formik.values.shipping_address_2}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                                                            <label className htmlFor="shipping_city">Town / City <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                defaultValue
                                                                placeholder="Town / City"
                                                                id="shipping_city"
                                                                name="shipping_city"
                                                                className="input-text "
                                                                value={formik.values.shipping_city}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                                                            <label className htmlFor="shipping_state">County</label>
                                                            <input type="text"
                                                                id="shipping_state"
                                                                name="shipping_state"
                                                                placeholder="State / County"
                                                                defaultValue
                                                                className="input-text "
                                                                value={formik.values.shipping_state}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <p id="shipping_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                                                            <label className htmlFor="shipping_postcode">Postcode <abbr title="required" className="required">*</abbr>
                                                            </label>
                                                            <input type="text"
                                                                defaultValue
                                                                placeholder="Postcode / Zip"
                                                                id="shipping_postcode"
                                                                name="shipping_postcode"
                                                                className="input-text "
                                                                value={formik.values.shipping_postcode}
                                                                onChange={formik.handleChange}
                                                            />
                                                        </p>
                                                        <div className="clear" />
                                                    </div>
                                                    <p id="order_comments_field" className="form-row notes">
                                                        <label className htmlFor="order_comments">Order Notes</label>
                                                        <textarea cols={5} rows={2}
                                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                                            id="order_comments"
                                                            className="input-text "
                                                            name="order_comments"
                                                            defaultValue={""}
                                                            value={formik.values.order_comments}
                                                            onChange={formik.handleChange}
                                                        />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 id="order_review_heading">Your order</h3>
                                        <div id="order_review" style={{ position: 'relative' }}>
                                            <table className="shop_table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartData.items.map((item, index) => (
                                                        <tr className="cart_item">
                                                            <td className="product-name">
                                                                {item.name} <strong className="product-quantity">× {item.qty}</strong> </td>
                                                            <td className="product-total">
                                                                <span className="amount">£{item.price * item.qty}</span> </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">£{cartData.subTotal}</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Taxe (20%)</th>
                                                        <td>
                                                            {cartData.tax} €
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">{cartData.total} € </span></strong> </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <div id="payment">
                                                <ul className="payment_methods methods">
                                                    <li className="payment_method_bacs">
                                                        <input type="radio" data-order_button_text defaultChecked="checked" defaultValue="bacs" name="payment_method" className="input-radio" id="payment_method_bacs" />
                                                        <label htmlFor="payment_method_bacs">Direct Bank Transfer </label>
                                                        <div className="payment_box payment_method_bacs">
                                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </li>
                                                    <li className="payment_method_cheque">
                                                        <input type="radio" data-order_button_text defaultValue="cheque" name="payment_method" className="input-radio" id="payment_method_cheque" />
                                                        <label htmlFor="payment_method_cheque">Cheque Payment </label>
                                                        <div style={{ display: 'none' }} className="payment_box payment_method_cheque">
                                                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </li>
                                                    <li className="payment_method_paypal">
                                                        <input type="radio" data-order_button_text="Proceed to PayPal" defaultValue="paypal" name="payment_method" className="input-radio" id="payment_method_paypal" />
                                                        <label htmlFor="payment_method_paypal">PayPal <img alt="PayPal Acceptance Mark" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" /><a title="What is PayPal?" onClick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;" className="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                                                        </label>
                                                        <div style={{ display: 'none' }} className="payment_box payment_method_paypal">
                                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="form-row place-order">
                                                    <input type="submit"
                                                        data-value="Place order"
                                                        defaultValue="Place order"
                                                        id="place_order"
                                                        name="woocommerce_checkout_place_order"
                                                        className="button alt"
                                                        onClick={(e) => { orderPlace(e, cartData) }}
                                                    />
                                                </div>
                                                <div className="clear" />
                                            </div>
                                        </div>
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

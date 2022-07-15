import React from 'react';
export const CustomerDetails = () => {
    return(
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
                        <input type="text" defaultValue placeholder id="billing_first_name" name="billing_first_name" className="input-text " />
                    </p>
                    <p id="billing_last_name_field" className="form-row form-row-last validate-required">
                        <label className htmlFor="billing_last_name">Last Name <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder id="billing_last_name" name="billing_last_name" className="input-text " />
                    </p>
                    <div className="clear" />
                    <p id="billing_company_field" className="form-row form-row-wide">
                        <label className htmlFor="billing_company">Company Name</label>
                        <input type="text" defaultValue placeholder id="billing_company" name="billing_company" className="input-text " />
                    </p>
                    <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
                        <label className htmlFor="billing_address_1">Address <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder="Street address" id="billing_address_1" name="billing_address_1" className="input-text " />
                    </p>
                    <p id="billing_address_2_field" className="form-row form-row-wide address-field">
                        <input type="text" defaultValue placeholder="Apartment, suite, unit etc. (optional)" id="billing_address_2" name="billing_address_2" className="input-text " />
                    </p>
                    <p id="billing_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                        <label className htmlFor="billing_city">Town / City <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder="Town / City" id="billing_city" name="billing_city" className="input-text " />
                    </p>
                    <p id="billing_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                        <label className htmlFor="billing_state">County</label>
                        <input type="text" id="billing_state" name="billing_state" placeholder="State / County" defaultValue className="input-text " />
                    </p>
                    <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                        <label className htmlFor="billing_postcode">Postcode <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder="Postcode / Zip" id="billing_postcode" name="billing_postcode" className="input-text " />
                    </p>
                    <div className="clear" />
                    <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
                        <label className htmlFor="billing_email">Email Address <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder id="billing_email" name="billing_email" className="input-text " />
                    </p>
                    <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
                        <label className htmlFor="billing_phone">Phone <abbr title="required" className="required">*</abbr>
                        </label>
                        <input type="text" defaultValue placeholder id="billing_phone" name="billing_phone" className="input-text " />
                    </p>
                    <div className="clear" />
                </div>
            </div>
            <div className="col-6">
                <div className="woocommerce-shipping-fields">
                    <h3 id="ship-to-different-address">
                        <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                        <input type="checkbox" defaultValue={1} name="ship_to_different_address" defaultChecked="checked" className="input-checkbox" id="ship-to-different-address-checkbox" />
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
                            <input type="text" defaultValue placeholder id="shipping_first_name" name="shipping_first_name" className="input-text " />
                        </p>
                        <p id="shipping_last_name_field" className="form-row form-row-last validate-required">
                            <label className htmlFor="shipping_last_name">Last Name <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" defaultValue placeholder id="shipping_last_name" name="shipping_last_name" className="input-text " />
                        </p>
                        <div className="clear" />
                        <p id="shipping_company_field" className="form-row form-row-wide">
                            <label className htmlFor="shipping_company">Company Name</label>
                            <input type="text" defaultValue placeholder id="shipping_company" name="shipping_company" className="input-text " />
                        </p>
                        <p id="shipping_address_1_field" className="form-row form-row-wide address-field validate-required">
                            <label className htmlFor="shipping_address_1">Address <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" defaultValue placeholder="Street address" id="shipping_address_1" name="shipping_address_1" className="input-text " />
                        </p>
                        <p id="shipping_address_2_field" className="form-row form-row-wide address-field">
                            <input type="text" defaultValue placeholder="Apartment, suite, unit etc. (optional)" id="shipping_address_2" name="shipping_address_2" className="input-text " />
                        </p>
                        <p id="shipping_city_field" className="form-row form-row-wide address-field validate-required" data-o_class="form-row form-row-wide address-field validate-required">
                            <label className htmlFor="shipping_city">Town / City <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" defaultValue placeholder="Town / City" id="shipping_city" name="shipping_city" className="input-text " />
                        </p>
                        <p id="shipping_state_field" className="form-row form-row-first address-field validate-state" data-o_class="form-row form-row-first address-field validate-state">
                            <label className htmlFor="shipping_state">County</label>
                            <input type="text" id="shipping_state" name="shipping_state" placeholder="State / County" defaultValue className="input-text " />
                        </p>
                        <p id="shipping_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" data-o_class="form-row form-row-last address-field validate-required validate-postcode">
                            <label className htmlFor="shipping_postcode">Postcode <abbr title="required" className="required">*</abbr>
                            </label>
                            <input type="text" defaultValue placeholder="Postcode / Zip" id="shipping_postcode" name="shipping_postcode" className="input-text " />
                        </p>
                        <div className="clear" />
                    </div>
                    <p id="order_comments_field" className="form-row notes">
                        <label className htmlFor="order_comments">Order Notes</label>
                        <textarea cols={5} rows={2} placeholder="Notes about your order, e.g. special notes for delivery." id="order_comments" className="input-text " name="order_comments" defaultValue={""} />
                    </p>
                </div>
            </div>
        </div>

    );
};

import React from 'react';
import { Brands } from './subComponents/Brands';
import { Carrousel } from './subComponents/Carrousel';
import { LayoutTopProduct } from './subComponents/LayoutTopProduct';
import { Promo } from './subComponents/Promo';
export const HomePage = () => {
    return(
            <>
                    <Carrousel />
                    <Promo />
                    <Brands />
                    <LayoutTopProduct/>
            </>
        );
};

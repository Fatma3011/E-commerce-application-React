import React from 'react';
import { Brands } from './subComponents/Brands';
import { Carrousel } from './subComponents/Carrousel';
import { LayoutTopProduct } from './subComponents/LayoutTopProduct';
import { Promo } from './subComponents/Promo';
import { TopProduct } from './subComponents/TopProduct';
export const HomePage = () => {
    return(
            <>
                    <Carrousel />
                    <Promo />
                    <Brands />
                    <TopProduct/>
            </>
        );
};

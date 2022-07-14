import React from 'react';
import { Brands } from './subComponents/homeComponents/Brands';
import { Carrousel } from './subComponents/homeComponents/Carrousel';
import { Promo } from './subComponents/homeComponents/Promo';
import { TopProduct } from './subComponents/homeComponents/TopProduct';
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

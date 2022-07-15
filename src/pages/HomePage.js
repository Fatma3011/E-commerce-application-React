import React from 'react';
import { Brands } from '../components/subComponents/homeComponents/Brands';
import { Carrousel } from '../components/subComponents/homeComponents/Carrousel';
import { Promo } from '../components/subComponents/homeComponents/Promo';
import { TopProduct } from '../components/subComponents/homeComponents/TopProduct';
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

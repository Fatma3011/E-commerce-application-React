import React from 'react';
import { PageLayout } from './PageLayout';
import { Brands } from './subComponents/Brands';
import { Carrousel } from './subComponents/Carrousel';
import { Layout } from './subComponents/Layout';
import { Promo } from './subComponents/Promo';
export const HomePage = () => {
    return(
    <>
        
            <Carrousel/>
            <Promo/>
            <Brands/>
            <Layout/>
        
    </>
        );
};

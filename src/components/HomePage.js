
import React from 'react';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { Brands } from './subComponents/Brands';
import { Carrousel } from './subComponents/Carrousel';
import { Layout } from './subComponents/Layout';
import { Promo } from './subComponents/Promo';
export const HomePage = () => {
    return(
    <>
        <Header/>
        <Navigation/>
        <Carrousel/>
        <Promo/>
        <Brands/>
        <Layout/>
        <Footer/>
    </>
        );
};

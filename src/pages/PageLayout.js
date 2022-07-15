import React from 'react';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Navigation } from '../components/common/Navigation';
export const PageLayout = (props) => {

    return(
        <>
            <Header />
            <Navigation/>
                {props.children}
            <Footer/>
        </>
        
    );
};

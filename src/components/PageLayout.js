import React from 'react';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
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

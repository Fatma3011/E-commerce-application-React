import React from 'react';
import { RecentlyViewed } from './RecentlyViewed';
import { TopNew } from './TopNew';
import { TopSellers } from './TopSellers';
export const Layout = () => {
    return(


        <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <TopSellers/>
                </div>
                <div className="col-md-4">
                    <RecentlyViewed/>
                </div>
                <div className="col-md-4">
                    <TopNew/>
                </div>
            </div>
        </div>
    </div>

    );
};

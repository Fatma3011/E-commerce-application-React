import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { getAllCategory } from '../../services/Category';
export const Footer = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {        
        getAllCategory().then((res)=>
            {
                console.log(res);
                setCategories(res); 
            });
        console.log(categories);
        
    },[])
    return(
        <div className="footer-top-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-about-us">
                            <h2><span>MyStore</span></h2>
                            <p>SES Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-menu">
                            <h2 className="footer-wid-title">Categories </h2>
                            <ul>
                                {categories.map((item, index)=>(
                                    <li>
                                        <Link to={`/product-list/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-newsletter">
                            <h2 className="footer-wid-title">Newsletter</h2>
                            <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                            <div className="newsletter-form">
                                <form action="#">
                                    <input type="email" placeholder="Type your email" />
                                    <input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
    
        );
};

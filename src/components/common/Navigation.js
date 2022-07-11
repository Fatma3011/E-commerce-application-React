import React, { useEffect, useState } from 'react';
import {Link,useLocation} from 'react-router-dom'
import { getAllCategory } from '../../services/Category';
export const Navigation = () => {
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    useEffect(() => {        
        getAllCategory().then((res)=>
            {
                console.log(res);
                setCategories(res); 
            });
        console.log(categories);
        
    },[])

    return(
        <div>
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar">
                            <ul className="nav navbar-nav navbar-expand">
                                <li className="active">
                                    <Link to="/home">
                                        Home
                                    </Link>
                                </li>
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
                </div>
            </div>
            <br/>
        </div>
        );
};

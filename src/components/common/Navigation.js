import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    const {pathname} = useLocation();
    const location = pathname.substr(0,7); 
    const [visibility, setVisibility] = useState(true);
    useEffect(()=>{
        if (location === "/carts/"){
            setVisibility(false);
        }
        else {setVisibility(true);}
    }
    ,[pathname])
    const categories = useSelector(state => state.category.categories);
    return(
        visibility && <div>
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
                                {categories && categories.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={`/product-list/${item.productListId}`} >
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

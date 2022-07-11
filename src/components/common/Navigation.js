import React, { useEffect, useState } from 'react';
import {Link,useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { getAllCategory } from '../../services/CategoryService';
import { setCategories } from '../../redux/reducers/category/categoryActions';
export const Navigation = () => {
   // const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const location = useLocation();
   /* useEffect(() => {        
        getAllCategory().then((res)=>
            {
                console.log(res);
                setCategories(res); 
            });
        console.log(categories);
        
    },[])*/
    /*console.log(categories)
    useEffect(()=>{
        dispatch(setCategories());
    },[])*/

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
                                {categories && categories.map((item, index)=>(
                                    <li key={index}>
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

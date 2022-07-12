import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
export const Navigation = () => {
    const categories = useSelector(state => state.category.categories);
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
                                        <Link to={`/product-list/${item.productListId}`}>
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

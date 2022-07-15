import { OtherBrand } from '../components/subComponents/FPComponents/OtherBrand';
import { ProductFP } from '../components/subComponents/FPComponents/ProductFP';
import { RecentlyViewedForFP } from '../components/subComponents/FPComponents/RecentlyViewedForFP';
export const ProductPage = () => {

    return(
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <RecentlyViewedForFP />
                        <OtherBrand/>
                    </div>
                    <div className="col-md-8">
                        <ProductFP/>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

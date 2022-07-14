import { OtherBrand } from './subComponents/OtherBrand';
import { ProductFP } from './subComponents/ProductFP';
import { RecentlyViewedForFP } from './subComponents/RecentlyViewedForFP';
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

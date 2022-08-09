import React from 'react';
export const NotFound = (props) => {
    return(
        <div className='container' id="NotFound">
            <div class="alert alert-danger" role="alert">
               <h2> Not Found 404 </h2>
               {/* {props.location.state.categoryId && "this category is not exists"} */}
            </div>
        </div>
        );
};

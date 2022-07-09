import {ApiCaller} from './ApiCaller/apiCaller'

export const getCartId = () => {
    return new Promise((resolve, reject) => {
            ApiCaller.post('/carts')
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
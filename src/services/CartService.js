import ApiCaller from './ApiCaller/apiCaller'
import { API_BASE_URL } from '../constants/const';

export const getCartId = (url) => {
    return new Promise((resolve, reject) => {
            ApiCaller.post(API_BASE_URL + url)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
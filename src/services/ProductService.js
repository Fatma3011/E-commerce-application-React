import ApiCaller from './ApiCaller/apiCaller'

export const getProductsSearch = (param) => {
    return new Promise((resolve, reject) => {
            ApiCaller.get('/products?q='+param)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
                console.error('ERROR')
            });
    });
  };
export const getProductsSearch2 = async (param) => {

            const data = await ApiCaller.get('/products?q='+param)
            return data;
  
  };

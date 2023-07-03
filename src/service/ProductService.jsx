import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; 

const ProductService = {
  searchProducts: (searchTerm) => {
    return axios.get(`${API_URL}/products/search?term=${searchTerm}`);
    //return API_URL;
  },

  addProduct: (productData) => {
    return axios.post(`${API_URL}/products`, productData);

  },

  updateProduct: (productId, productData) => {
    return axios.put(`${API_URL}/products/${productId}`, productData);
   
  },

  deleteProduct: (productId) => {
    //return axios.delete(`${API_URL}/products/${productId}`);
    return ;

  }
};

export default ProductService;

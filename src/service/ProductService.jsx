import axios from 'axios';
//import dotenv from 'dotenv'

//dotenv.config()

const API_URL = process.env.REACT_APP_API_URL; // Cambia esta URL según la configuración de tu API
/* const API_URL = {data :[{
    id: '01',
    descripcion: 'descripcion del producto',
    marca: 'nike',
    categoria: 'zapatillas',
    proveedor: 'el proveedor',
    stock: '12',
    precio: '15000'
    }]} */
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

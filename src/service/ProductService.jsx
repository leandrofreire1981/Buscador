import axios from 'axios';

//const API_URL = process.env.REACT_APP_API_URL; 
const API_RES = [
  {
    "id": 1,
    "descripcion": "Zapatilla innovadora, cómoda y elegante para destacar en cualquier ocasión",
    "marca": "nike",
    "categoria": "zapatillas",
    "proveedor": "el proveedor",
    "stock": 12,
    "precio": 15000
  },
  {
    "id": 2,
    "descripcion": "Estilo moderno, comodidad excepcional, zapatilla perfecta para tu día a día.",
    "marca": "adidas",
    "categoria": "zapatillas",
    "proveedor": "adidas inc",
    "stock": 15,
    "precio": 10000
  },
  {
    "id": 3,
    "descripcion": "Sofisticación deportiva en una zapatilla: estilo, comodidad y rendimiento.",
    "marca": "plumita",
    "categoria": "zapatillas",
    "proveedor": "Zapatilleria argentinas",
    "stock": 17,
    "precio": 12500
  },
  {
    "id": 4,
    "descripcion": "Sofisticación deportiva en una zapatilla: estilo, comodidad y rendimiento.",
    "marca": "topper",
    "categoria": "zapatillas",
    "proveedor": "adidas inc",
    "stock": 17,
    "precio": 12500
  },
  {
    "id": 5,
    "descripcion": "La zapatilla definitiva: diseño audaz, comodidad insuperable, calidad excepcional.",
    "marca": "reebok",
    "categoria": "zapatillas",
    "proveedor": "reebok",
    "stock": 20,
    "precio": 21000
  },
  {
    "id": 6,
    "descripcion": "Elegante, versátil y cómodo, el zapato perfecto para cualquier ocasión.",
    "marca": "goya",
    "categoria": "zapato",
    "proveedor": "calzados goya",
    "stock": 30,
    "precio": 13000
  },
  {
    "id": 7,
    "descripcion": "Estilo clásico, confort duradero, zapato imprescindible para tu guardarropa.",
    "marca": "batistella",
    "categoria": "zapatos",
    "proveedor": "batistella",
    "stock": 18,
    "precio": 20500
  }
]

function api_return(searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  if(searchTerm === '') return {data: API_RES}
  return {data: API_RES.filter(r => (r.marca.includes(searchTerm) || r.categoria.includes(searchTerm) || r.proveedor.includes(searchTerm))) }
 
}

const ProductService = {
  searchProducts: (searchTerm) => {
    //return axios.get(`${API_URL}/products/search?term=${searchTerm}`);
    return api_return(searchTerm)
  },

  addProduct: (productData) => {
    //return axios.post(`${API_URL}/products`, productData);
    return ;
  },

  updateProduct: (productId, productData) => {
    //return axios.put(`${API_URL}/products/${productId}`, productData);
    return ;
   
  },

  deleteProduct: (productId) => {
    //return axios.delete(`${API_URL}/products/${productId}`);
    return ;

  }
};

export default ProductService;

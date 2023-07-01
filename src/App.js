import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ProductService from "./service/ProductService";


function App() {
  let productos = [{
    id: '01',
    descripcion: 'descripcion del producto',
    marca: 'nike',
    categoria: 'zapatillas',
    proveedor: 'el proveedor',
    stock: '12',
    precio: '15000'
    }]
    const [products, setProducts] = useState([]);

    const handleSearch = async (searchTerm) => {
      try {
        const response = await ProductService.searchProducts(searchTerm);
        setProducts(response.data);
      } catch (error) {
        console.error('Error al buscar productos:', error);
      }
    };
  
    return (
      <div>
        <h1>Listado de Precios</h1>
        <SearchBar onSearch={handleSearch} />
        <ProductTable products={products} />
      </div>
    );
}

export default App;

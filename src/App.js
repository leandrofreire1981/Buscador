import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ProductService from "./service/ProductService";
import style from './styles/App.module.css'


function App() {

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
        <h1 className={style.title}>Listado de Precios</h1>
        <SearchBar onSearch={handleSearch} />
        <ProductTable products={products} />
      </div>
    );
}

export default App;

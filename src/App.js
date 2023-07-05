import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { ProductService, PriceService } from "./service/ProductService";
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

    const handleSearchPrice = async (min, max) => {
      try {
        const response = await PriceService.searchProductsByPrice(min, max);
        setProducts(response.data);
      } catch (error) {
        console.error('Error al buscar productos:', error);
      }
    };
  
    return (
      <div>
        <h1 className={style.title}>Listado de Precios</h1>
        <SearchBar onSearch={handleSearch} onSearchPrice={handleSearchPrice} />
        <ProductTable products={products} />
        <div className={style.subTitle}>
          Presione buscar con el cuadro de texto vacio para ver todos los resultados. 
        </div>
        <div className={style.subTitle}>
          Ingrese una palabra o parte de la palabra para buscar por descripcion, marca, categoria o proveedor
        </div>
        <div className={style.subTitle}>
          Ingese un precio minimo y/o un precio maximo para filtrar por precios
        </div>
      </div>
    );
}

export default App;

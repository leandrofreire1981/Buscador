import React from 'react';
import style from '../styles/ProductTable.module.css'


function ProductTable({ products }) {
    console.log('products: ', products)
  return (
    <div className={style.container}>
    <table >
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th>Proveedor</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.descripcion}</td>
            <td>{product.marca}</td>
            <td>{product.categoria}</td>
            <td>{product.proveedor}</td>
            <td>{product.stock}</td>
            <td>{product.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ProductTable;

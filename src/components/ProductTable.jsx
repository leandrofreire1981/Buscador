import React from 'react';


function ProductTable({ products }) {
    console.log('products: ', products)
  return (
    <table>
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
  );
}

export default ProductTable;

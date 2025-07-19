import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;


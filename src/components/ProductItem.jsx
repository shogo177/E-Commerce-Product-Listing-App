import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>
        </div>
    );
};

export default ProductItem;
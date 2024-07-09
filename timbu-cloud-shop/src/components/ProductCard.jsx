import React from 'react';
import './ProductCard.css'; // Import CSS for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
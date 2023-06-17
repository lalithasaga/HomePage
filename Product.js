import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
      <h3 className="product-title">{product.title}</h3>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="product-image"
      />
      <div className="product-details">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <button className="product-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

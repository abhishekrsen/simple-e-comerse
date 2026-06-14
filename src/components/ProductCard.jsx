import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { getDiscountedPrice } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  const hasDiscount = product.discount > 0;
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        
        {/* Badges */}
        <div className="product-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {hasDiscount && <span className="badge badge-sale">-{product.discount}%</span>}
        </div>

        {/* Hover Actions */}
        <div className="product-actions-overlay">
          <button className="action-btn" aria-label="Add to wishlist">
            <Heart size={20} />
          </button>
          <button 
            className="btn btn-primary add-to-cart-btn" 
            onClick={(e) => {
              e.preventDefault(); // Prevent triggering any potential links if wrapped
              addToCart(product);
            }}
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-price-container">
          {hasDiscount ? (
            <>
              <span className="price-discounted">₹{discountedPrice}</span>
              <span className="price-original">₹{product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-normal">₹{product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

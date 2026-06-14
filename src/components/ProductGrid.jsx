import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, title }) => {
  return (
    <section className="product-grid-section">
      {title && (
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <div className="title-underline"></div>
        </div>
      )}

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import './CategoryShowcase.css';

const CategoryShowcase = () => {
  return (
    <section className="category-showcase">
      <div className="section-header">
        <h2 className="section-title">Shop by Category</h2>
        <div className="title-underline"></div>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/shop?category=${category.id}`} key={category.id} className="category-card">
            <div className="category-image-container">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay"></div>
            </div>
            
            <div className="category-content">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-desc">{category.description}</p>
              <span className="category-link">Explore <span className="arrow">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;

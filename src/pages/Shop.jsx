import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../data/mockData';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    let result = products;

    // 1. Filter by category
    if (categoryParam) {
      if (categoryParam === 'new') {
        result = result.filter(p => p.isNew);
        setActiveFilter('new');
      } else {
        result = result.filter(p => p.category === categoryParam);
        setActiveFilter(categoryParam);
      }
    } else {
      setActiveFilter('all');
    }

    // 2. Filter by search query
    if (searchParam) {
      const lowerQuery = searchParam.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredProducts(result);
  }, [categoryParam, searchParam]);

  const handleFilterClick = (filter) => {
    if (filter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', filter);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1 className="shop-title">The Collection</h1>
        <p className="shop-subtitle">Curated essentials for the modern lifestyle.</p>
        
        <div className="shop-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'new' ? 'active' : ''}`}
            onClick={() => handleFilterClick('new')}
          >
            New Arrivals
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Shop;

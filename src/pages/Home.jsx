import React from 'react';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/mockData';
import './Home.css';

const Home = () => {
  // Get trending products (some discounted, some new)
  const trendingProducts = products.filter(p => p.discount > 0 || p.isNew).slice(0, 5);

  return (
    <div className="page-container">
      <Hero />
      <CategoryShowcase />
      
      {/* Dynamic Marquee/Banner could go here */}
      <div className="banner-strip">
        <div className="marquee">
          <span>FREE SHIPPING ON ORDERS OVER ₹150</span>
          <span className="separator">✦</span>
          <span>NEW COLLECTION OUT NOW</span>
          <span className="separator">✦</span>
          <span>SUSTAINABLY SOURCED</span>
          <span className="separator">✦</span>
          <span>FREE SHIPPING ON ORDERS OVER ₹150</span>
        </div>
      </div>

      <ProductGrid title="Trending Now" products={trendingProducts} />
    </div>
  );
};

export default Home;

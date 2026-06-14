import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Redefine Your <br/>
          <span className="text-gradient">Style Narrative</span>
        </h1>
        <p className="hero-subtitle">
          Discover our new collection of premium essentials designed for the modern aesthetic. Uncompromising quality meets striking design.
        </p>
        
        <div className="hero-actions">
          <Link to="/shop" className="btn btn-primary">
            Shop Collection <ArrowRight size={18} />
          </Link>
          <Link to="/shop?category=new" className="btn btn-outline glass">
            View Lookbook
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-blur blur-1"></div>
      <div className="hero-blur blur-2"></div>
    </div>
  );
};

export default Hero;

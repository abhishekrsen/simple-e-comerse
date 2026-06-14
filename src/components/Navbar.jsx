import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span className="text-gradient">AURA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop?category=men" className="nav-link">Men</Link>
          <Link to="/shop?category=women" className="nav-link">Women</Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                onBlur={(e) => {
                  // Prevent immediate close to allow submit click, but close on actual blur out
                  if(!e.relatedTarget) setIsSearchOpen(false);
                }}
              />
            </form>
          ) : (
            <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
          )}
          <button className="icon-btn cart-btn" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button 
            className="icon-btn mobile-only" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/shop?category=men" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Men</Link>
          <Link to="/shop?category=women" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Women</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

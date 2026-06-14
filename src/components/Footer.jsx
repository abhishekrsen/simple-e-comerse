import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand">
              <span className="text-gradient">AURA</span>
            </Link>
            <p className="footer-desc">
              Redefining the modern aesthetic with premium essentials. Crafted for those who appreciate the extraordinary.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Shop</h4>
            <Link to="/shop?category=new" className="footer-link">New Arrivals</Link>
            <Link to="/shop?category=men" className="footer-link">Men</Link>
            <Link to="/shop?category=women" className="footer-link">Women</Link>
            <Link to="/shop?category=accessories" className="footer-link">Accessories</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Support</h4>
            <Link to="#" className="footer-link">FAQ</Link>
            <Link to="#" className="footer-link">Shipping & Returns</Link>
            <Link to="#" className="footer-link">Size Guide</Link>
            <Link to="#" className="footer-link">Contact Us</Link>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Join the Club</h4>
            <p className="newsletter-desc">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn btn-primary newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AURA Clothing. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

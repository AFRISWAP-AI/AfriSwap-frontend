import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="footer-logo-icon">
            ⚡
          </div>
          <span className="footer-logo-text">AfriSwap Ai</span>
        </div>
        
        {/* Divider */}
        <div className="footer-divider"></div>
        
        {/* Copyright Section */}
        <div className="footer-copyright">
          <p>© 2025 AfriSwap Ai. Built with <span className="heart">❤️</span> for Africa.</p>
        </div>
        
        {/* Security Badge */}
        <div className="footer-security">
          Secured by AI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
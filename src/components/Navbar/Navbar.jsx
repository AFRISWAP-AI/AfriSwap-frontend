import './Navbar.css';
import React, { useState, useEffect } from 'react';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

const Navbar = ({ navigate, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'select', label: 'Swap' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when navigating
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <button
            onClick={() => handleNavigation('home')}
            className="logo"
          >
            AfriSwap
          </button>
          
          {/* Desktop Navigation */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="mobile-menu-btn">
          <button 
            className={`menu-icon ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <svg viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Desktop Connect Wallet */}
        <div className="desktop-connect-wallet">
          <ConnectWalletButton navigate={navigate} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`mobile-nav-link ${currentPath === item.path ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Connect Wallet */}
        <div className="mobile-connect-wallet">
          <ConnectWalletButton navigate={navigate} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
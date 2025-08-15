import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/select", label: "Swap" },
  ];

  return (
    <header className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          AfriSwap
        </Link>

        {/* Desktop Links */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <span className="myConnectbtn">
          <ConnectWalletButton />
        </span>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mobile-connect-wallet">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

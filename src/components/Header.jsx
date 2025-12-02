import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/Logo.JPG';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <a href="/" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" className="logo-image" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/works" className="nav-link" onClick={closeMenu}>
              Works
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div 
          className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
}

export default Header;
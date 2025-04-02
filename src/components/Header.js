import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <div className="container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/cms-logo.png" alt="CMS Logo" height="100" />
            </Link>
            <img src="/road-sign.png" alt="Road Sign" height="100" className="road-sign" />
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link about">About ASETT</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
              <Link to="/support" className="nav-link support">
                Support <span className="dropdown-arrow">▾</span>
              </Link>
            </div>
            <div className="auth-links">
              <Link to="/register" className="nav-link register">Register</Link>
              <Link to="/login" className="nav-link login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 

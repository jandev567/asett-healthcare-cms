import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/security">Security Policy</Link>
      </nav>
    </footer>
  );
};

export default Footer; 
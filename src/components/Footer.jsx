import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-left">
        © 2026, made with <span className="heart-icon">❤️</span> by <span className="brand-name">MyPatientHUB</span> for a better web.
      </div>
      <div className="footer-right">
        <a href="#hub">MyPatientHUB</a>
        <a href="#about">About Us</a>
        <a href="#blog">Blog</a>
      </div>
    </footer>
  );
};

export default Footer;
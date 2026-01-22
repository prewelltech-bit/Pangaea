import React, { useState } from 'react';
import './Header.css'; // CSS file import karvi jaruri che

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/assets/Logo/PANGEA_PATHWAYS.png" alt="" />
        </div>

        {/* Navigation Links */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#countries">Destinations</a></li>
          <li><a href="#exams">IELTS/PTE</a></li>
          <li><a href="#about">About Us</a></li>
          <li><button className="apply-btn">Apply Now</button></li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
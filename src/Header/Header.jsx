import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll thava par header ni style badlavva mate
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/Logo/PANGEA_PATHWAYS.png" alt="Pangea Pathways" />
        </div>

        {/* Navigation Links */}
        <ul className={isMobile ? "nav-links-mobile active" : "nav-links"}>
          <li style={{"--i": 1}}><a href="#home" onClick={() => setIsMobile(false)}>Home</a></li>
          <li style={{"--i": 2}}><a href="#countries" onClick={() => setIsMobile(false)}>Destinations</a></li>
          <li style={{"--i": 3}}><a href="#exams" onClick={() => setIsMobile(false)}>IELTS/PTE</a></li>
          <li style={{"--i": 4}}><a href="#about" onClick={() => setIsMobile(false)}>About Us</a></li>
          <li style={{"--i": 5}}>
            <button className="apply-btn">Apply Now</button>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button className={`mobile-menu-icon ${isMobile ? 'open' : ''}`} onClick={() => setIsMobile(!isMobile)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>
      
      {/* Overlay: Jyare menu khule tyare pachal nu background dhundhlu karva mate */}
      {isMobile && <div className="menu-overlay" onClick={() => setIsMobile(false)}></div>}
    </nav>
  );
};

export default Header;

// import React, { useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="pp-header">
//       <div className="pp-container">
        
//         {/* Logo */}
//         <div className="pp-logo">
//           <a href="#home">Pangaea Pathways</a>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="pp-nav">
//           <a href="#home">Home</a>
//           <a href="#about">About Us</a>

//           <div className="pp-dropdown">
//             <span>Services</span>
//             <div className="pp-dropdown-menu">
//               <a href="#study">Study Abroad</a>
//               <a href="#visa">Visa Assistance</a>
//               <a href="#migration">Migration Planning</a>
//             </div>
//           </div>

//           <div className="pp-dropdown">
//             <span>Destinations</span>
//             <div className="pp-dropdown-menu">
//               <a href="#australia">Australia</a>
//               <a href="#uk">United Kingdom</a>
//               <a href="#nz">New Zealand</a>
//               <a href="#canada">Canada</a>
//             </div>
//           </div>

//           <a href="#stories">Success Stories</a>
//           <a href="#blog">Blog</a>
//           <a href="#contact">Contact</a>
//         </nav>

//         {/* CTA */}
//         <div className="pp-cta">
//           <a href="#consult">Get Free Consultation</a>
//         </div>

//         {/* Mobile Toggle */}
//         <div
//           className="pp-menu-toggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`pp-mobile-menu ${menuOpen ? "open" : ""}`}>
//         <a href="#home">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#study">Study Abroad</a>
//         <a href="#visa">Visa Assistance</a>
//         <a href="#migration">Migration Planning</a>
//         <a href="#australia">Australia</a>
//         <a href="#uk">United Kingdom</a>
//         <a href="#nz">New Zealand</a>
//         <a href="#canada">Canada</a>
//         <a href="#stories">Success Stories</a>
//         <a href="#blog">Blog</a>
//         <a href="#contact">Contact</a>
//         <a href="#consult" className="pp-mobile-cta">
//           Get Free Consultation
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

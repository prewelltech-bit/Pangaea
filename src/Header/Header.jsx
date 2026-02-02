import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToPage = (path) => {
    navigate(path);
    setIsMobile(false);
  };

  return (
    <div className="outer-header">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo" onClick={() => goToPage("/")}>
            <img src="/assets/Logo/PP-2.png" alt="Pangea Pathways" />
          </div>

          {/* NAV LINKS */}
          <ul className={isMobile ? "nav-links-mobile active" : "nav-links"}>

            <li style={{ "--i": 1 }} onClick={() => goToPage("/")}>
              Home
            </li>

            <li style={{ "--i": 2 }} onClick={() => goToPage("/study/uk")}>
              Destinations
            </li>

            <li
              style={{ "--i": 3 }}
              onClick={() => goToPage("/partnered-universities")}
            >
              Universities
            </li>

            <li
              style={{ "--i": 4 }}
              onClick={() => goToPage("/pte")}
            >
              PTE
            </li>

            <li style={{ "--i": 5 }}>
              About Us
            </li>

            <li style={{ "--i": 6 }}>
              <button
                className="apply-btn"
                onClick={() => goToPage("/partnered-universities")}
              >
                Contact Us
              </button>
            </li>

          </ul>

          {/* MOBILE MENU ICON */}
          <button
            className={`mobile-menu-icon ${isMobile ? "open" : ""}`}
            onClick={() => setIsMobile(!isMobile)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        </div>

        {/* OVERLAY */}
        {isMobile && (
          <div
            className="menu-overlay"
            onClick={() => setIsMobile(false)}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Header;

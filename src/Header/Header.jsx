import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMobile(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const goToPage = (path) => {
    navigate(path);
    setIsMobile(false);
    setIsDropdownOpen(false);
  };

  const countries = [
    { name: "Australia", path: "/study/australia" },
    { name: "New Zealand", path: "/study/new-zealand" },
    { name: "United Kingdom", path: "/study/uk" },
    { name: "Europe", path: "/study/europe" },
    { name: "Canada", path: "/study/canada" },
    { name: "USA", path: "/study/united-states" },
  ];

  return (
    <div className="outer-header">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img
                src={theme === "light" ? "/assets/Logo/PP-2.png" : "/assets/Logo/PANGEA_PATHWAYS.png"}
                alt="logo"
              />
            </Link>
          </div>

          {/* NAV LINKS */}
          <ul className={`nav-links ${isMobile ? "active" : ""}`}>

            {/* ❌ CLOSE BUTTON */}
            {isMobile && (
              <div className="close-btn" onClick={() => setIsMobile(false)}>
                ✕
              </div>
            )}

            <li onClick={() => goToPage("/")}>Home</li>

            <li
              className="dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Destinations
              <span className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}>
                <FiChevronDown />
              </span>

              {isDropdownOpen && (
                <div className={`dropdown-menu ${isMobile ? "mobile" : ""}`}>
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => goToPage(country.path)}
                    >
                      {country.name}
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li onClick={() => goToPage("/partnered-universities")}>
              Universities
            </li>
            <li onClick={() => goToPage("/pte")}>PTE</li>
            <li onClick={() => goToPage("/blogs")}>Blogs</li>
            <li onClick={() => goToPage("/contact")}>Contact Us</li>
          </ul>

          {/* RIGHT BUTTON */}
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
            <button
              className="consult-btn"
              onClick={() => goToPage("/contact")}
            >
              Free Consultation
            </button>
          </div>

          {/* HAMBURGER */}
          <div
            className={`mobile-menu-icon ${isMobile ? "open" : ""}`}
            onClick={() => setIsMobile(!isMobile)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

        </div>

        {/* OVERLAY */}
        {isMobile && (
          <div
            className="menu-overlay"
            onClick={() => setIsMobile(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
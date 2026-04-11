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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToPage = (path) => {
    navigate(path);
    setIsMobile(false);
    setIsDropdownOpen(false);
  };

  const handleCounsellingClick = () => {
    setIsMobile(false);
    setIsDropdownOpen(false);
    if (window.location.pathname === "/") {
      const section = document.getElementById("free-counselling");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("free-counselling");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
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

          {/* LEFT */}
          <div className="logo">
            <Link to="/">
              <img
                src={theme === "light" ? "/assets/Logo/PP-2.png" : "/assets/Logo/PANGEA_PATHWAYS.png"}
                alt="logo"
              />
            </Link>
          </div>

          {/* CENTER */}
          <ul className={isMobile ? "nav-links-mobile active" : "nav-links"}>
            <li onClick={() => goToPage("/")}>Home</li>

            <li
              className="dropdown-trigger"
              onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
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
            <li onClick={() => goToPage("/course")}>Course</li>
          </ul>

          {/* RIGHT */}
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
              onClick={handleCounsellingClick}
            >
              Free Consultation
            </button>
          </div>

          {/* MOBILE ICON */}
          <button
            className={`mobile-menu-icon ${isMobile ? "open" : ""}`}
            onClick={() => setIsMobile(!isMobile)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

        </div>

        {isMobile && (
          <div className="menu-overlay" onClick={() => setIsMobile(false)}></div>
        )}
      </nav>
    </div>
  );
};

export default Header;
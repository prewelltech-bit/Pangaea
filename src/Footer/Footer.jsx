import "./Footer.css";
import React from "react";
const Footer = () => {
  return (
    <div className="footer7-wrapper">
      <footer className="footer7">
        <div className="footer7-container">

          <div className="footer7-top">

            {/* Brand */}
            <div className="footer7-brand ">
              <img src="/public/assets/Logo/pp-2.png" alt="Pangaea Pathways Logo" className="footer7-logo" />
            </div>

            {/* Links */}
            <div className="footer7-links">
              <a href="#">Documentation</a>
              <a href="#">Support</a>
              <a href="#">Status</a>
            </div>

            {/* Social Icons */}
            <div className="footer7-social">
              <a href="https://www.instagram.com/pangaea_pathways/">i</a>
              <a href="#">t</a>
              <a href="#">in</a>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer7-bottom">
            <p>
              © 2025 Pagaea Pathways. All rights reserved. |{" "}
              <a href="#">Privacy Policy</a> |{" "}
              <a href="#">Terms of Service</a>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

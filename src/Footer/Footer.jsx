import "./Footer.css";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from "../hooks/useRevealAnimation";
import { Link } from "react-router-dom";

const Footer = () => {
  const { ref, isInView } = useRevealAnimation(0.4);

  return (
    <motion.div 
      className="footer7-wrapper"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <footer className="footer7">
        <div className="footer7-container">

          <div className="footer7-top">

            {/* Brand */}
            <motion.div className="footer7-brand" variants={getDirectionVariants('left')}>
              <img src="/public/assets/Logo/pp-2.png" alt="Pangaea Pathways Logo" className="footer7-logo" />
            </motion.div>

            {/* Links */}
            <motion.div className="footer7-links" variants={getDirectionVariants('up')}>
              <a href="#" className="footer-a">Documentation</a>
              <a href="#" className="footer-a">Support</a>
              <a href="#" className="footer-a">Status</a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="footer7-social" variants={getDirectionVariants('right')}>
              <a href="https://www.instagram.com/pangaea_pathways/" className="footer-a">i</a>
              <a href="#" className="footer-a">t</a>
              <a href="#" className="footer-a">in</a>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.div className="footer7-bottom" variants={getDirectionVariants('down')}>
            <p>
              © 2025 Pagaea Pathways. All rights reserved. |{" "}
              <Link to="/terms" className="footer-a">Terms and Conditions</Link> |{" "}
              <Link to="/privacy-policy" className="footer-a">Privacy Policy</Link>
            </p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
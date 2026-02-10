import "./Footer.css";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from "../hooks/useRevealAnimation";

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
              <a href="#">Documentation</a>
              <a href="#">Support</a>
              <a href="#">Status</a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="footer7-social" variants={getDirectionVariants('right')}>
              <a href="https://www.instagram.com/pangaea_pathways/">i</a>
              <a href="#">t</a>
              <a href="#">in</a>
            </motion.div>

          </div>

          {/* Bottom */}
          <motion.div className="footer7-bottom" variants={getDirectionVariants('down')}>
            <p>
              © 2025 Pagaea Pathways. All rights reserved. |{" "}
              <a href="#">Privacy Policy</a> |{" "}
              <a href="#">Terms and Conditions</a>
            </p>
          </motion.div>

        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;

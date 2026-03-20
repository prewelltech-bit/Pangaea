import React from "react";
import "./Footer.css";
import "./Footer1.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  useRevealAnimation,
  staggerContainerVariants,
  getDirectionVariants,
} from "../hooks/useRevealAnimation";
import { Link } from "react-router-dom";

import { services, destinations, quickLinks } from "./FooterData";

const Footer = () => {
  const { ref, isInView } = useRevealAnimation(0.4);

  return (
    <motion.div
      className="footer"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <footer className="footer-container">
          {/* Brand */}
          {/* left section */}
          <motion.div
            className="footer-column"
            variants={getDirectionVariants("left")}
          >
            <motion.div
              className="footer7-brand"
              variants={getDirectionVariants("left")}
            >
              <img
                src="/public/assets/Logo/PP-2.png"
                alt="Pangaea Pathways Logo"
                // className="footer7-logo"
              />
            </motion.div>
            {/* <h2 className="footer-title">Study Smart</h2> */}
            <h3>pangaea pathways</h3>
            <p>
              Office No: 156, Opera Business Hub,
              <br />
              Lajamni Chowk, Mota Varchha,
              <br />
              surat {"- 394101"}
            </p>
            <p>+91 70696 26269</p>
            <p>+91 84698 88281</p>
            <p>info@studysmart.co.in</p>
          <div className="footer-logo-side">
            <motion.div
              className="footer7-contact"
              variants={getDirectionVariants("left")}
            >
              <motion.div
                className="footer7-social"
                variants={getDirectionVariants("right")}
              >
                <a
                  href="https://www.instagram.com/pangaea_pathways/"
                  className="footer-a"
                >
                  i
                </a>
                <a href="#" className="footer-a">
                  t
                </a>
                <a href="#" className="footer-a">
                  in
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
          </div>
          </motion.div>

       
        {/* Links */}
        {/* <motion.div
            className="footer7-links"
            variants={getDirectionVariants("up")}
          >
            <a href="#" className="footer-a">
              Documentation
            </a>
            <a href="#" className="footer-a">
              Support
            </a>
            <a href="#" className="footer-a">
              Status
            </a>
          </motion.div> */}

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Study Destinations</h3>
          <ul>
            {destinations.map((dest, index) => (
              <li key={index} className="destination-item">
                <img src={dest.flag} alt={dest.name} />
                {dest.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              console.log(link),
              <li key={index}>
                <Link to={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom */}
      </footer>
      <motion.div
        className="footer-bottom"
        variants={getDirectionVariants("down")}
      >
        {/* <p>
          © 2025 Pagaea Pathways. All rights reserved. |{" "}
          <Link to="/terms" className="footer-a">
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link to="/privacy-policy" className="footer-a">
            Privacy Policy
          </Link>
        </p> */}
        <p>© {new Date().getFullYear()} Pagaea Pathways. All Rights Reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

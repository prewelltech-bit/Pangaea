import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  useRevealAnimation,
  staggerContainerVariants,
  getDirectionVariants,
} from "../../../../hooks/useRevealAnimation";
import "./Demo.css";

const Demo = () => {
  const { ref, isInView } = useRevealAnimation(0.3);

  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        className="hero-section"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
      >
        <motion.div
          className="hero-box"
          variants={getDirectionVariants("up")}
        >
          <h1 className="event-h1">Find Your <span className="event-h1-span">Events</span></h1>
          <button className="hero-btn">See More</button>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Demo;

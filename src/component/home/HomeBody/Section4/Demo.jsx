import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRevealAnimation, staggerContainerVariants, getDirectionVariants } from "../../../../hooks/useRevealAnimation";
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
        <div className="hero-overlay">
          <motion.div
            className="hero-card"
            variants={getDirectionVariants('up')}
          >
            <motion.h2 variants={getDirectionVariants('left')}>Find our events</motion.h2>
            <motion.div className="calendar-icon" variants={getDirectionVariants('up', 20)}>📅</motion.div>
            <motion.button className="hero-btn" variants={getDirectionVariants('right')}>See More</motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* NEXT SECTION */}
      {/* <section className="next-section">
        <h2>Next Section Content</h2>
        <p>
          This section scrolls normally and comes over the hero background.
        </p>
      </section> */}
    </>
  );
};

export default Demo;

import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-card animate-card">
            <h2>Find our events</h2>
            <div className="calendar-icon">📅</div>
            <button className="hero-btn">See More</button>
          </div>
        </div>
      </section>

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

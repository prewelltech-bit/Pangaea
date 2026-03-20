import React from "react";
import "./Hero1.css";

const Hero1 = () => {
  return (
    <section className="edwise-section">
      <div className="edwise-container">
        {/* LEFT CONTENT */}
        <div className="edwise-left">
          <h1>
            Pangaea represents over <br />
            <span className="highlight">200+ Universities</span> <br />
            across <span className="highlight">6 Countries</span>
          </h1>

          <p>
            Pangaea has partnered with some of the best universities to study
            abroad giving students the option to choose from the best of the
            best for making their dreams come true. With an impressive roster of
            more than 200 foreign universities, we offer Indian students
            excellent opportunities for studying abroad.
          </p>

          <button className="read-btn">Read more</button>
        </div>

        <div className="edwise-right">
          <img
            src="/public/assets/Img/university-uni.png"
            alt="Partnered Universities"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;

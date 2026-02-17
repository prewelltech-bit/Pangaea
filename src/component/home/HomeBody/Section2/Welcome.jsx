import React, { useEffect, useRef } from "react";
import "./Welcome.css";
import "../../../../index.css";

const Welcome = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      {
        threshold: 0.9,
      },
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <div className="layout-wrapper">
      <div className="scroll-area">
        <div className="glass-box" ref={boxRef}>
          <h1 className="welcome-h1">
            Welcome In{" "}
            <span className="welcome-h1-span">Pangaea Pathways</span>{" "}
          </h1>
          <p className="sub-text">
            We are a Dallas–Fort Worth–based global student advising and admission counseling agency helping international and domestic students achieve successful college and university admissions. With honesty, integrity, and professional commitment, we deliver complete application support and exceed expectations at every step of the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React, { useEffect, useRef } from "react";
import "./Welcome.css";
import "../../../../index.css"

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
      }
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
          <h1 className="welcome-h1">Welcome In <span className="welcome-h1-span">Pangaea</span> </h1>
          <p className="sub-text">is a Dallas Fort Worth, Texas based global agency for student advising, college preparation, and admission counseling. We advise both international and domestic students to assist college and university admission and recruitment teams with complete application packages for evaluation and decision making. Honesty, Integrity, and professional commitment are our company philosophy. We exceed the expectation of our students, partners, and educational institutions we partner with.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import "./Scholarships.css";

const Scholarships = () => {
  return (
    <div className="scholarship-wrapper">
      <div className="scholarship-left">
        <h1 className="scholar-h1">
          <span className="scholar-h1-span">Scholarships</span> & <span className="scholar-h1-span">Financial</span>Support
        </h1>

        <p>
          The UK offers a wide range of scholarships and financial aid options
          for international students to reduce the cost of education.
        </p>
      </div>

      <div className="scholarship-right">
        <div className="scholarship-card">
          <h4>Available Scholarships</h4>

          <ul>
            <li>Scholarships up to £5,000</li>
            <li>Commonwealth Scholarships</li>
            <li>University-specific merit-based scholarships</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;

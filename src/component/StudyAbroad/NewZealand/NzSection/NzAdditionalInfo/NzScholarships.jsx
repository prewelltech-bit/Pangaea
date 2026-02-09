import React from "react";
import "./NzScholarships.css"

const NzScholarships = () => {
  return (
    <>
      <div className="scholarship-wrapper">
        <div className="scholarship-left">
          <h1 className="scholar-h1">
            <span className="scholar-h1-span">Scholarships</span> &{" "}
            <span className="scholar-h1-span">Financial</span>Support
          </h1>

          <p>
            New Zealand provides a variety of scholarships and financial
            assistance options for international students, helping reduce
            tuition fees and overall study costs.
          </p>
        </div>

        <div className="scholarship-right">
          <div className="scholarship-card">
            <h4>Available Scholarships</h4>

            <ul>
              <li>Scholarships up to NZD 10,000 – 15,000</li>
              <li>New Zealand Government Scholarships</li>
              <li>University-specific merit-based scholarships</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NzScholarships;

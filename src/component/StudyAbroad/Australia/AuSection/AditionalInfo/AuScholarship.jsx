import React from "react";
import "../../../UK/UkSection/sections/Additional_info/Scholarships.css"; // reuse same CSS

const AuScholarships = () => {
  return (
    <>
      <div className="scholarship-wrapper">
        <div className="scholarship-left">
          <h1 className="scholar-h1">
            <span className="scholar-h1-span">Scholarships</span> &{" "}
            <span className="scholar-h1-span">Financial</span> Support
          </h1>

          <p>
            Australia offers a wide range of scholarships and financial support
            options for international students to help reduce the overall cost
            of education.
          </p>
        </div>

        <div className="scholarship-right">
          <div className="scholarship-card">
            <h4>Available Scholarships</h4>

            <ul>
              <li>Scholarships up to AUD 20,000</li>
              <li>Australia Awards Scholarships</li>
              <li>
                Destination Australia Scholarships (up to AUD 15,000/year)
              </li>
              <li>University-specific merit-based scholarships</li>
              <li>Tuition fee waivers (10% – 50%)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuScholarships;

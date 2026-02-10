import React from "react";
import "../../../UK/UkSection/sections/Additional_info/Scholarships.css";

const UsScholarships = () => {
  return (
    <>
      <div className="scholarship-wrapper">
        <div className="scholarship-left">
          <h1 className="scholar-h1">
            <span className="scholar-h1-span">Scholarships</span> &{" "}
            <span className="scholar-h1-span">Financial</span> Support
          </h1>

          <p>
            The USA offers extensive scholarship opportunities for international students through federal programs, universities, and private organizations to help offset tuition and living costs.
          </p>
        </div>

        <div className="scholarship-right">
          <div className="scholarship-card">
            <h4>Available Scholarships</h4>

            <ul>
              <li>Merit-based University Scholarships (USD 5,000 – 50,000+/year)</li>
              <li>Fulbright Scholarships</li>
              <li>Hubert Humphrey Fellowship Program</li>
              <li>AAUW International Fellowships</li>
              <li>American Scholarship Providers Association Grants</li>
              <li>State University Scholarships</li>
              <li>Federal Work-Study Program (USD 3,000/year)</li>
              <li>Graduate Teaching/Research Assistantships</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsScholarships;

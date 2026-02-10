import React from "react";
import "../../../UK/UkSection/sections/Additional_info/Scholarships.css";

const EuropeScholarships = () => {
  return (
    <>
      <div className="scholarship-wrapper">
        <div className="scholarship-left">
          <h1 className="scholar-h1">
            <span className="scholar-h1-span">Scholarships</span> &{" "}
            <span className="scholar-h1-span">Financial</span> Support
          </h1>

          <p>
            Europe offers numerous scholarships and grants for international students, ranging from government-funded programs to university-specific awards and competitive fellowships.
          </p>
        </div>

        <div className="scholarship-right">
          <div className="scholarship-card">
            <h4>Available Scholarships</h4>

            <ul>
              <li>Erasmus+ Scholarships (€200 – €300/month)</li>
              <li>DAAD Scholarships (Germany)</li>
              <li>Campus France Scholarships</li>
              <li>Chevening Scholarships (UK)</li>
              <li>Fundación Carolina Scholarships (Spain)</li>
              <li>University-specific merit-based scholarships</li>
              <li>EU Government Grants</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EuropeScholarships;

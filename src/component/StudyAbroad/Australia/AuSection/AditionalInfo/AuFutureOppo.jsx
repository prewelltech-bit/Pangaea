import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FutureOpportunities.css";
const AuFutureOppo = () => {
  return (
    <>
      <div className="future-wrapper">
        <div className="future-left">
          <h1 className="future-h1">
            PR & <span className="future-h1-span">Future Opportunities</span>
          </h1>

          <p>
            The AU provides strong post-study work opportunities and clear
            pathways for long-term settlement for international students.
          </p>
        </div>

        <div className="future-right">
          <div className="future-box">
            <h4>Post Study Options</h4>

            <div className="future-item">
              <strong>PR pathways include</strong>
              <p>Subclass 189, 190, and 491</p>
            </div>

            <div className="future-item">
              <strong>Post Study Work Visa (Subclass 485)</strong>
              <p>allows 2–4 years of stay. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuFutureOppo;

import React from "react";
import "./NzFutureOppo.css"
const NzFutureOppo = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
            <span className="fees-h1-span">Cost </span> Of{" "}
            <span className="fees-h1-span">Studying</span> In New Zealand
          </h1>

          <p>
            The cost of studying in New Zealand for international students
            varies based on the institution, level of study, and city. Overall,
            New Zealand offers high-quality education with comparatively
            affordable living costs.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Foundation Program</span>
              <span>NZD 18,000 – 25,000</span>
            </div>

            <div className="fees-row">
              <span>Bachelor's</span>
              <span>NZD 22,000 – 35,000</span>
            </div>

            <div className="fees-row">
              <span>Master's</span>
              <span>NZD 25,000 – 45,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Outside Auckland</span>
              <span>NZD 1,200 – 1,500</span>
            </div>

            <div className="fees-row">
              <span>Auckland</span>
              <span>NZD 1,500 – 2,000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NzFutureOppo;

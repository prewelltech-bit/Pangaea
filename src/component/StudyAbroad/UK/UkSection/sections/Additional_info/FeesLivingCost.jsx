import React from "react";
import "./FeesLivingCost.css";

const FeesLivingCost = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
             <span className="fees-h1-span">Cost </span> Of <span className="fees-h1-span">Studying</span> In The UK
          </h1>

          <p>
            The cost of studying in the UK for international students depends on
            several factors including institution, course, and location.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Foundation Program</span>
              <span>£10,000 – £20,000</span>
            </div>

            <div className="fees-row">
              <span>Bachelor's</span>
              <span>£15,000 – £35,000</span>
            </div>

            <div className="fees-row">
              <span>Master's</span>
              <span>£15,000 – £40,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Outer London</span>
              <span>£1,136</span>
            </div>

            <div className="fees-row">
              <span>Inner London</span>
              <span>£1,483</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeesLivingCost;

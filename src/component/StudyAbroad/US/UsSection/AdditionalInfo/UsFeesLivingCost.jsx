import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FeesLivingCost.css"

const UsFeesLivingCost = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
            <span className="fees-h1-span">Cost </span> Of{" "}
            <span className="fees-h1-span">Studying</span> In The USA
          </h1>

          <p>
            The cost of studying in the USA for international students varies significantly based on the institution type, location, and program. Scholarships and financial aid are widely available.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Community College</span>
              <span>USD 9,000 – 13,000</span>
            </div>

            <div className="fees-row">
              <span>Public University (State)</span>
              <span>USD 20,000 – 35,000</span>
            </div>

            <div className="fees-row">
              <span>Private University</span>
              <span>USD 40,000 – 70,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Living Cost (Major Cities)</span>
              <span>USD 1,200 – 2,000</span>
            </div>

            <div className="fees-row">
              <span>Living Cost (Smaller Cities)</span>
              <span>USD 800 – 1,200</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsFeesLivingCost;

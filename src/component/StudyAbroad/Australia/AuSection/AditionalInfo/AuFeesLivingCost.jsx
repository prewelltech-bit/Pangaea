import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FeesLivingCost.css"
const AuFeesLivingCost = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
            <span className="fees-h1-span">Cost </span> Of{" "}
            <span className="fees-h1-span">Studying</span> In The AU
          </h1>

          <p>
            The cost of studying in the Australia for international students depends on
            several factors including institution, course, and location.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Diploma / Advanced Diploma</span>
              <span>AUD 18,000 – 30,000</span>
            </div>

            <div className="fees-row">
              <span>Bachelor's</span>
              <span>AUD 20,000 – 45,000</span>
            </div>

            <div className="fees-row">
              <span>Master's</span>
              <span>AUD 22,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Living Cost (All cities)</span>
              <span>AUD 29,710</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuFeesLivingCost;

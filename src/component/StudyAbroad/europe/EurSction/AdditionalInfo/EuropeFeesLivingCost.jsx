import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FeesLivingCost.css"

const EuropeFeesLivingCost = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
            <span className="fees-h1-span">Cost </span> Of{" "}
            <span className="fees-h1-span">Studying</span> In Europe
          </h1>

          <p>
            The cost of studying in Europe for international students is significantly lower than many other destinations, with many countries offering tuition-free or low-cost programs. Living expenses vary by country and city.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Bachelor's Degree</span>
              <span>€3,000 – €18,000</span>
            </div>

            <div className="fees-row">
              <span>Master's Degree</span>
              <span>€4,000 – €20,000</span>
            </div>

            <div className="fees-row">
              <span>PhD Programs</span>
              <span>Free – €6,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Living Cost (Major Cities)</span>
              <span>€900 – €1,500</span>
            </div>

            <div className="fees-row">
              <span>Living Cost (Smaller Cities)</span>
              <span>€600 – €1,000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EuropeFeesLivingCost;

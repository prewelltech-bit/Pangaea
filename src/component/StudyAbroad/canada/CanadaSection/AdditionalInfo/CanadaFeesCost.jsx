import React from "react";
import "../../../Australia/AuSection/AditionalInfo/AuFeesLivingCost.css"
const CanadaFeesCost = () => {
  return (
    <>
      <div className="fees-wrapper">
        <div className="fees-left">
          <h1 className="fees-h1">
            <span className="fees-h1-span">Cost </span> Of{" "}
            <span className="fees-h1-span">Studying</span> In Canada
          </h1>

          <p>
            The cost of studying in Canada for international students depends on
            several factors including institution, course, and province.
          </p>
        </div>

        <div className="fees-right">
          <div className="fees-box">
            <h4>Tuition Fees (Average per annum)</h4>

            <div className="fees-row">
              <span>Diploma / Advanced Diploma</span>
              <span>CAD 15,000 – 25,000</span>
            </div>

            <div className="fees-row">
              <span>Bachelor's</span>
              <span>CAD 20,000 – 40,000</span>
            </div>

            <div className="fees-row">
              <span>Master's</span>
              <span>CAD 18,000 – 35,000</span>
            </div>
          </div>

          <div className="fees-box">
            <h4>Living Expenses (Average per month)</h4>

            <div className="fees-row">
              <span>Living Cost (All provinces)</span>
              <span>CAD 1,200 – 2,500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanadaFeesCost;

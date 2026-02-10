import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FutureOpportunities.css";

const UsFutureOppo = () => {
  return (
    <>
      <div className="future-wrapper">
        <div className="future-left">
          <h1 className="future-h1">
            PR & <span className="future-h1-span">Future Opportunities</span>
          </h1>

          <p>
            The USA offers excellent career opportunities and multiple pathways to permanent residency for international graduates through work visas and immigration programs.
          </p>
        </div>

        <div className="future-right">
          <div className="future-box">
            <h4>Post Study Options</h4>

            <div className="future-item">
              <strong>Optional Practical Training (OPT)</strong>
              <p>Work authorization for 12-36 months depending on field of study</p>
            </div>

            <div className="future-item">
              <strong>H-1B Visa</strong>
              <p>Specialty occupation work visa for skilled professionals</p>
            </div>

            <div className="future-item">
              <strong>EB Green Card</strong>
              <p>Employment-based immigration pathway for permanent residency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsFutureOppo;

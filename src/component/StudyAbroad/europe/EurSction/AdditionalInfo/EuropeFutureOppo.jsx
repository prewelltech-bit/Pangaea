import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FutureOpportunities.css";

const EuropeFutureOppo = () => {
  return (
    <>
      <div className="future-wrapper">
        <div className="future-left">
          <h1 className="future-h1">
            PR & <span className="future-h1-span">Future Opportunities</span>
          </h1>

          <p>
            Europe offers excellent career prospects and pathways to permanent residency for international graduates, with opportunities across multiple countries and industries.
          </p>
        </div>

        <div className="future-right">
          <div className="future-box">
            <h4>Post Study Options</h4>

            <div className="future-item">
              <strong>Graduate Work Visa</strong>
              <p>Available in most EU countries with 6 months to 2 years work authorization</p>
            </div>

            <div className="future-item">
              <strong>Residence Permit</strong>
              <p>Possible to obtain after 3-5 years of continuous residence</p>
            </div>

            <div className="future-item">
              <strong>EU Blue Card</strong>
              <p>For highly skilled professionals, valid for 2-4 years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EuropeFutureOppo;

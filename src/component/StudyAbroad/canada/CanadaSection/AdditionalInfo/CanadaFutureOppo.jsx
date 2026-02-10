import React from "react";
import "../../../UK/UkSection/sections/Additional_info/FutureOpportunities.css";
const CanadaFutureOppo = () => {
  return (
    <> 
      <div className="future-wrapper">
        <div className="future-left">
          <h1 className="future-h1">
            PR & <span className="future-h1-span">Future Opportunities</span> In
            Canada
          </h1>

          <p>
            Canada is one of the most immigration-friendly countries in the
            world. International students benefit from generous post-study work
            rights and multiple Permanent Residency (PR) pathways.
          </p>
        </div>

        <div className="future-right">
          <div className="future-box">
            <h4>Post-Study & PR Pathways</h4>

            <div className="future-item">
              <strong>Express Entry System</strong>
              <p>
                PR through Canadian Experience Class (CEC), Federal Skilled
                Worker (FSW), and Federal Skilled Trades (FST) based on CRS
                score.
              </p>
            </div>

            <div className="future-item">
              <strong>Provincial Nominee Program (PNP)</strong>
              <p>
                Province-based PR pathways for graduates from provinces like
                Ontario, British Columbia, Alberta, and others.
              </p>
            </div>

            <div className="future-item">
              <strong>Post-Graduation Work Permit (PGWP)</strong>
              <p>
                Work up to 3 years in Canada after graduation and gain valuable
                Canadian work experience for PR eligibility.
              </p>
            </div>

            <div className="future-item">
              <strong>High PR Success Rate</strong>
              <p>
                Canadian education significantly increases CRS score and PR
                approval chances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanadaFutureOppo;

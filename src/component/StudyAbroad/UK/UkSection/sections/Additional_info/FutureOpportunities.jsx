import React from 'react'
import "./FutureOpportunities.css";

const FutureOpportunities = () => {
  return (
    <div className="future-wrapper">
      <div className="future-left">
        <h1 className='future-h1'>
          PR & <span className='future-h1-span'>Future Opportunities</span>
        </h1>

        <p>
          The UK provides strong post-study work opportunities and clear
          pathways for long-term settlement for international students.
        </p>
      </div>

      <div className="future-right">
        <div className="future-box">
          <h4>Post Study Options</h4>

          <div className="future-item">
            <strong>Graduate Route Visa</strong>
            <p>
              Stay 2 years after Bachelor’s or Master’s and 3 years after PhD.
            </p>
          </div>

          <div className="future-item">
            <strong>Skilled Worker Visa</strong>
            <p>
              Long-term settlement possible with employer sponsorship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureOpportunities;


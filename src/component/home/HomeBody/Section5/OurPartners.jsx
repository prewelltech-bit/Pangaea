import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurPartners.css";

import universityLogos from "../../../../jsonFiles/universityLogos.json";

const OurPartners = () => {
  const navigate = useNavigate();

  return (
    <section className="partners">
      <h1 className="partner-h1">Our Top <span className="partner-h1-span">Ranked Partners</span></h1>

      <div className="partners-card">
        {/* Row 1 */}
        {universityLogos.slice(0, 5).map((img, i) => (
          <div key={`r1-${i}`} className={`avatar r1 a${i}`}>
            <img src={img} alt={`university-${i}`} />
          </div>
        ))}

        {/* Row 2 */}
        {universityLogos.slice(5, 10).map((img, i) => (
          <div key={`r2-${i}`} className={`avatar r2 b${i}`}>
            <img src={img} alt={`university-${i + 5}`} />
          </div>
        ))}

        {/* Row 3 (NEW logos) */}
        {universityLogos.slice(10, 15).map((img, i) => (
          <div key={`r3-${i}`} className={`avatar r3 c${i}`}>
            <img src={img} alt={`university-${i + 10}`} />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="view-more-container">
        <button
          className="view-more-btn"
          onClick={() => navigate("/partnered-universities")}
        >
          View More Partners
        </button>
      </div>
    </section>
  );
};

export default OurPartners;

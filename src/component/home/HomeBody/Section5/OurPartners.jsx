import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurPartners.css";

const universityLogos = [
  "https://www.edwiseinternational.com/img/partner/University-of-Edinburgh.webp",
  "https://www.edwiseinternational.com/img/partner/The-University-of-Melbourne.webp",
  "https://www.edwiseinternational.com/img/partner/University-of-California-Los-Angeles.webp",
  "https://www.edwiseinternational.com/img/partner/The-University-of-Sydney.webp",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png",
  "https://www.edwiseinternational.com/img/partner/The-University-of-Melbourne.webp",
  "https://www.edwiseinternational.com/img/partner/University-of-Edinburgh.webp",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png",
  "https://www.edwiseinternational.com/img/partner/The-University-of-Sydney.webp",
];

const OurPartners = () => {
  const navigate = useNavigate();

  return (
    <section className="partners">
      <h1 className="wap">Our Top Ranked Partners</h1>

      <div className="partners-card">
        {/* Row 1 */}
        {universityLogos.slice(0, 5).map((img, i) => (
          <div key={`r1-${i}`} className={`avatar r1 a${i}`}>
            <img src={img} alt="university" />
          </div>
        ))}

        {/* Row 2 */}
        {universityLogos.slice(5, 10).map((img, i) => (
          <div key={`r2-${i}`} className={`avatar r2 b${i}`}>
            <img src={img} alt="university" />
          </div>
        ))}

        {/* Row 3 */}
        {universityLogos.slice(0, 5).map((img, i) => (
          <div key={`r3-${i}`} className={`avatar r3 c${i}`}>
            <img src={img} alt="university" />
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

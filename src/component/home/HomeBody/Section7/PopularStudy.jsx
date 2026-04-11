import React from "react";
import "./PopularStudy.css";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    country: "Australia",
    image: "https://flagcdn.com/au.svg",
    description: "World-class education with post-study work rights",
    link: "/study/australia",
  },
  {
    country: "NewZealand",
    image: "https://flagcdn.com/nz.svg",
    description: "Free/low-cost education with strong career prospects",
    link: "/study/new-zealand",
  },
  {
    country: "United Kingdom",
    image: "https://flagcdn.com/gb.svg",
    description: "Historic universities with cutting-edge research",
    link: "/study/uk",
  },
  {
    country: "Europe",
    image: "https://flagcdn.com/eu.svg",
    description: "Affordable European education with strong career prospects.",
    link: "/study/europe",
  },
  {
    country: "Canada",
    image: "https://flagcdn.com/ca.svg",
    description: "Affordable tuition with excellent quality education",
    link: "/study/canada",
  },
  {
    country: "United States",
    image: "https://flagcdn.com/us.svg",
    description: "World-class universities with diverse opportunities",
    link: "/study/united-states",
  }
];

const PopularStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="popular-study">
      <section className="destinations-section section">
        <h2 className="popular-h1">
          Popular Study <span className="popular-h1-span">Destinations</span>
        </h2>

        <div className="container">
          <div className="grid">
            {destinations.map((dest, index) => (
              <div key={index} className="destination-card card">
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="destination-emoji"
                />
                <h3>{dest.country}</h3>
                <p>{dest.description}</p>

                {/* BUTTON */}
                <button
                  className="study-btn"
                  onClick={() => navigate(dest.link)}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularStudy;
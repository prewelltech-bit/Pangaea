import React from "react";
import "./PopularStudy.css";
import { Link, useNavigate } from "react-router-dom";

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
  const Navigate = useNavigate();
  return (
    <>
      <div className="popular-study">
        <section className="destinations-section section">
          <h2 className="popular-h1">Popular Study <span className="popular-h1-span">Destinations</span></h2>
          <div className="container">
            <div className="grid">
              {destinations.map((dest, index) => (
                <Link
                  key={index}
                  to={dest.link}
                  className="destination-card card"
                >
                  <img src={dest.image} alt={dest.country} className="destination-emoji" />
                  {/* <div className="destination-emoji">{dest.image}</div> */}
                  <h3>{dest.country}</h3>
                  <p>{dest.description}</p>
                  <div className="read-more" onClick={() => { Navigate(dest.link) }}>Learn More</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularStudy;

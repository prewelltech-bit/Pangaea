import React from "react";
import "./PopularStudy.css";
import { Link, useNavigate } from "react-router-dom";

const destinations = [
  {
    country: "Australia",
    image: "🇦🇺",
    description: "World-class education with post-study work rights",
    link: "/study/australia",
  },
  {
    country: "United Kingdom",
    image: "🇬🇧",
    description: "Historic universities with cutting-edge research",
    link: "/study/uk",
  },
  {
    country: "Canada",
    image: "🇨🇦",
    description: "Affordable tuition with excellent quality education",
    link: "/study/canada",
  },
  {
    country: "Germany",
    image: "🇩🇪",
    description: "Free/low-cost education with strong career prospects",
    link: "/study/germany",
  },
  {
    country: "NewZealand",
    image: "🇳🇿",
    description: "Free/low-cost education with strong career prospects",
    link: "/study/new-zealand",
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
                  <div className="destination-emoji">{dest.image}</div>
                  <h3>{dest.country}</h3>
                  <p>{dest.description}</p>
                  <div className="read-more" onClick={()=>{Navigate(dest.link)}}>Learn More</div>
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

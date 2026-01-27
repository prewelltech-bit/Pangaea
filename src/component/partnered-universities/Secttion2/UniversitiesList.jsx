import React, { useState } from "react";
import "./UniversityList.css";

const countries = ["UK", "USA", "Canada", "Australia", "New Zealand"];

const universities = [
  {
    name: "Abertay University",
    country: "UK",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Abertay_University_logo.svg/1200px-Abertay_University_logo.svg.png",
  },
  {
    name: "Aberystwyth University",
    country: "UK",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Aberystwyth_University_logo.svg/1200px-Aberystwyth_University_logo.svg.png",
  },
  {
    name: "Amity University London",
    country: "UK",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Amity_University_logo.svg/1200px-Amity_University_logo.svg.png",
  },
  {
    name: "Harvard University",
    country: "USA",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
  },
];

const UniversityList = () => {
  const [activeCountry, setActiveCountry] = useState("UK");
  const [search, setSearch] = useState("");

  // 🔥 FILTER LOGIC
  const filteredUniversities = universities.filter(
    (uni) =>
      uni.country === activeCountry &&
      uni.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="uni-wrapper">
      {/* SIDEBAR */}
      <div className="sidebar">
        {countries.map((country) => (
          <button
            key={country}
            className={`country-btn ${
              activeCountry === country ? "active" : ""
            }`}
            onClick={() => setActiveCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="content">
        {/* SEARCH */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search University"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>

        {/* LIST */}
        <div className="uni-list">
          {filteredUniversities.length > 0 ? (
            filteredUniversities.map((uni, index) => (
              <div className="uni-card" key={index}>
                <div className="uni-logo">
                  <img src={uni.logo} alt={uni.name} />
                </div>
                <h3>{uni.name}</h3>
              </div>
            ))
          ) : (
            <p className="no-result">No universities found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityList;

import React, { useState } from "react";
import "./UniversityList.css";

import australia from "../../../jsonFiles/UniversityList/Australia.json";
import canada from "../../../jsonFiles/UniversityList/Canada.json";
import uk from "../../../jsonFiles/UniversityList/UK.json";
import eruop from "../../../jsonFiles/UniversityList/Europian.json";
import nz from "../../../jsonFiles/UniversityList/NewZealand.json";

const countries = ["UK", "Europian", "Canada", "Australia", "New Zealand"];

// 🔥 merge all universities
const allUniversities = [
  ...australia,
  ...canada,
  ...uk,
  ...eruop,
  ...nz,
];

const UniversityList = () => {
  const [activeCountry, setActiveCountry] = useState("UK");
  const [search, setSearch] = useState("");

  const filteredUniversities = allUniversities.filter(
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

      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search University"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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

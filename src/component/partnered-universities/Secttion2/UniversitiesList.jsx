import React, { useState } from "react";
import "./UniversityList.css";

import australia from "../../../jsonFiles/UniversityList/Australia.json";
import canada from "../../../jsonFiles/UniversityList/Canada.json";
import uk from "../../../jsonFiles/UniversityList/UK.json";
import europ from "../../../jsonFiles/UniversityList/Europian.json";
import nz from "../../../jsonFiles/UniversityList/NewZealand.json";
import usa from "../../../jsonFiles/UniversityList/USA.json"; // ✅ USA added

const countries = [
  "UK",
  "Europian",
  "Canada",
  "Australia",
  "New Zealand",
  "USA" // ✅ USA added
];

const allUniversities = [
  ...uk,
  ...europ,
  ...canada,
  ...australia,
  ...nz,
  ...usa // ✅ USA added
];

const ITEMS_PER_PAGE = 5;

const UniversityList = () => {
  const [activeCountry, setActiveCountry] = useState("UK");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredUniversities = allUniversities.filter(
    (uni) =>
      uni.country === activeCountry &&
      uni.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUniversities.length / ITEMS_PER_PAGE);

  const paginatedUniversities = filteredUniversities.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const visiblePages = () => {
    if (totalPages <= 2) return [1, 2].slice(0, totalPages);
    if (page === 1) return [1, 2];
    if (page === totalPages) return [totalPages - 1, totalPages];
    return [page - 1, page];
  };

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
            onClick={() => {
              setActiveCountry(country);
              setSearch("");
              setPage(1);
            }}
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
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* UNIVERSITY LIST */}
        <div className="uni-list">
          {paginatedUniversities.map((uni, index) => (
            <div className="uni-row" key={index}>
              <img src={uni.logo} alt={uni.name} />
              <span>{uni.name}</span>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="arrow"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ←
            </button>

            {visiblePages().map((num) => (
              <button
                key={num}
                className={page === num ? "active" : ""}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}

            <button
              className="arrow"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityList;

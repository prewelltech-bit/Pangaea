import React, { useState } from "react";
import "./TrendingCourses.css";
import data from "../../jsonFiles/TrendingCourses.json";

const TrendingCourses = () => {
  const [activeTab, setActiveTab] = useState("australia");

  const orderedCourses = data.courseOrder[activeTab].map((id) =>
    data.courses.find((course) => course.id === id)
  );

  return (
    <section className="trending">
      <h2 className="popular-h1">
        Discover <span className="popular-h1-span">Trending Courses</span> Worldwide
      </h2>

      {/* Tabs */}
      <div className="tabs">
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Courses */}
      <div className="course-grid">
        {orderedCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-title">{course.title}</div>
          </div>
        ))}
      </div>

      <div className="view-more-wrapper">
        <button className="view-more-btn">
          View More Courses 
        </button>
      </div>
    </section>
  );
};

export default TrendingCourses;

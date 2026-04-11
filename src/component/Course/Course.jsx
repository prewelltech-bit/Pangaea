import React, { useState } from 'react';
import './Course.css';
import data from "../../jsonFiles/TrendingCourses.json";

const Course = () => {
    const [activeTab, setActiveTab] = useState("australia");

    const orderedCourses = data.courseOrder[activeTab]?.map((id) =>
        data.courses.find((course) => course.id === id)
    ) || [];

    return (
        <div className="course-page-wrapper">
            <div className="course-header">
                <h1 className="popular-h1">
                    Discover <span className="popular-h1-span">Trending Courses</span> Worldwide
                </h1>
            </div>

            <div className="course-container">
                {/* SIDEBAR */}
                <div className="sidebar">
                    {data.tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`country-btn ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="content">
                    <div className="course-grid">
                        {orderedCourses.map((course) => (
                            <div className="course-card" key={course.id}>
                                <img src={course.image} alt={course.title} />
                                <div className="course-title">{course.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
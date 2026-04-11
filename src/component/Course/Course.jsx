import React, { useState, useMemo } from 'react';
import './Course.css';
import courseData from "../../jsonFiles/course/CoursesCountryWise.json";
import { Building2, ArrowUpRight } from 'lucide-react';

// Import all university lists to grab their logos
import ausUni from "../../jsonFiles/UniversityList/Australia.json";
import canUni from "../../jsonFiles/UniversityList/Canada.json";
import ukUni from "../../jsonFiles/UniversityList/UK.json";
import usaUni from "../../jsonFiles/UniversityList/USA.json";
import euUni from "../../jsonFiles/UniversityList/Europian.json";
import nzUni from "../../jsonFiles/UniversityList/NewZealand.json";

// Create a mapping of University Name to Logo URL
const allUnis = [...ausUni, ...canUni, ...ukUni, ...usaUni, ...euUni.flat(), ...nzUni];
const logoMap = {};
allUnis.forEach(u => {
    if (u && u.name && u.logo) {
        logoMap[u.name.trim()] = u.logo.startsWith('.') ? u.logo.replace(/^\.+/, '') : u.logo;
    }
});

const Course = () => {
    const countries = useMemo(() => Array.from(new Set(courseData.map(c => c.country))), []);

    const sectors = useMemo(() => {
        const s = new Set();
        courseData.forEach(c => {
            c.universities?.forEach(u => {
                u.courses?.forEach(crs => {
                    if (crs.sector) s.add(crs.sector);
                });
            });
        });
        return ["All", ...Array.from(s).sort()];
    }, []);

    const [activeCountry, setActiveCountry] = useState(countries[0] || "");
    const [activeSector, setActiveSector] = useState("All");

    const filteredCourses = useMemo(() => {
        const countryData = courseData.find(c => c.country === activeCountry);
        if (!countryData) return [];

        const results = [];
        countryData.universities?.forEach(u => {
            u.courses?.forEach(crs => {
                if (activeSector === "All" || crs.sector === activeSector) {
                    results.push({
                        ...crs,
                        universityName: u.name,
                        id: crs.name + u.name
                    });
                }
            });
        });
        return results;
    }, [activeCountry, activeSector]);

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
                    <div className="filter-section">
                        <h3>Countries</h3>
                        <div className="filter-scroll">
                            {countries.map((country) => (
                                <button
                                    key={country}
                                    className={`country-btn ${activeCountry === country ? "active" : ""}`}
                                    onClick={() => setActiveCountry(country)}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="filter-section">
                        <h3>Sectors</h3>
                        <div className="filter-scroll">
                            {sectors.map((sector) => (
                                <button
                                    key={sector}
                                    className={`country-btn ${activeSector === sector ? "active" : ""}`}
                                    onClick={() => setActiveSector(sector)}
                                >
                                    {sector}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="content">
                    <div className="course-list">
                        {filteredCourses.map((course, idx) => {
                            const logoUrl = logoMap[course.universityName.trim()];
                            return (
                                <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-list-item" key={course.id + idx}>
                                    <div className="course-item-left">
                                        <div className="course-item-logo">
                                            {logoUrl ? (
                                                <img src={logoUrl} alt={course.universityName} className="uni-logo-img" />
                                            ) : (
                                                <Building2 size={24} className="logo-icon" />
                                            )}
                                        </div>
                                        <div className="course-item-info">
                                            <div className="course-university">{course.universityName}</div>
                                            <div className="course-title">{course.name}</div>
                                        </div>
                                    </div>
                                    <div className="course-item-right">
                                        <span className="view-more-link">
                                            View More <ArrowUpRight size={18} />
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                        {filteredCourses.length === 0 && (
                            <div className="no-courses">No courses found for the selected sector.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
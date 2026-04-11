import React, { useState } from "react";
import "./Blogs.css";
import blogData from "../../jsonFiles/Blog.json";
import { useNavigate } from "react-router-dom";

const Blogs = ({ isHome = false }) => {
  const navigate = useNavigate();
  const [activeCountry, setActiveCountry] = useState("All");

  const handleReadMore = (blog) => {
    navigate("/australia-blog"); // direct Australia page
  };

  // Extract unique countries from the blog data
  const uniqueCountries = ["All", ...new Set(blogData.map((blog) => blog.country))];

  // Filter the blogs based on the selected country
  const filteredBlogs =
    activeCountry === "All"
      ? blogData
      : blogData.filter((blog) => blog.country === activeCountry);

  const displayBlogs = isHome ? blogData.slice(0, 1) : filteredBlogs;

  const renderBlogCards = () => (
    <div className="blogs-container">
      {displayBlogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <div className="blog-img">
            <img src={blog.image} alt={blog.country} />
            <span>{blog.country}</span>
          </div>

          <div className="blog-content">
            <p className="blog-date">{blog.date}</p>
            <h3>{blog.title}</h3>
            <p className="blog-desc">{blog.description}</p>

            <button
              className="blog-btn"
              onClick={() => handleReadMore(blog)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="blogs-section">
      <h2 className="popular-h1">
        Latest Study Abroad{" "}
        <span className="popular-h1-span">Blogs & Visa</span> Updates
      </h2>

      {isHome ? (
        renderBlogCards()
      ) : (
        <div className="blogs-wrapper">
          <div className="blogs-content">
            {renderBlogCards()}
          </div>

          {/* Sidebar Filters */}
          <div className="blogs-sidebar">
            <h3>Filter by Country</h3>
            {uniqueCountries.map((country, index) => (
              <button
                key={index}
                className={`blog-filter-btn ${activeCountry === country ? "active" : ""}`}
                onClick={() => setActiveCountry(country)}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
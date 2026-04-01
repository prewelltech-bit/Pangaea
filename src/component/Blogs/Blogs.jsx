import React from "react";
import "./Blogs.css";
import blogData from "../../jsonFiles/Blog.json";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate("/australia-blog"); // direct Australia page
  };

  // 👉 Filter only Australia blogs
  const australiaBlogs = blogData.filter(
    (blog) => blog.country === "Australia"
  );

  return (
    <section className="blogs-section">
      <h2 className="popular-h1">
        Latest Study Abroad{" "}
        <span className="popular-h1-span">Blogs & Visa</span> Updates
      </h2>

      <div className="blogs-container">
        {australiaBlogs.map((blog) => (
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
    </section>
  );
};

export default Blogs;
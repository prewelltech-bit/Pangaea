import React from "react";
import "./Blogs.css";
import blogData from "../../jsonFiles/Blog.json";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

const handleReadMore = (blog) => {
  if (blog.country === "Australia") {
    navigate("/australia-blog");
  } else if (blog.country === "Canada") {
    navigate("/canada-blog");
  } else if (blog.country === "UK") {
    navigate("/uk-blog");
  }
};

  return (
    <section className="blogs-section">
      <h2 className="popular-h1">
        Latest Study Abroad <span className="popular-h1-span">Blogs & Visa</span> Updates
      </h2>

      <div className="blogs-container">
        {blogData.map((blog) => (
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

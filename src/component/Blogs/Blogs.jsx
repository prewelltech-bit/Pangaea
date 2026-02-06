import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 API-like data (future ma real API thi replace kari sakiye)
  useEffect(() => {
    const fetchBlogs = async () => {
      const apiResponse = [
        {
          id: 1,
          title: "Study in Canada: Complete Guide",
          category: "Study Abroad",
          image: "/assets/blog/canada.jpg",
          shortDesc:
            "Universities, fees, intakes, jobs & PR options explained.",
          date: "12 Jan 2026",
          slug: "study-in-canada-guide"
        },
        {
          id: 2,
          title: "IELTS vs PTE: Which One is Better?",
          category: "Exams",
          image: "/assets/blog/ielts-vs-pte.jpg",
          shortDesc:
            "Confused between IELTS & PTE? Here’s a clear comparison.",
          date: "18 Jan 2026",
          slug: "ielts-vs-pte"
        },
        {
          id: 3,
          title: "Cost of Studying in UK",
          category: "Fees & Expenses",
          image: "/assets/blog/uk-cost.jpg",
          shortDesc:
            "Tuition fees, living cost & scholarships explained.",
          date: "25 Jan 2026",
          slug: "study-in-uk-cost"
        }
      ];

      // fake delay – feels like real API 😄
      setTimeout(() => {
        setBlogs(apiResponse);
        setLoading(false);
      }, 500);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading blogs...</h2>;
  }

  return (
    <section className="blogs">
      <div className="blogs-container">
        <h2 className="blogs-heading">Study Abroad Blogs</h2>
        <p className="blogs-subheading">
          Latest guides & updates for students
        </p>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div
              className="blog-card"
              key={blog.id}
              onClick={() => navigate(`/blogs/${blog.slug}`)}
            >
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.shortDesc}</p>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from "react";
import UK_course from "../../../../../../jsonFiles/UkCourse.json";
import "./UKCourse.css"
const UKCourse = () => {
  return (
    <>
      <section className="trending">
        <h2 className="popular-h1">
          Discover <span className="popular-h1-span">Courses</span>{" "}
          in UK
        </h2>

        {/* Courses */}
        <div className="course-grid">
          {UK_course.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <div className="course-title">{course.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default UKCourse;

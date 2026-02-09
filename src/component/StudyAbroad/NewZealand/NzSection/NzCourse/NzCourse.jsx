import React from 'react'
import Course from "../../../../.././jsonFiles/NzCourse.json"
import "../../../UK/UkSection/sections/Uk_Course/UKCourse.css"
const NzCourse = () => {
  return (
    <>
        <section className="trending">
        <h2 className="popular-h1">
          Discover <span className="popular-h1-span">Courses</span> in UK
        </h2>

        {/* Courses */}
        <div className="course-grid">
          {Course.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <div className="course-title">{course.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default NzCourse;
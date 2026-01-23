import React from "react";
import "./Welcome.css";
import Logo from "/assets/Logo/PANGEA_PATHWAYS.png"; // replace with your image path

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Image */}
        <div className="welcome-image">
          <img src={Logo} alt="Library" />
        </div>

        {/* Content */}
        <div className="welcome-content">
          <h1>Welcome</h1>
          <h3>Abroad Institute</h3>

          <p>
            is a Dallas Fort Worth, Texas based global agency for student
            advising, college preparation, and admission counseling. We advise
            both international and domestic students to assist college and
            university admission and recruitment teams with complete
            application packages for evaluation and decision making.
          </p>

          <p>
            Honesty, Integrity, and professional commitment are our company
            philosophy. We exceed the expectation of our students, partners,
            and educational institutions we partner with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome 
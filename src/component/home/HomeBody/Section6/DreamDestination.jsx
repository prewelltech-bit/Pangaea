import React from "react";
import "./DreamDestination.css";

const steps = [
  {
    id: 1,
    title: "Education Counseling",
    desc: "One on One counseling with our country specialist.",
  },
  {
    id: 2,
    title: "University Applications",
    desc: "Apply to your dream university with expert guidance.",
  },
  {
    id: 3,
    title: "Loans & Scholarships",
    desc: "Explore financial options with our loan & scholarship experts.",
  },
  {
    id: 4,
    title: "Visa Assistance",
    desc: "Complete visa documentation with professional support.",
  },
];

const DreamDestination = () => {
  return (
    <section className="dream-section">
      <div className="dream-layout">

        {/* LEFT STACK */}
        <div className="dream-stack">
          <h2 className="dream-title">
            Steps to Your <br /> Dream Destination
          </h2>

          <div className="stack-list">
            {steps.map((step) => (
              <div
                key={step.id}
                className="stack-card"
                style={{ top: `${(step.id) * 90}px` }}
              >
                <span className="step-no">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <button>Free Expert Consultation</button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="dream-image">
          <img src="public/assets/img/event-image.jpg" alt="Dream" />
        </div>

      </div>
    </section>
  );
};

export default DreamDestination;

import React, { useState } from "react";
import "./DreamDestination.css";
import ConsultationModal from "./ConsultationModel/ConsultationModel";

const steps = [
  {
    id: 1,
    title: "Education Counseling",
    desc: "One on One counseling with our country specialist. Shortlist your ideal destination, institution and program with their expert guidance.",
  },
  {
    id: 2,
    title: "University Applications",
    desc: "Apply to your dream university. Our team will guide you through the application process.",
  },
  {
    id: 3,
    title: "Loans & Scholarships",
    desc: "Explore financial options with our loan and scholarship expertise, making your dream education affordable.",
  },
  {
    id: 4,
    title: "Visa Assistance",
    desc: "Apply for your visa with the help of our Visa experts. Our team has a 99% visa success rate.",
  },
];

const DreamDestination = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section className="dream-section">
          <h2 className="dream-title">
            Steps to Your <span className="dream-title-span">Dream Destination</span>
          </h2>
      <div className="dream-layout">
        <div className="dream-stack">

          <div className="stack-list">
            {steps.map((step) => (
              <div
                key={step.id}
                className="stack-card"
                style={{ top: `${step.id * 90}px` }}
              >
                <div className="card-heading">
                  <span className="step-no">{step.id}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.desc}</p>
                <button onClick={() => setIsConsultationOpen(true)}>
                  Free Expert Consultation
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="dream-image">
          <img src="public/assets/img/event-image.jpg" alt="Dream" />
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
};

export default DreamDestination;

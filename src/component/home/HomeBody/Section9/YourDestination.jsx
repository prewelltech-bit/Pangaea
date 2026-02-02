import React from "react";
import "./YourDestination.css";
import { useNavigate } from "react-router-dom";
import destinations from "../../../../jsonFiles/destinations.json";

const YourDestination = () => {
  const navigate = useNavigate();

  const handleExplore = (name) => {
    navigate(`/destination/${name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <section className="destination-section">
      <h2 className="destination-title">Your Destination</h2>

      <div className="destination-grid">
        {destinations.map((item) => (
          <div className="destination-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="destination-overlay">
              <h3>{item.name}</h3>

              <button
                className="explore-btn"
                onClick={() => handleExplore(item.name)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourDestination;

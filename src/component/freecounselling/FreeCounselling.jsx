import React from "react";
import "./FreeCounselling.css";

const FreeCounselling = () => {
  return (
    <section className="counselling-container">
      <div className="counselling-box">
        <h2>Get FREE Counselling Today!</h2>
        <p>Enter your details and our expert will reach out to you to discuss <br /> your plans. By the way, all our services are free!</p>

        <form className="counselling-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email ID" />
            <input type="tel" placeholder="Mobile Number" />
          </div>

          <div className="form-row">
            <select>
              <option>Your preferred study destination</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>USA</option>
              <option>Europe</option>
            </select>
          </div>

          <div className="form-row">
            <select>
              <option>When do you plan to study?</option>
              <option>Immediately</option>
              <option>Within 6 months</option>
              <option>Next Year</option>
            </select>

            <select>
              <option>Your preferred year</option>
              <option>2026</option>
              <option>2027</option>
            </select>
          </div>

          <button type="submit">Get Free Counselling</button>
        </form>
      </div>
    </section>
  );
};

export default FreeCounselling;

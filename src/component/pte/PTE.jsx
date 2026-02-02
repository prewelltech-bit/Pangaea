import React from "react";
import "./PTE.css";
import pteImg from "../../../public/assets/Img/event-image.jpg"; 

const PTE = () => {
  return (
    <section className="pte-section">
      <div className="pte-container">
        
        <div className="pte-left">
          <span className="pte-tag">PTE</span>

          <img src={pteImg} alt="PTE Student" className="pte-image" />

          <p className="pte-intro">
            PTE Academic is the world's leading computer based test of English
            for study abroad and immigration. Typically, PTE Academic results
            are available within five business days.
          </p>

          <div className="pte-info">
            <h4>Artificial intelligence</h4>
            <p>
              A scoring means that it’s not simply a single human assessing your
              English language skills, but a very clever algorithm that mimics
              how human markers would score, based on many, many responses.
            </p>

            <h4>Unbiased scoring</h4>
            <p>
              When you take the PTE Academic test, what you say is graded by AI
              against thousands of previous responses. This means that you’re
              graded only on what you say, not your accent or anything else.
            </p>

            <h4>Flexible testing & fast results</h4>
            <p>
              Thanks to the use of market leading technology, PTE Academic offers
              all test takers incredible flexibility. Test results are typically
              delivered in just 5 business days.
            </p>

            <h4>Send your score unlimited times for free</h4>
            <p>
              PTE Academic proudly gives all test takers the freedom to send
              their scores to as many organizations as you like, without an
              additional fee.
            </p>

            <h4>Unlimited acceptance for study & migration</h4>
            <p>
              PTE Academic is accepted for study applications by thousands of
              academic programs around the world and approved for Australian
              and New Zealand student visa applications.
            </p>
          </div>
        </div>

        <div className="pte-right">
          <h3>Register Now</h3>

          <form className="pte-form">
            <label>Course Applied for</label>
            <input type="text" value="PTE" readOnly />

            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Phone*" />
            <input type="text" placeholder="Location*" />
            <textarea placeholder="Enter Your Message*" rows="4"></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default PTE;

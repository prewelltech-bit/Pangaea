import React, { useState } from "react";
// import { countryFaqs } from "../data/countryFaqs";
import countryFaqs from "../../../../../jsonFiles/FAQS/FAQS.json";
import { ChevronDown } from "lucide-react";
import FaqSchema from "./FaqSchema";
import "./faq.css";

const CountryFAQ = ({ countryName }) => {
  const [openId, setOpenId] = useState(null);

  const selectedCountry = countryFaqs.find(
    (item) => item.country.toLowerCase() === countryName.toLowerCase(),
  );

  if (!selectedCountry) return null;

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* ✅ SEO Schema */}
      <FaqSchema faqs={selectedCountry.faqs} />

      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">
            {countryName} – Frequently Asked Questions
          </h2>

          {selectedCountry.faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button className="faq-question1" onClick={() => toggle(faq.id)}>
                {faq.question}
                <span
                  className={`faq-icon ${openId === faq.id ? "rotate" : ""}`}
                >
                  ▼
                </span>
              </button>

              <div className={`faq-answer ${openId === faq.id ? "open" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CountryFAQ;

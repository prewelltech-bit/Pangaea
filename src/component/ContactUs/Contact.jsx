import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fname || !form.email || !form.message) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    alert("Message Sent Successfully ✅");

    setForm({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact-section">
        <h2 className="popular-h1"> <span className="popular-h1-span"> Contact </span> Us</h2>
        <div className="contact-container">
          
          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-box">
              <div className="icon-wrap">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Office Address</h4>
                <p>
                  Office No: 156, Opera Business Hub,<br />
                  Lajamni Chowk, Mota Varchha,<br />
                  Surat
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-wrap">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <h4>Mobile</h4>
                <p>
                  +91 70696 26269<br />
                  +91 84698 88281
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-wrap">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>admin@Pangeapathways.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <p>We’d love to hear from you. Please fill out the form below.</p>

            {error && <span className="error">{error}</span>}

            <div className="form-row">
              <input
                type="text"
                name="fname"
                placeholder="First name *"
                value={form.fname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lname"
                placeholder="Last name"
                value={form.lname}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message *"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Now</button>
          </form>
        </div>
      </section>

    </>
  );
};

export default Contact;

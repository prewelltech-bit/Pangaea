import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    time_slot: "",
  });

  const [open, setOpen] = useState(false);   // ✅ custom dropdown
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

    // ✅ EMAIL SEND
    // emailjs
    //   .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, bX - q69rXMihDkMWMJ)
    //   .then(
    //     () => {
    //       alert("Message Sent Successfully ✅");
    //       setForm({
    //         fname: "",
    //         lname: "",
    //         email: "",
    //         phone: "",
    //         message: "",
    //         time_slot: "",
    //       });
    //     },
    //     (err) => {
    //       alert("Failed to send ❌");
    //       console.log(err);
    //     },
    //   );
  };

  const times = [
    "10 AM – 12 PM",
    "12 PM – 2 PM",
    "2 PM – 4 PM"
  ];

  return (
    <section className="contact-section">
      <h2 className="popular-h1">
        <span className="popular-h1-span"> Contact </span> Us
      </h2>

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
                Office No: 156, Opera Business Hub,
                <br />
                Lajamni Chowk, Mota Varchha,
                <br />
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
                +91 70696 26269
                <br />
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

          {error && <span className="error">{error}</span>}

          <div className="form-row">
            <input
              name="fname"
              placeholder="First name *"
              value={form.fname}
              onChange={handleChange}
            />
            <input
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
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="custom-select">
            <div
              className="select-box"
              onClick={() => setOpen(!open)}
            >
              {form.time_slot || "Preferred Contact Time *"}
            </div>

            {open && (
              <div className="select-menu">
                {times.map(t => (
                  <div
                    key={t}
                    className="select-item"
                    onClick={() => {
                      setForm({...form, time_slot: t});
                      setOpen(false);
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>

          <textarea name="message" placeholder="Your message *" value={form.message} onChange={handleChange}></textarea>

          <button type="submit">Send Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

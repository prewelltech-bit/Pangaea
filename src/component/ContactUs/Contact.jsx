import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../../utils/emailConfig";

// 1. Define Validation Schema
const schema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+\d{7,15}$/, "Enter a valid phone number with country code (e.g., +919876543210)")
    .required("Phone number is required"),
  time_slot: yup.string().required("Please select a contact time"),
  message: yup.string().required("Message is required").min(10, "Message too short"),
});

const Contact = () => {
  const [open, setOpen] = useState(false);   // ✅ custom dropdown

  // 2. Initialize Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedTime = watch("time_slot");

  const onSubmit = (data) => {
    // ✅ EMAIL SEND
    const emailPayload = {
      name: `${data.fname} ${data.lname}`,
      email: data.email,
      phone: data.phone,
      form_type: "Contact Us",
      message: data.message,
      time: data.time_slot
    };

    emailjs
      .send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, emailPayload, EMAILJS_CONFIG.PUBLIC_KEY)
      .then(
        () => {
          alert("Message Sent Automatically ✅");
          reset();
        },
        (err) => {
          console.error(err);
          alert("Message saved. But failed to auto-send email ❌ (Check EmailJS keys in config)");
        },
      );
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
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Send us a Message</h2>

          <div className="form-row">
            <div>
              <input
                {...register("fname")}
                placeholder="First name *"
                style={{ borderColor: errors.fname ? "#e63946" : "" }}
              />
              {errors.fname && <span className="error">{errors.fname.message}</span>}
            </div>
            <div>
              <input
                {...register("lname")}
                placeholder="Last name"
                style={{ borderColor: errors.lname ? "#e63946" : "" }}
              />
              {errors.lname && <span className="error">{errors.lname.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email address *"
                style={{ borderColor: errors.email ? "#e63946" : "" }}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>
            <div>
              <input
                {...register("phone")}
                placeholder="+91 Phone number *"
                style={{ borderColor: errors.phone ? "#e63946" : "" }}
              />
              {errors.phone && <span className="error">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="custom-select">
            <div
              className={`select-box ${errors.time_slot ? "error-border" : ""}`}
              onClick={() => setOpen(!open)}
              style={{ borderColor: errors.time_slot ? "#e63946" : "" }}
            >
              {selectedTime || "Preferred Contact Time *"}
            </div>

            {open && (
              <div className="select-menu">
                {times.map(t => (
                  <div
                    key={t}
                    className="select-item"
                    onClick={() => {
                      setValue("time_slot", t, { shouldValidate: true });
                      setOpen(false);
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
            {errors.time_slot && <span className="error" style={{ display: "block", marginTop: "5px" }}>{errors.time_slot.message}</span>}
          </div>

          <div style={{ marginBottom: "22px" }}>
            <textarea 
              {...register("message")} 
              placeholder="Your message *" 
              style={{ borderColor: errors.message ? "#e63946" : "", marginBottom: "5px" }}
            ></textarea>
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit">Send Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./PTE.css";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../../utils/emailConfig";

// 1. Define Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+\d{7,15}$/, "Enter a valid phone number with country code (e.g., +919000000000)")
    .required("Phone number is required"),
  location: yup.string().required("Location is required"),
  message: yup.string().optional(),
});

const PTE = () => {
  // 2. Initialize Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const emailPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      form_type: "PTE Registration",
      location: data.location,
      message: data.message
    };

    emailjs
      .send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, emailPayload, EMAILJS_CONFIG.PUBLIC_KEY)
      .then(
        () => {
          alert("Registration Sent Successfully! ✅");
          reset();
        },
        (err) => {
          console.error(err);
          alert("Message saved, but failed to auto-send email ❌ (Check EmailJS keys in config)");
        }
      );
  };

  return (
    <section className="pte-section">
      <div className="pte-container">
        
        <div className="pte-left">
          <span className="pte-tag">PTE</span>

          <img src="/assets/Img/pte/pte-footer.png" alt="PTE Student" className="pte-image" />

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

          <form className="pte-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Course Applied for</label>
            <input type="text" value="PTE" readOnly />

            <div className="pte-field">
              <input 
                {...register("name")} 
                placeholder="Name*" 
                style={{ borderColor: errors.name ? "#e63946" : "" }}
              />
              {errors.name && <span className="pte-error">{errors.name.message}</span>}
            </div>

            <div className="pte-field">
              <input 
                type="email" 
                {...register("email")} 
                placeholder="Email*" 
                style={{ borderColor: errors.email ? "#e63946" : "" }}
              />
              {errors.email && <span className="pte-error">{errors.email.message}</span>}
            </div>

            <div className="pte-field">
              <input 
                {...register("phone")} 
                placeholder="+91 Mobile*" 
                style={{ borderColor: errors.phone ? "#e63946" : "" }}
              />
              {errors.phone && <span className="pte-error">{errors.phone.message}</span>}
            </div>

            <div className="pte-field">
              <input 
                {...register("location")} 
                placeholder="Location*" 
                style={{ borderColor: errors.location ? "#e63946" : "" }}
              />
              {errors.location && <span className="pte-error">{errors.location.message}</span>}
            </div>

            <div className="pte-field">
              <textarea 
                {...register("message")} 
                placeholder="Enter Your Message*" 
                rows="4"
                style={{ borderColor: errors.message ? "#e63946" : "" }}
              ></textarea>
              {errors.message && <span className="pte-error">{errors.message.message}</span>}
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default PTE;

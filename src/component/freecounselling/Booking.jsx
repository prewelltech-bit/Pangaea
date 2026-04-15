import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../../utils/emailConfig";

// 1. Define Validation Schema
const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+\d{7,15}$/, "Enter a valid phone number with country code (e.g., +919876543210)")
    .required("Phone number is required"),
  study_destination: yup.string().required("Preferred destination is required"),
  study_timeline: yup.string().required("Timeline is required"),
  preferred_year: yup.string().required("Preferred year is required"),
});

function BookingForm({ selectedSlot, selectedDate, insideModal = false }) {
  // 2. Initialize Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!selectedSlot) {
      alert("Please select a time slot first");
      return;
    }

    try {
      // 1️⃣ Check if slot physically exists in Firebase
      const slotRef = doc(db, "slots", selectedSlot.id);
      const slotSnap = await getDoc(slotRef);

      if (!slotSnap.exists()) {
        alert("Error: Slot does not exist in Firebase.");
        return;
      }

      if (slotSnap.data().status === "booked") {
        alert("Sorry, this slot is permanently closed.");
        return;
      }

      // 2️⃣ Check if someone already booked it TODAY
      const q = query(
        collection(db, "bookings"),
        where("date", "==", selectedDate),
        where("slot_time", "==", selectedSlot.time)
      );
      const bookingSnap = await getDocs(q);

      if (!bookingSnap.empty) {
        alert("Sorry, this slot was just booked by someone else for this date!");
        return;
      }

      // 3️⃣ Insert booking (Keep existing Database Connection)
      await addDoc(collection(db, "bookings"), {
        ...data, // This 'data' contains all the validated form fields
        slot_id: selectedSlot.id,
        slot_time: selectedSlot.time,
        date: selectedDate,
        created_at: new Date().toISOString()
      });

      // 4️⃣ Send Auto Email via EmailJS
      const emailPayload = {
        name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        phone: data.phone,
        form_type: "Counseling Registration",
        time: selectedSlot.time
      };

      emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailPayload,
        EMAILJS_CONFIG.PUBLIC_KEY
      ).then(() => {
        alert("Booking Confirmed! A confirmation email has been sent. 🎉");
        window.location.reload();
      }).catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Booking Confirmed 🎉 (Auto-email failed, check EmailJS Config keys)");
        window.location.reload();
      });

    } catch (error) {
      alert("Booking failed: " + error.message);
    }
  };

  const formContent = (
    <form className="counselling-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div>
          <label>Name</label>
          <input
            {...register("first_name")}
            placeholder="First Name"
            style={{ width: "100%", borderColor: errors.first_name ? "#e63946" : "" }}
          />
          {errors.first_name && <span className="error-msg">{errors.first_name.message}</span>}
        </div>

        <div>
          <label>Surname</label>
          <input
            {...register("last_name")}
            placeholder="Surname"
            style={{ width: "100%", borderColor: errors.last_name ? "#e63946" : "" }}
          />
          {errors.last_name && <span className="error-msg">{errors.last_name.message}</span>}
        </div>
      </div>

      <div className="form-row">
        <div>
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="Email"
            style={{ width: "100%", borderColor: errors.email ? "#e63946" : "" }}
          />
          {errors.email && <span className="error-msg">{errors.email.message}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input
            {...register("phone")}
            placeholder="+91 XXXXXXXXXX"
            style={{ width: "100%", borderColor: errors.phone ? "#e63946" : "" }}
          />
          {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
        </div>
      </div>

      <div className="form-row">
        <div>
          <label>Your preferred study destination</label>
          <select
            {...register("study_destination")}
            style={{ width: "100%", borderColor: errors.study_destination ? "#e63946" : "", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">-- Select Destination --</option>
            <option value="Australia">Australia</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Europe">Europe</option>
            <option value="United States">United States</option>
          </select>
          {errors.study_destination && <span className="error-msg">{errors.study_destination.message}</span>}
        </div>
      </div>

      <div className="form-row">
        <div>
          <label>When do you plan to study?</label>
          <select
            {...register("study_timeline")}
            style={{ width: "100%", borderColor: errors.study_timeline ? "#e63946" : "", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">-- Select Timeline --</option>
            <option value="Within 3 Months">Within 3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="More than a Year">More than a Year</option>
          </select>
          {errors.study_timeline && <span className="error-msg">{errors.study_timeline.message}</span>}
        </div>

        <div>
          <label>Your preferred year</label>
          <input
            {...register("preferred_year")}
            placeholder="Preferred Year"
            style={{ width: "100%", borderColor: errors.preferred_year ? "#e63946" : "" }}
          />
          {errors.preferred_year && <span className="error-msg">{errors.preferred_year.message}</span>}
        </div>
      </div>

      <button type="submit">Get Free Counselling</button>
    </form>
  );

  if (insideModal) {
    return (
      <div className="counselling-box-mini">
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>Schedule Your Session</h2>
        <p style={{ textAlign: "left" }}>Fill in your details to confirm your slot.</p>
        {formContent}
      </div>
    );
  }

  return (
    <>
      <section className="counselling-container">
        <div className="counselling-box">
          <h2>Get FREE Counselling Today!</h2>
          <p>
            Enter your details and our expert will reach out to you to discuss{" "}
            <br /> your plans. By the way, all our services are free!
          </p>
          {formContent}
        </div>
      </section>
    </>
  );
}

export default BookingForm;

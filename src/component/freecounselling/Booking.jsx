import React, { useState } from "react";
import { collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "../../utils/emailConfig";

function BookingForm({ selectedSlot }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    study_destination: "",
    study_timeline: "",
    preferred_year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const todayDate = new Date().toISOString().split("T")[0];
      const q = query(
        collection(db, "bookings"), 
        where("date", "==", todayDate), 
        where("slot_time", "==", selectedSlot.time)
      );
      const bookingSnap = await getDocs(q);

      if (!bookingSnap.empty) {
        alert("Sorry, this slot was just booked by someone else for today!");
        return;
      }

      // 3️⃣ Insert booking
      await addDoc(collection(db, "bookings"), {
        ...formData,
        slot_id: selectedSlot.id,
        slot_time: selectedSlot.time,
        date: todayDate,
        created_at: new Date().toISOString()
      });

      // 4️⃣ Send Auto Email via EmailJS
      const emailPayload = {
        name: `${formData.first_name} ${formData.last_name}`,
        email: formData.email,
        phone: formData.phone,
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

  return (
    <>
      {/* <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className=""
      >
        <h3>Enter Your Details</h3>

        <input
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Mobile"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          name="study_destination"
          placeholder="Preferred Study Destination"
          value={formData.study_destination}
          onChange={handleChange}
        />

        <input
          name="study_timeline"
          placeholder="When do you plan to study?"
          value={formData.study_timeline}
          onChange={handleChange}
        />

        <input
          name="preferred_year"
          placeholder="Preferred Year"
          value={formData.preferred_year}
          onChange={handleChange}
        />

        <button type="submit" style={{ marginTop: "15px" }}>
          Confirm Booking
        </button> 
      </form> */}
      <section className="counselling-container">
        <div className="counselling-box">
          <h2>Get FREE Counselling Today!</h2>
          <p>
            Enter your details and our expert will reach out to you to discuss{" "}
            <br /> your plans. By the way, all our services are free!
          </p>

          <form className="counselling-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label>First name</label>
                <input
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>

              <div>
                <label>Last Name</label>
                <input
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  name="phone"
                  placeholder="Mobile"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Your preferred study destination</label>
                <input
                  name="study_destination"
                  placeholder="only Au, Uk, Nz, Eu, Canada, Us"
                  value={formData.study_destination}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>When do you plan to study?</label>
                <input
                  name="study_timeline"
                  placeholder="When do you plan to study?"
                  value={formData.study_timeline}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>

              <div>
                <label>Your preferred year</label>
                <input
                  name="preferred_year"
                  placeholder="Preferred Year"
                  value={formData.preferred_year}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  required
                />
              </div>
            </div>

            <button type="submit">Get Free Counselling</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookingForm;

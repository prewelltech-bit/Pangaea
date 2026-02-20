import React, { useState } from "react";
import { supabase } from "./supabase";

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

  // 1️⃣ Check if slot is still available
  const { data: slotData, error: slotCheckError } = await supabase
    .from("slots")
    .select("status")
    .eq("id", selectedSlot.id)
    .single();

  if (slotCheckError) {
    alert("Error checking slot");
    return;
  }

  if (slotData.status === "booked") {
    alert("Sorry, this slot is already booked.");
    return;
  }

  // 2️⃣ Insert booking
  const { error: bookingError } = await supabase
    .from("bookings")
    .insert([
      {
        ...formData,
        slot_id: selectedSlot.id,
      },
    ]);

  if (bookingError) {
    alert("Booking failed: " + bookingError.message);
    return;
  }

  // 3️⃣ Update slot status
  await supabase
    .from("slots")
    .update({ status: "booked" })
    .eq("id", selectedSlot.id);

  alert("Booking Confirmed 🎉");
};

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px" , display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
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
    </form>
  );
}

export default BookingForm;
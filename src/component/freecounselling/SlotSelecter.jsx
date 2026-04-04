import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase";
import "./FreeCounselling.css";

function SlotSelector({ selectedSlot, setSelectedSlot, selectedDate, setSelectedDate, showDatePicker = false }) {
  const [slots, setSlots] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);

  async function fetchSlots() {
    try {
      // 1. Fetch available framework slots
      const q = query(collection(db, "slots"), orderBy("time", "asc"));
      const querySnapshot = await getDocs(q);
      const fetchedSlots = [];
      querySnapshot.forEach((doc) => {
        fetchedSlots.push({ ...doc.data(), id: doc.id });
      });
      setSlots(fetchedSlots);

      // 2. Fetch today's actively booked slots
      const bq = query(collection(db, "bookings"), where("date", "==", selectedDate));
      const bSnapshot = await getDocs(bq);
      const booked = [];
      bSnapshot.forEach((doc) => {
        booked.push(doc.data().slot_id);
      });
      setBookedTimes(booked);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  }

  useEffect(() => {
    if (selectedDate) fetchSlots();
  }, [selectedDate]);

  return (
    <div className="slot-selector-container" style={{ width: "100%" }}>
      <h3 className="slot-heading">Select {showDatePicker ? "Date & " : ""}Time Slot</h3>
      {showDatePicker && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedSlot(null);
            }}
            min={new Date().toLocaleDateString('en-CA')}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              maxWidth: "300px",
              width: "100%",
              fontSize: "16px",
              fontFamily: "inherit"
            }}
          />
        </div>
      )}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        className="slot-booking"
      >
        {slots.map((slot) => {
          const isSlotBooked = bookedTimes.includes(slot.id) || slot.status === "booked";
          return (
            <button
              key={slot.id}
              disabled={isSlotBooked}
              onClick={() => setSelectedSlot(slot)}
              style={{
                padding: "10px 15px",
                border: "1px solid green",
                background:
                  isSlotBooked
                    ? "#ddd"
                    : selectedSlot?.id === slot.id
                      ? "green"
                      : "white",
                color: isSlotBooked ? "#999" : selectedSlot?.id === slot.id ? "white" : "black",
                cursor: isSlotBooked ? "not-allowed" : "pointer",
              }}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SlotSelector;

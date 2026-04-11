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
            className="date-picker-input"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setSelectedSlot(null);
            }}
            min={new Date().toLocaleDateString('en-CA')}
          />
        </div>
      )}
      <div className="slot-booking">
        {slots.map((slot) => {
          const isSlotBooked = bookedTimes.includes(slot.id) || slot.status === "booked";
          let btnClass = "slot-btn";
          if (isSlotBooked) btnClass += " booked";
          else if (selectedSlot?.id === slot.id) btnClass += " selected";
          else btnClass += " available";

          return (
            <button
              key={slot.id}
              disabled={isSlotBooked}
              className={btnClass}
              onClick={() => setSelectedSlot(slot)}
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

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase";
import "./FreeCounselling.css";

function SlotSelector({ selectedSlot, setSelectedSlot }) {
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
      const todayDate = new Date().toISOString().split("T")[0];
      const bq = query(collection(db, "bookings"), where("date", "==", todayDate));
      const bSnapshot = await getDocs(bq);
      const booked = [];
      bSnapshot.forEach((doc) => {
        booked.push(doc.data().slot_time);
      });
      setBookedTimes(booked);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  }

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div>
      <h3 className="slot-heading">Select Time Slot</h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        className="slot-booking"
      >
        {slots.map((slot) => {
          const isBookedToday = bookedTimes.includes(slot.time) || slot.status === "booked";
          return (
            <button
              key={slot.id}
              disabled={isBookedToday}
              onClick={() => setSelectedSlot(slot)}
              style={{
                padding: "10px 15px",
                border: "1px solid green",
                background:
                  isBookedToday
                    ? "#ddd"
                    : selectedSlot?.id === slot.id
                      ? "green"
                      : "white",
                color: isBookedToday ? "#999" : selectedSlot?.id === slot.id ? "white" : "black",
                cursor: isBookedToday ? "not-allowed" : "pointer",
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

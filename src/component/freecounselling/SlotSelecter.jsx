import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./FreeCounselling.css";
function SlotSelector({ selectedSlot, setSelectedSlot }) {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots();
  }, []);

  async function fetchSlots() {
    const { data, error } = await supabase
      .from("slots")
      .select("*")
      .order("time", { ascending: true });
    console.log("Slots data:", data);
    if (error) {
      console.log(error);
    } else {
      setSlots(data);
    }
  }

  return (
    <div>
      <h3>Select Time Slot</h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }} className="slot-booking">
        {slots.map((slot) => (
          <button
            key={slot.id}
            disabled={slot.status === "booked"}
            onClick={() => setSelectedSlot(slot)}
            style={{
              padding: "10px 15px",
              border: "1px solid green",
              background:
                slot.status === "booked"
                  ? "#ddd"
                  : selectedSlot?.id === slot.id
                    ? "green"
                    : "white",
              color: slot.status === "booked" ? "#999" : "black",
              cursor: slot.status === "booked" ? "not-allowed" : "pointer",
            }}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SlotSelector;

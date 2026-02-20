import React from "react";
import { useState } from "react";
import { supabase } from "./supabase";
// import { FreeCounsellingDemo } from "./FreeCounsellingDemo";

function CounselingDemo() {
  const [name, setName] = useState("");

  const saveData = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    const { data , error } = await supabase
      .from("slot")
      .insert([{ first_name: name }]);

    if (error) {
      alert("Error saving: " + error.message);
      console.log(error);
    } else {
      alert("Saved successfully!");
      setName("");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <input
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default CounselingDemo;

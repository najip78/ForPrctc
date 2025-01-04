import React, { useState } from "react";
import useStore from "./store/SimpleStore";

export default function App() {
  const { names, setName } = useStore(); // Access the store's state and actions

  const handleInputChange = (e, index) => {
    setName(index, e.target.value); // Update the name at the specified index
  };

  return (
    <>
      {/* Loop through the array and display the names */}
      {names.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <input
            type="text"
            value={item}
            onChange={(e) => handleInputChange(e, index)} // Handle input change
          />
        </div>
      ))}
    </>
  );
}

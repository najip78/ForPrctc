import React, { useState } from "react";

import "./../public/Main.css";

export default function App() {
  const [anima, seanima] = useState(localStorage.getItem("animationState")); // Fixed useState initialization

  const handleanima = () => {
    if (!anima) { seanima(true) }
    else { seanima(false) }
    localStorage.setItem("animationState", anima)
  };


  return (
    <>

      {/* Animated element */}
      <div className="cnt">
        <div className={anima ? "linearG" : ""}></div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9DEjKh8GLGA0rK2B_YhYmzRpvyXyBUV_kw&s"
          alt="Animation Example"
        />
        <img
          onClick={handleanima}
          className="sp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqFEU0exC2YETi1Aq9fyi2i7QV7s6rt9tVA&s"
          alt="Stop Animation Example"
        />
      </div>
    </>
  );
}

console.log(">>>>>>>>>>");
console.log("..........");
console.log("_________________")

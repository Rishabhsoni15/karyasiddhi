import React, { useState } from "react";
import "./Button.css"; // Custom animation

const Button = ({ item, className, buttonClass, onClick, curtainColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden  font-semibold bg-[#ff4231] ${buttonClass}`}
    >
      <span
        className={`relative z-10 transition-colors duration-500 uppercase ${className}`}
      >
        {item}
      </span>

      <span
        className={`absolute top-0 left-0 h-full w-full z-0 
          ${isHovered ? "animate-swipeIn" : "animate-swipeOut"}`}
        style={{ backgroundColor: curtainColor }}
      ></span>
    </button>
  );
};

export default Button;

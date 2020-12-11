import React from "react";
import "./index.css";

const Button = ({ children, className, style }) => {
  return (
    <button className={`btn ${className}`} style={{style}}>
      {children}
    </button>
  );
};

export default Button;

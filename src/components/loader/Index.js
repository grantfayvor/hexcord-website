import React from "react";
import "./loader.css";

export default () => {
  return (
    <div className="progress__container">
      <div className="progress__spinner"></div>
      <div className="progress__message regular__text__bold">Sometimes it might take time. Hold tight.</div>
    </div>
  );
};
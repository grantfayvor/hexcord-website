import React from "react";
import { NavLink } from "react-router-dom";
import backIcon from '../../assets/back.svg'

const BackButton = () => {
  return (
    <NavLink
      to="/"
      className="regular_16 boring__link"
      style={{display: "flex", alignItems: "center", paddingBottom: 20}}
    >
      <img alt="Back icon" src={backIcon} style={{paddingRight: 20}}/>
      <p> Back to Home</p>
    </NavLink>
  );
};

export default BackButton;

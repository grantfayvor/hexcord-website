import React from 'react';
import "../index.css";
import logo from "../logo.svg";

const Header = () => {

  return (
    <header className="main__header">
      <img src={logo} className="logo" alt="Hexcord logo" />
    </header>
  )
};

export default Header;
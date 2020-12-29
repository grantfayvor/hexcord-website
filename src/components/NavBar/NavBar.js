import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = ({ onlyLogo = false }) => {
  return (
    <header className="main__header">
      <nav className="navbar">
        <div>
          <NavLink to="/">
            <img className="logo" src={logo} alt="Hexcord logo" />
          </NavLink>
        </div>
        {
          !onlyLogo && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="https://app.hexcord.com" className="link boring__link">Sign In</a>
              <a
                href="https://chrome.google.com/webstore/detail/hexcord/apkdlkpcghonmghkbkhhjpaemnmjahgi"
                className="primary__button navbar__add__to__chrome chrome__button"
              >
                Add to Chrome
          </a>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default NavBar;

import React, { Fragment } from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import { Button } from "../Button";

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div style={{ marginLeft: 200 }}>
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: 200 }}
        >
          <a className="link">Sign Up</a>
          <a
            href="https://chrome.google.com/webstore/detail/hexcord/apkdlkpcghonmghkbkhhjpaemnmjahgi"
            className="primary__button"
          >
            Add to Chrome
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;

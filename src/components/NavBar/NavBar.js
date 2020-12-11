import React, { Fragment } from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import {Button} from "../Button";

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <div style={{marginLeft: 200}}>
          <a>
            <img src={logo} />
          </a>
        </div>
        <div style={{marginRight: 200}}>
          <a className="link">Sign Up</a>
          <Button style={{width: 400}}>Add to Chrome</Button>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;

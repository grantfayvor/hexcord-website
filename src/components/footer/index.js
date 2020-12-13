import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <a href="https://twitter.com/thehexcord" className="footer__links boring__link">
          Twitter
        </a>
        <a href="https://www.linkedin.com/company/hexcord" className="footer__links boring__link">
          LinkedIn
        </a>
      </section>
      <section>
        <NavLink className="footer__links boring__link" to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink className="footer__links boring__link" to="/terms-condition">
          Terms & Conditions
        </NavLink>
        <a className="footer__links boring__link" href="mailto:thehexcord@gmail.com">Contact</a>
      </section>
    </footer>
  );
};

export default Footer;

export const CommingSoonFooter = props => {
  const date = new Date();

  return (
    <aside className={`footer__container ${props.allowScroll ? "relative_position" : ""}`}>
      <footer className="main__footer">
        <div className="socials">
          <a href="https://twitter.com/thehexcord" className="icon__button"><span className="twitter"></span></a>
          <a href="mailto:thehexcord@gmail.com" style={{ float: "right" }} className="icon__button"><span className="email"></span></a>
        </div>
        <div>
          <NavLink to="/privacy-policy" className="boring__link">Privacy Policy</NavLink>
        </div>
        <div className="timestamp">
          {date.toLocaleDateString()}
        </div>
      </footer>
    </aside>
  );
};
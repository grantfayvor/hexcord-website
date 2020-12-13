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

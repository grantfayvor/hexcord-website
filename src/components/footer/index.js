import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer ">
      <section className="flex justify-center hr py-6 mx-40">
        <a href="https://twitter.com/thehexcord" className="mx-10">
          Twitter
        </a>
        <a href="mailto:thehexcord@gmail.com" className="icon__button">
          LinkedIn
        </a>
      </section>
      <section className="flex justify-center py-6">
        <NavLink to="/privacy_policy">Privacy Policy</NavLink>
        <NavLink className="mx-10" to="terms_condition">Terms & Conditions</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </section>
    </footer>
  );
};

export default Footer;

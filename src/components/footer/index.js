import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer ">
      <section
        className="hr"
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          marginLeft: 40,
          marginRight: 40,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://twitter.com/thehexcord"
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          Twitter
        </a>
        <a href="mailto:thehexcord@gmail.com" className="icon__button">
          LinkedIn
        </a>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <a href="/privacy_policy">Privacy Policy</a>
        <a style={{ marginLeft: 10, marginRight: 10 }} href="terms_condition">
          Terms & Conditions
        </a>
        <a href="/contact">Contact</a>
      </section>
    </footer>
  );
};

export default Footer;

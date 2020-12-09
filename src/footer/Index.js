import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = props => {
  const date = new Date();

  return (
    <aside className={`footer__container ${props.allowScroll ? "relative_position" : ""}`}>
      <footer className="main__footer">
        <div className="socials">
          <a href="https://twitter.com/thehexcord" className="icon__button"><span className="twitter"></span></a>
          <a href="mailto:thehexcord@gmail.com" style={{ float: "right" }} className="icon__button"><span className="email"></span></a>
        </div>
        <div>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
        <div className="timestamp">
          {date.toLocaleDateString()}
        </div>
      </footer>
    </aside>
  )
}

export default Footer;
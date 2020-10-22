import React from 'react';

const Footer = () => {
  const date = new Date();

  return (
    <aside className="footer__container">
      <footer className="main__footer">
        <div className="socials">
          <a href="https://twitter.com/thehexcord" className="icon__button"><span className="twitter"></span></a>
          <a href="mailto:thehexcord@gmail.com" style={{ float: "right" }} className="icon__button"><span className="email"></span></a>
        </div>
        <div className="timestamp">
          {date.toLocaleDateString()}
        </div>
      </footer>
    </aside>
  )
}

export default Footer;
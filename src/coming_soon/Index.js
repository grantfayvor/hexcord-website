import React, { useState } from 'react';
import "../index.css";

const ComingSoon = props => {
  const [email, setEmail] = useState("");

  return (
    <section className="main__container">
      <main className="coming__soon">
        <h1 className="coming__soon__heading">Video content creation that is  fast, easy and simple.</h1>
        <h3 className="message">Get notified when we launch</h3>
        <form>
          <div className="form__body">
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="default__input" placeholder="Add email address" />
          </div>
          <div>
            <button type="submit" className="primary__button">Notify me</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ComingSoon;
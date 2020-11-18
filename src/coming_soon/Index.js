import React, { useState } from 'react';
import "../index.css";
import constants from "../constants";

const ComingSoon = props => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${constants.FUNCTION_ENDPOINT}/api/saveEmail`, {
      method: "POST",
      body: JSON.stringify({ emailAddress: email }),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(resp => resp.json());
  }

  return (
    <section className="main__container">
      <main className="coming__soon">
        <h1 className="coming__soon__heading" style={{ marginBottom: "20px" }}>Video content creation that is  fast, easy and simple.</h1>
        <h3 className="message" style={{ marginTop: "0" }}>Install. Open Extension. Start Recording.</h3>
        <h3 className="message">Get notified when we launch</h3>
        <form onSubmit={handleSubmit}>
          <div className="form__body">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="default__input" placeholder="Add email address" />
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
import React, { useState, useEffect } from 'react';
import constants from "../constants";
import Modal from '../components/modal/Index';
import Loader from '../components/loader/Index';

const ComingSoon = props => {
  const [email, setEmail] = useState("");
  const [modalInfo, setModalInfo] = useState();
  const [isSubscribed, setSubscribedState] = useState(false);
  const [isButtonDisabled, shouldDisableButton] = useState(false);
  const [isShowingLoader, showLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoader(true);
    shouldDisableButton(true);

    try {
      const resp = await fetch(`${constants.FUNCTION_ENDPOINT}/api/saveEmail`, {
        method: "POST",
        body: JSON.stringify({ emailAddress: email }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(resp => resp.json());

      if (!resp || resp?.error) throw new Error(resp?.error || "An unknown error occurred. Please try again.");

      showLoader(false);
      setModalInfo({ message: "You have successfully signed up for Hexcord beta." });
      shouldDisableButton(false);
      setSubscribedState(true);
    } catch (error) {
      console.error(error);
      showLoader(false);
    }
  };

  const unsubscribe = async (emailAddress = email) => {
    showLoader(true);
    try {
      const resp = await fetch(`${constants.FUNCTION_ENDPOINT}/api/unsubscribeBeta`, {
        method: "PUT",
        body: JSON.stringify({ emailAddress }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(resp => resp.json());

      if (!resp || resp?.error) throw new Error(resp?.error || "An unknown error occurred. Please try again.");
      showLoader(false);
      setModalInfo({ message: "You have successfully unsubscribed from Hexcord beta. Sad to see you leave." });
      setSubscribedState(false);
    } catch (error) {
      console.error(error);
      showLoader(false);
    }
  };

  useEffect(() => {
    if (modalInfo) {
      setTimeout(() => setModalInfo(undefined), 10000);
    }
  }, [modalInfo]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if ("/u" === window.location.pathname) {
      unsubscribe(atob(urlParams.get("e")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        modalInfo && <Modal {...modalInfo} closeModal={() => setModalInfo(undefined)} />
      }
      {
        isShowingLoader ?
          <Loader /> :
          (
            <section className="main__container">
              <main className="coming__soon">
                <h1 className="coming__soon__heading" style={{ marginBottom: "20px" }}>Video content creation that is  fast, easy and simple.</h1>
                <h3 className="bold__message">Install. Open Extension. Start Recording.</h3>
                <p>
                  Have you ever wanted to quickly create video content without going through the hassle of installing one software after
                  the other and learning how to use each specific software? Then this is definitely for you.
                </p>
                <p>
                  Hexcord is a simple to use tool that is perfect for creating presentations, tutorial videos, and recording talks or speeches.
                  It is built as a browser extension with very minimal configurations.
                </p>
                <h3 className="bold__message">Get notified when we launch</h3>
                {
                  isSubscribed ?
                    (<>
                      <p className="bold__message" style={{ color: "#219653" }}>You have successfully signed up for Hexcord beta. You'll be notified when it's available.</p>
                      <button type="button" className="link__button" onClick={() => unsubscribe(email)}>Click here to Unsubcribe.</button>
                    </>) :
                    (<form onSubmit={handleSubmit}>
                      <div className="form__body">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="default__input" placeholder="Add email address" required />
                      </div>
                      <div>
                        <button type="submit" disabled={isButtonDisabled} className="primary__button">Notify me</button>
                      </div>
                    </form>)
                }
              </main>
            </section>
          )
      }
    </>
  );
};

export default ComingSoon;
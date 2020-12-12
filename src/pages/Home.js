import React from 'react';
import record_image from '../assets/record.svg';
import share_image from '../assets/share.svg';
import upload_image from '../assets/upload.svg';
import user_flow from '../assets/hexcord_user_flow.gif';

const Home = () => {
  return (
    <section className="home__wrapper flex flex-col items-center">
      <section className="container reduced__container">
        <main className="caption__container flex flex-col items-center justify-center">
          <h1 className="main__caption">Video content creation that is fast, easy, and simple.</h1>
          <h3 className="bold__message">Install. Open Extension. Start Recording.</h3>
          <a href="https://chrome.google.com/webstore/detail/hexcord/apkdlkpcghonmghkbkhhjpaemnmjahgi" className="primary__button">Add to Chrome</a>
        </main>
      </section>
      <section className="container content__creation__container">
        <main className="description__container">
          <h1 className="description__caption">Easy Video Content Creation</h1>
          <h3 className="bold__message">Creating video presentations should not be hard. I'm sure you agree.</h3>
          <section className="description__sub__section">
            <div>
              <img src={record_image} alt="Record" />
              <p className="bold__message">Record</p>
              <p>
                Record your video content with at least three clicks.
              </p>
            </div>
            <div>
              <img src={upload_image} alt="Upload" />
              <p className="bold__message">Upload</p>
              <p>
                Save your video recording to your Google Drive or upload the recording to Youtube.
              </p>
            </div>
            <div>
              <img src={share_image} alt="Share" />
              <p className="bold__message">Share</p>
              <p>
                Share the recording either by sharing the link to your recording or sending an invite direct to recipients email.
              </p>
            </div>
          </section>
        </main>
      </section>
      <section className="container presentation">
        <main className="description__container presentation__container">
          <h1 className="description__caption">Speed & Ease with Every Video</h1>
          <h3 className="bold__message">Here is how it works.</h3>
          <img src={user_flow} className="userflow__presentation" alt="Hexcord User Flow" />
        </main>
      </section>
      <section className="container closing">
        <main className="description__container flex flex-col items-center justify-center py-14">
          <h1 className="description__caption">Its easy, its fast, its Hexcord</h1>
          <h3 className="bold__message">Install. Open extension. Start recording.</h3>
          <a href="https://chrome.google.com/webstore/detail/hexcord/apkdlkpcghonmghkbkhhjpaemnmjahgi" className="primary__button my-10">Add to Chrome</a>
        </main>
      </section>
    </section>
  );
};

export default Home;
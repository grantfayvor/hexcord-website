import React from 'react';
import checkmark from '../../assets/checkmark.svg';
import './style.css';

const Modal = ({ message = "", closeModal }) => {

  return (
    <div className="backdrop">
      <div className="modal__card">
        <div className="modal__body">
          <img src={checkmark} alt="success" />
          <p>{message}</p>
          <button type="button" onClick={closeModal} className="link__button back__button">Back</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
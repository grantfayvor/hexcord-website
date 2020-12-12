import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { withRouter } from "react-router-dom";
import backIcon from '../../assets/back.svg'

const BackButton = ({ history }) => {
  return (
    <button
      onClick={() => history.goBack()}
      className="regular_16 flex items-center pb-20"
    >
      <img src={backIcon} className="pr-4"/>
      <p> Back to Home</p>
    </button>
  );
};

export default withRouter(BackButton);

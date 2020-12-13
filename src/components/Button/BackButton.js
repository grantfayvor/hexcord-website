import React from "react";
import { withRouter } from "react-router-dom";
import backIcon from '../../assets/back.svg'

const BackButton = ({ history }) => {
  return (
    <button
      onClick={() => history.goBack()}
      className="regular_16"
      style={{display: "flex", alignItems: "center", paddingBottom: 20}}
    >
      <img src={backIcon} style={{paddingRight: 20}}/>
      <p> Back to Home</p>
    </button>
  );
};

export default withRouter(BackButton);

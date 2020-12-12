import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { withRouter } from "react-router-dom";

const BackButton = ({ history }) => {
  return (
    <div
      onClick={() => history.goBack()}
      className="regular_16 flex items-center pb-20"
    >
      <IoIosArrowBack style={{ marginRight: 20 }} />
      <p> Back to Home</p>
    </div>
  );
};

export default withRouter(BackButton);

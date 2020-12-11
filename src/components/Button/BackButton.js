import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = (props) => {
  return (
    <div
      className="regular_16 flex items-center pb-20"
    >
      <IoIosArrowBack style={{ marginRight: 20 }} />
      <p> Back to Home</p>
    </div>
  );
};

export default BackButton;

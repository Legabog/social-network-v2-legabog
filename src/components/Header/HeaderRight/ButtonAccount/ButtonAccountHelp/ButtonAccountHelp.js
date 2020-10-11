import React from "react";
import "./ButtonAccountHelp.css";

const ButtonAccountHelp = (props) => {
  return (
    <div
      className="button-account__help"
      style={{
        opacity: props.helpAccountOpacity,
        visibility: props.helpAccountVisibility,
      }}
    >
      <span onClick={props.logout}>Account</span>
    </div>
  );
};

export default ButtonAccountHelp;

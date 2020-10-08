import React from "react";
import "./ButtonAccountHelp.css";

const ButtonAccountHelp = (props) => {
  return (
    <div
      className="header__option__account__help"
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

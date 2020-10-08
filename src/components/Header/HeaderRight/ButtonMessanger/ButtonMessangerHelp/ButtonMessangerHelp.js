import React from "react";
import "./ButtonMessangerHelp.css";

const ButtonMessangerHelp = (props) => {
  return (
    <div
      className="header__option__messanger__help"
      style={{
        opacity: props.helpMessangerOpacity,
        visibility: props.helpMessangerVisibility,
      }}
    >
      <span>Messanger</span>
    </div>
  );
};

export default ButtonMessangerHelp;

import React from "react";
import "./ButtonCreateHelp.css";

const ButtonCreateHelp = (props) => {
  return (
    <div
      className="button-create__help"
      style={{
        opacity: props.helpCreateOpacity,
        visibility: props.helpCreateVisibility,
      }}
    >
      <span>Create</span>
    </div>
  );
};

export default ButtonCreateHelp;

import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./ContactAndBasicInfoComponentAddButton.css";

export const ContactAndBasicInfoComponentAddButton = (props) => {
  return (
    <div
      className={"ContactAndBasicInfoComponent__addButton"}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={"ContactAndBasicInfoComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

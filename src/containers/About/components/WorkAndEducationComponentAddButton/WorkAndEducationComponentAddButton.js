import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./WorkAndEducationComponentAddButton.css";

export const WorkAndEducationComponentAddButton = (props) => {
  return (
    <div
      className={"WorkAndEducationComponent__addButton"}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={"WorkAndEducationComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};


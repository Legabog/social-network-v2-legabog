import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./LifeEventsComponentAddButton.css";

const LifeEventsComponentAddButton = (props) => {
  return (
    <div
      className={"LifeEventsComponent__addButton"}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={"LifeEventsComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default LifeEventsComponentAddButton;

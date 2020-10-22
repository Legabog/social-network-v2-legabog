import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./OverviewComponentAddButton.css";

export const OverviewComponentAddButton = (props) => {
  return (
    <div className={"OverviewComponent__addButton"} onClick={() => {
      props.toggleActiveComponent(true)
    }}>
      <ControlPointIcon />
      <div className={"OverviewComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};


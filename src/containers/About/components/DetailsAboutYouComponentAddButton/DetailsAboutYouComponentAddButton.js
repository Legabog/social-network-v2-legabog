import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./DetailsAboutYouComponentAddButton.css";

export const DetailsAboutYouComponentAddButton = (props) => {
  return (
    <div
      className={"DetailsAboutYouComponent__addButton"}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={"DetailsAboutYouComponent__addButton__description"}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};


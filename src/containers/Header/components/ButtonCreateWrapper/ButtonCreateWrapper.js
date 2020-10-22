import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./ButtonCreateWrapper.css";

export const ButtonCreateWrapper = (props) => {
  return (
    <div className={"button-create__wrapper"}>
      <div
        id="button__create"
        className={
          props.activeButton === 0 ? "button-create_active" : "button-create"
        }
        onClick={() => {
          props.activeButton === 0
            ? props.toggleActiveButton()
            : props.toggleActiveButton(0);
          props.toggleHelpCreate(false);
        }}
        onMouseEnter={() => {
          props.toggleHelpCreate(true);
        }}
        onMouseLeave={() => {
          props.toggleHelpCreate(false);
        }}
      >
        <AddIcon />
      </div>
    </div>
  );
};


import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "./ButtonMessangerWrapper.css";

export const ButtonMessangerWrapper = (props) => {
  return (
    <div className={"button-messanger__wrapper"}>
      <div
        className={
          props.activeButton === 1
            ? "button-messanger_active"
            : "button-messanger"
        }
        onClick={() => {
          props.activeButton === 1
            ? props.toggleActiveButton()
            : props.toggleActiveButton(1);
          props.toggleHelpMessanger(false);
        }}
        onMouseEnter={() => {
          props.toggleHelpMessanger(true);
        }}
        onMouseLeave={() => {
          props.toggleHelpMessanger(false);
        }}
      >
        <ChatIcon />
      </div>
    </div>
  );
};

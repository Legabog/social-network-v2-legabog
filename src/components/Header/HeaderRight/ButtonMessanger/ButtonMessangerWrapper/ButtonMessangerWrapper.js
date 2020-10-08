import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "./ButtonMessangerWrapper.css";

const ButtonMessangerWrapper = (props) => {
  return (
    <div className={"button__messanger__wrapper"}>
      <div
        className={
          props.activeButton === 1
            ? "button__messanger__active"
            : "button__messanger"
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

export default ButtonMessangerWrapper;

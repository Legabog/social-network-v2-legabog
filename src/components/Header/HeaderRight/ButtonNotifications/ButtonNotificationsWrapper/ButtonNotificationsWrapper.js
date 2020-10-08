import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./ButtonNotificationsWrapper.css";

const ButtonNotificationsWrapper = (props) => {
  return (
    <div className={"button__notifications__wrapper"}>
      <div
        className={
          props.activeButton === 2
            ? "button__notifications__active"
            : "button__notifications"
        }
        onClick={() => {
          props.activeButton === 2
            ? props.toggleActiveButton()
            : props.toggleActiveButton(2);
          props.toggleHelpNotifications(false);
        }}
        onMouseEnter={() => {
          props.toggleHelpNotifications(true);
        }}
        onMouseLeave={() => {
          props.toggleHelpNotifications(false);
        }}
      >
        <NotificationsActiveIcon />
      </div>
    </div>
  );
};

export default ButtonNotificationsWrapper;

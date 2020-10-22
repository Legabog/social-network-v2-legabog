import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./ButtonNotificationsWrapper.css";

export const ButtonNotificationsWrapper = (props) => {
  return (
    <div className={"button-notifications__wrapper"}>
      <div
        className={
          props.activeButton === 2
            ? "button-notifications_active"
            : "button-notifications"
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


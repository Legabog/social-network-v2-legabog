import React from "react";
import "./ButtonNotificationsHelp.css";

const ButtonNotificationsHelp = (props) => {
  return (
    <div
      className="header__option__notifications__help"
      style={{
        opacity: props.helpNotificationsOpacity,
        visibility: props.helpNotificationsVisibility,
      }}
    >
      <span>Notifications</span>
    </div>
  );
};

export default ButtonNotificationsHelp;

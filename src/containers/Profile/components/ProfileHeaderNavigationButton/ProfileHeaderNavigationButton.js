import React from "react";
import "./ProfileHeaderNavigationButton.css";

export const ProfileHeaderNavigationButton = (props) => {
  return (
    <div className={"profile__header__navigation__button"}>
      {props.icon ? <props.icon /> : null}
      {props.title ? <span>{props.title}</span> : null}
    </div>
  );
};


import React from "react";
import "./ProfileHeaderNavigationItemSpecial.css";

export const ProfileHeaderNavigationItemSpecial = (props) => {
  return (
    <div className={"profile__header__navigation__special__wrapper"}>
      <div className={"profile__header__navigation__special__item"}>
        <span>{props.title}</span>
        <div className={"profile__header__navigation__special__itemIcon"}>
          {props.icon && <props.icon />}
        </div>
      </div>
    </div>
  );
};


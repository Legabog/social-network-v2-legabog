import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileHeaderNavigationItem.css";

export const ProfileHeaderNavigationItem = (props) => {
  return (
    <>
      { props.NavLinks.includes(props.location.pathname) ? (
        <div className={"profile__header__navigation__wrapper__active"}>
          <NavLink to={props.NavLinks[0]}>
            <div className={"profile__header__navigation__item__active"}>
              <span>{props.title}</span>
              <div className={"profile__header__navigation__active"}>
                {props.icon && <props.icon />}
              </div>
            </div>
          </NavLink>
          <div className={"profile__header__navigation__activeBorder"}></div>
        </div>
      ) : (
        <div className={"profile__header__navigation__wrapper"}>
          <NavLink to={props.NavLinks[0]}>
            <div className={"profile__header__navigation__item"}>
              <span>{props.title}</span>
              <div className={"profile__header__navigation__itemIcon"}>
                {props.icon && <props.icon />}
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </>
  );
};


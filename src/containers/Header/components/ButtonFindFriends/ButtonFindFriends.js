import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonFindFriends.css";

export const ButtonFindFriends = (props) => {
  return (
    <div
      className={
        props.location.pathname === "/friends"
          ? "button-find-friends__wrapper_active"
          : "button-find-friends__wrapper"
      }
    >
      <NavLink to={"/friends"}>
        <div
          className={
            props.location.pathname === "/friends"
              ? "button-find-friends_active"
              : "button-find-friends"
          }
        >
          <span>Find Friends</span>
        </div>
      </NavLink>
    </div>
  );
};


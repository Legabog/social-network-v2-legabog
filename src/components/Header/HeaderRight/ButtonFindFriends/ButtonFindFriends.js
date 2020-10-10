import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./ButtonFindFriends.css";

const ButtonFindFriends = (props) => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/friends"
          ? "button-find-friends__wrapper_active"
          : "button-find-friends__wrapper"
      }
    >
      <NavLink to={"/friends"}>
        <div
          className={
            location.pathname === "/friends"
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

export default ButtonFindFriends;

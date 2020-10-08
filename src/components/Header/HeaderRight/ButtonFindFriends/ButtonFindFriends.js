import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./ButtonFindFriends.css";

const ButtonFindFriends = (props) => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/friends"
          ? "button__find__friends__wrapper__active"
          : "button__find__friends__wrapper"
      }
    >
      <NavLink to={"/friends"}>
        <div className={
        location.pathname === "/friends"
          ? "button__find__friends__active"
          : "button__find__friends"
      }>
          <span>Find Friends</span>
        </div>
      </NavLink>
    </div>
  );
};

export default ButtonFindFriends;

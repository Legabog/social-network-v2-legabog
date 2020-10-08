import React from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./HeaderNavigationBarFriends.css";

const HeaderNavigationBarFriends = (props) => {
  return (
    <div
      className={
        props.activeLink === "/friends"
          ? "header__option__friends__active"
          : "header__option__friends"
      }
      onClick={() => {
        props.toggleActiveLink("/friends");
        props.toggleHelpFriends(false);
      }}
      onMouseEnter={() => {
        props.toggleHelpFriends(true);
      }}
      onMouseLeave={() => {
        props.toggleHelpFriends(false);
      }}
    >
      <div
        className={
          props.activeLink === "/friends"
            ? "header__option__friends__wrapper__active"
            : "header__option__friends__wrapper"
        }
      >
        <SupervisorAccountIcon fontSize="large" />
      </div>
    </div>
  );
};

export default HeaderNavigationBarFriends;

import React from "react";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import "./HeaderNavigationBarGroups.css";

const HeaderNavigationBarGroups = (props) => {
  return (
    <div
      className={
        props.activeLink === "/groups"
          ? "header__option__groups__active"
          : "header__option__groups"
      }
      onClick={() => {
        props.toggleActiveLink("/groups");
        props.toggleHelpGroups(false);
      }}
      onMouseEnter={() => {
        props.toggleHelpGroups(true);
      }}
      onMouseLeave={() => {
        props.toggleHelpGroups(false);
      }}
    >
      <div
        className={
          props.activeLink === "/groups"
            ? "header__option__groups__wrapper__active"
            : "header__option__groups__wrapper"
        }
      >
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default HeaderNavigationBarGroups;

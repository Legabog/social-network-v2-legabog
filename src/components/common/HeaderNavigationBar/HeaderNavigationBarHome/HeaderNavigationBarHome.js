import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import "./HeaderNavigationBarHome.css";

const HeaderNavigationBarHome = (props) => {
  return (
    <div
      className={
        props.activeLink === "/"
          ? "header__option__home__active"
          : "header__option__home"
      }
      onClick={() => {
        props.toggleActiveLink("/");
        props.toggleHelpHome(false)
      }}
      onMouseEnter={() => {
        props.toggleHelpHome(true)
      }}
      onMouseLeave={() => {
        props.toggleHelpHome(false)
      }}
    >
      <div
        className={
          props.activeLink === "/"
            ? "header__option__home__wrapper__active"
            : "header__option__home__wrapper"
        }
      >
        {props.activeLink === "/" ? (
          <HomeIcon fontSize="large" />
        ) : (
          <HomeOutlinedIcon fontSize="large" />
        )}
      </div>
    </div>
  );
};

export default HeaderNavigationBarHome;

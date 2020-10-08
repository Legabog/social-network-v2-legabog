import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";
import "./HeaderLogo.css";

const HeaderLogo = (props) => {
  return (
    <div className={props.activeInput ? "headerLogo__active" : "headerLogo"}>
      {props.activeInput ? (
        <IconButton
          style={{ width: "30px", height: "30px" }}
          onClick={props.toggleActiveInput}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <div className="header__logo">
          <NavLink to={"/"}>
            <GitHubIcon />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HeaderLogo;

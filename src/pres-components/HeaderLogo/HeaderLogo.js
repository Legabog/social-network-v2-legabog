import React from "react";
import "./HeaderLogo.css";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";

export const HeaderLogo = (props) => {
  return (
    <div className={props.activeInput ? "header__logo_active" : "header__logo"}>
      {props.activeInput ? (
        <IconButton onClick={props.toggleActiveInput}>
          <ArrowBackIcon />
        </IconButton>
      ) : (
        <NavLink to={"/"}>
          <GitHubIcon />
        </NavLink>
      )}
    </div>
  );
};


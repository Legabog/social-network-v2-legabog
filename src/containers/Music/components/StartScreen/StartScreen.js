import React from "react";
import { NavLink } from "react-router-dom";
import "./StartScreen.css";

import AppleIcon from "@material-ui/icons/Apple";

export const StartScreen = (props) => {
  return (
    <>
    <NavLink to="/music-list" style={{ textDecoration: "none" }}>
      <div className={"music-start-screen__wrapper"}>
        <div className={"music-start-screen__description"}>
          <AppleIcon />
          <h1>MUSIC-PLAYER</h1>
          <p>click to enter</p>
        </div>
      </div>
    </NavLink>
    </>
  );
};


import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import "./StartScreen.css";
import { NavLink } from "react-router-dom";

const StartScreen = (props) => {
  return (
    <NavLink to="/music-list" style={{ textDecoration: "none" }}>
      <div className={"music__startScreen__wrapper"}>
        <div className={"music__startScreen__description"}>
          <AppleIcon />
          <h1>MUSIC-PLAYER</h1>
          <p>click to enter</p>
        </div>
      </div>
    </NavLink>
  );
};

export default StartScreen;

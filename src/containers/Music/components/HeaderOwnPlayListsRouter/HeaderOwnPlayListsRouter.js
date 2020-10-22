import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HeaderOwnPlayListsRouter.css"

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderOwnPlayListsRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"headerOwnPlayListsRouter"}>
      <NavLink
        to="/music-list/playlists/"
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <div className={"headerOwnPlayListsRouter__buttonBack"}>
        {hover ? (
            <ArrowBackIosIcon style={{ color: "#F62A54" }} />
          ) : (
            <ArrowBackIosIcon style={{ color: "#1877F2" }} />
          )}
          <h3>Playlists</h3>
        </div>
      </NavLink>
    </div>
  );
};


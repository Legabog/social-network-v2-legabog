import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HeaderArtists.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderArtists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"artists-header"}>
      <div className={"artists-header__button-back"}>
        <NavLink
          to="/music-list"
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          {hover ? (
            <ArrowBackIosIcon style={{ color: "#F62A54" }} />
          ) : (
            <ArrowBackIosIcon style={{ color: "#1877F2" }} />
          )}

          <h3>Library</h3>
        </NavLink>
      </div>
      <h1>Artists</h1>
    </div>
  );
};


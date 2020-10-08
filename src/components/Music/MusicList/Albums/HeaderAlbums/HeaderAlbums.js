import React from "react";
import "./HeaderAlbums.css"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderAlbums = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"headerAlbums"}>
      <div className={"headerAlbums__buttonBack"}>
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
      <h1>Albums</h1>
      <hr />
    </div>
  );
};

export default HeaderAlbums;

import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HeaderArtistItemRouter.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderArtistItemRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"artist-item-router__header"}>
      <div className={"artist-item-router__button-back"}>
        <NavLink
          to="/music-list/artists"
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
          <h3>Artists</h3>
        </NavLink>
      </div>
      <h1>{props.nameArtist}</h1>
    </div>
  );
};


import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ItemArtists.css";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const ItemArtists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      <NavLink to={`/music-list/artists/${props.nameArtist}`}>
        <div
          className={"artists-body__item"}
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          <h2>{props.nameArtist}</h2>
          {hover ? (
            <ArrowForwardIosIcon style={{ color: "#F62A54" }} />
          ) : (
            <ArrowForwardIosIcon style={{ color: "#1877F2" }} />
          )}
        </div>
      </NavLink>
    </>
  );
};


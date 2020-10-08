import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import "./ItemArtists.css";
import { useState } from "react";

const ItemArtists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div>
      <NavLink to={`/music-list/artists/${props.nameArtist}`}>
        <div
          className={"itemArtists"}
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
    </div>
  );
};

export default ItemArtists;

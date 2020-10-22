import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./HeaderMusicPlayer.css"

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderMusicPlayer = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"music-player-header"}>
      <div
        className={"music-player-header__button-back"}
        onClick={() => {
          props.toggleSwitcher(1);
        }}
      >
        <NavLink
          to={
            props.switcher === 1
              ? `/music-list/artists/${props.nameArtist}`
              : props.switcher === 2
              ? "/music-list/albums"
              : "/music-list/"
          }
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
          <h3>
            {props.switcher === 1
              ? props.nameArtist
              : props.switcher === 2
              ? "Albums"
              : "Library"}
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

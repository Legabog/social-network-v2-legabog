import React from "react";
import "./HeaderPlayLists.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderPlayLists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      {props.playListSwitcher ? (
        <div className={"headerPlayLists"}>
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onClick={() => props.switchStateOfPlayLists(false)}
          >
            <div className={"headerPlayLists__buttonBack"}>
              {hover ? (
                <ArrowBackIosIcon style={{ color: "#F62A54" }} />
              ) : (
                <ArrowBackIosIcon style={{ color: "#1877F2" }} />
              )}
              <h3>{props.tempTrack.albumTitle}</h3>
            </div>
          </NavLink>
          <h1>Playlists</h1>
        </div>
      ) : (
        <div
          className={"headerPlayLists"}
          onClick={() => props.switchStateOfPlayLists(false)}
        >
          <NavLink
            to="/music-list"
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
          >
            <div className={"headerPlayLists__buttonBack"}>
              {hover ? (
                <ArrowBackIosIcon style={{ color: "#F62A54" }} />
              ) : (
                <ArrowBackIosIcon style={{ color: "#1877F2" }} />
              )}
              <h3>Library</h3>
            </div>
          </NavLink>
          <h1>Playlists</h1>
        </div>
      )}
    </>
  );
};

export default HeaderPlayLists;

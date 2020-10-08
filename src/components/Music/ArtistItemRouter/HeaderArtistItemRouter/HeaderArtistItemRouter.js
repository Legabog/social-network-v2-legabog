import React from "react";
import "./HeaderArtistItemRouter.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderArtistItemRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"headerArtistItemRouter"}>
      <div className={"headerArtistItemRouter__buttonBack"}>
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

export default HeaderArtistItemRouter;

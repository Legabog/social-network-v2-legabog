import React from "react";
import { NavLink } from "react-router-dom";
import "./ArtistItem.css"

import MusicDefault from "assets/apple theme/music.jpg";

export const ArtistItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div className={"artist-item-router__item"}>
        <img src={props.img || MusicDefault} alt="description" />
        <div className={"artist-item-router__description"}>
          <h4 className={"artist-item-router__album"}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={"artist-item-router__artist"}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};


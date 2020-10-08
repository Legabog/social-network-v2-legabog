import React from "react";
import "./ArtistItem.css"
import { NavLink } from "react-router-dom";

import MusicDefault from "../../../../../utils/assets/apple theme/music.jpg";

const ArtistItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div className={"artistRoute__item"}>
        <img src={props.img || MusicDefault} alt="description" />
        <div className={"artistRoute__description"}>
          <h4 className={"artistRoute__album"}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={"artistRoute__artist"}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default ArtistItem;

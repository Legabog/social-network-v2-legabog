import React from "react";
import "./AlbumItem.css";
import { NavLink } from "react-router-dom";

const AlbumItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div
        className={"bodyAlbumsList__item"}
        onClick={() => {
          props.toggleSwitcher(2);
        }}
      >
        <img src={props.img} alt="description" />
        <div className={"bodyAlbumsList__discription"}>
          <h4 className={"bodyAlbumsList__album"}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={"bodyAlbumsList__artist"}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default AlbumItem;

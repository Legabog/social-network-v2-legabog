import React from "react";
import { NavLink } from "react-router-dom";
import "./AlbumItem.css";

export const AlbumItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div
        className={"albums-body__item"}
        onClick={() => {
          props.toggleSwitcher(2);
        }}
      >
        <img src={props.img} alt="description" />
        <div className={"albums-body__discription"}>
          <h4 className={"albums-body__album"}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={"albums-body__artist"}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};
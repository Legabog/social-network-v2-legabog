import React from "react";
import "./BodyAlbums.css"

import AlbumItem from "../AlbumItem/AlbumItem.js";
import AlbumsPreloader from "./AlbumsPreloader/AlbumsPreloader";

const BodyAlbums = (props) => {
  return (
    <div className={"bodyAlbumsList"}>
      {props.Fetching ? <AlbumsPreloader /> : null}
      {props.musicAlbums.map((e) => {
        return (
          <AlbumItem
            img={e.albumcoverUrl}
            title={e.title}
            author={e.author}
            toggleSwitcher={props.toggleSwitcher}
            key={e._id}
          />
        );
      })}
    </div>
  );
};

export default BodyAlbums;

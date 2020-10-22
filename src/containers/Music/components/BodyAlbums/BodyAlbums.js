import React from "react";
import "./BodyAlbums.css"

import { AlbumItem } from "../AlbumItem";
import { AlbumsPreloader } from "../AlbumsPreloader";

export const BodyAlbums = (props) => {
  return (
    <div className={"albums-body"}>
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


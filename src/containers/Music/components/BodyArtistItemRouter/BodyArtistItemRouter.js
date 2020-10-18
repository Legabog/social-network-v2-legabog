import React from "react";
import "./BodyArtistItemRouter.css"

import { ArtistItem } from "../ArtistItem";

export const BodyArtistItemRouter = (props) => {
  return (
    <div className={"artist-item-router__body"}>
      {props.musicAlbums.map((e) => {
        if (e.author === props.nameArtist) {
          return (
            <ArtistItem
              key={Math.random()}
              author={e.author}
              img={e.albumcoverUrl}
              title={e.title}
            />
          );
        }
        return null
      })}
    </div>
  );
};


import React from "react";
import "./BodyArtistItemRouter.css"

import ArtistItem from "./ArtistItem/ArtistItem.js";

const BodyArtistItemRouter = (props) => {
  return (
    <div className={"bodyArtistItemRouter"}>
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

export default BodyArtistItemRouter;

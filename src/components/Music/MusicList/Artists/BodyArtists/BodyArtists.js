import React from "react";
import "./BodyArtists.css";

import ItemArtists from "./ItemArtists/ItemArtists.js";
import ArtistsPreloader from "./ArtistsPreloader/ArtistsPreloader";

const BodyArtists = (props) => {
  let resultArray = [];

  props.musicAlbums.map((e) => {
    if (!resultArray.includes(e.author)) {
      resultArray.push(e.author);
    }
    return resultArray;
  });

  return (
    <div className={"artists-body"}>
      {props.Fetching ? <ArtistsPreloader /> : null}
      {resultArray.map((e) => (
        <ItemArtists
          key={Math.random()}
          nameArtist={e}
          tracks={props.musicAlbums.map((e) => e.tracks)}
        />
      ))}
    </div>
  );
};

export default BodyArtists;

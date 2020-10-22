import React from "react";
import "./BodyArtists.css";

import _ from "lodash/core";

import { ItemArtists } from "../ItemArtists";
import { ArtistsPreloader } from "../ArtistsPreloader";

export const BodyArtists = (props) => {
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
          key={_.uniqueId(e)}
          nameArtist={e}
          tracks={props.musicAlbums.map((e) => e.tracks)}
        />
      ))}
    </div>
  );
};

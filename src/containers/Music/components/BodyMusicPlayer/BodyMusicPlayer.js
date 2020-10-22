import React from "react";
import "./BodyMusicPlayer.css";

import _ from "lodash/core";

import DefaultMusic from "assets/apple theme/music.jpg";

import { BodyMusicPlayerTrackItem } from "../BodyMusicPlayerTrackItem";

export const BodyMusicPlayer = (props) => {
  return (
    <div className={"music-player-body"}>
      <div className={"music-player-body__item-image"}>
        <img src={props.img || DefaultMusic} alt="description" />
      </div>
      <div className={"music-player-body__description"}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>

        {props.musicAlbums.map((e) => {
          if (e.title === props.title && e.author === props.author) {
            return (
              <BodyMusicPlayerTrackItem
                key={_.uniqueId(e)}
                tracks={e.tracks}
                {...props}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

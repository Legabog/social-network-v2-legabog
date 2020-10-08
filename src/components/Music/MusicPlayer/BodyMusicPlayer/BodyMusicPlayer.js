import React from "react";
import "./BodyMusicPlayer.css"

import DefaultMusic from "../../../../utils/assets/apple theme/music.jpg";

import TracksItem from "./TrackItem/TrackItem.js";

const BodyMusicPlayer = (props) => {
  return (
    <div className={"bodyMusicPlayer"}>
      <div className={"bodyMusicPlayer__trackImage"}>
        <img
          src={props.img || DefaultMusic}
          alt="description"
        />
      </div>
      <div className={"bodyMusicPlayer__trackArtist"}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>

        {props.musicAlbums.map((e) => {
          if (e.title === props.title && e.author === props.author) {
            return (
              <TracksItem
                key={Math.random()}
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

export default BodyMusicPlayer;

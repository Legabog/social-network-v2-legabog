import React from "react";
import "./OpenMusicPlayerPanelDescription.css";
import musicCover from "assets/apple theme/music.jpg";

export const OpenMusicPlayerPanelDescription = (props) => {
  return (
    <>
      {props.isPlaying ? (
        <div className={"music-player-panel_open__avatar_playing"}>
          <img
            src={
              props.activeTrack !== null
                ? props.activeTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      ) : (
        <div className={"music-player-panel_open__avatar"}>
          <img
            src={
              props.activeTrack !== null
                ? props.activeTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      )}
      <div className={"music-player-panel_open__description"}>
        <div className={"music-player-panel_open__song-name"}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.title
              : "Not Playing"}
          </h3>
        </div>
        <div className={"music-player-panel_open__author-name-album-name"}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.author + " - " + props.activeTrack.album
              : ""}
          </h3>
        </div>
      </div>
    </>
  );
};


import React from "react";
import musicCover from "assets/apple theme/music.jpg";
import "../MusicPlayerPanel.css"

export const ClosePlayerPanelDescription = (props) => {
  return (
    <React.Fragment>
      {props.isPlaying ? (
        <div className={"MusicPlayerPanel__open__avatarIsPlaying"}>
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
        <div className={"MusicPlayerPanel__open__avatar"}>
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
      <div className={"MusicPlayerPanel__open__description"}>
        <div className={"MusicPlayerPanel__open__songName"}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.title
              : "Not Playing"}
          </h3>
        </div>
        <div className={"MusicPlayerPanel__open__authorNameAlbumName"}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.author + " - " + props.activeTrack.album
              : ""}
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

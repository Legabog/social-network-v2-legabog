import React from "react";
import musicCover from "assets/apple theme/music.jpg";

export const CloseMusicPlayerPanelDescription = (props) => {
  return (
    <>
      <img
        src={
          props.activeTrack !== null ? props.activeTrack.albumCover : musicCover
        }
        alt={musicCover}
        onClick={props.toggleMusicPanel}
      />
      <h3 onClick={props.toggleMusicPanel}>
        {props.activeTrack !== null ? props.activeTrack.title : "Not Playing"}
      </h3>
    </>
  );
};


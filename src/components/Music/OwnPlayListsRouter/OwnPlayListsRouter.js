import React from "react";
import "./OwnPlayListsRouter.css"

import HeaderOwnPlayListsRouter from "./HeaderOwnPlayListsRouter/HeaderOwnPlayListsRouter.js";
import BodyOwnPlayListsRouter from "./BodyOwnPlayListsRouter/BodyOwnPlayListsRouter.js";


const OwnPlayListsRouter = (props) => {

  return (
    <div className={"ownPlayListsRouter"}>
      <HeaderOwnPlayListsRouter />
      <BodyOwnPlayListsRouter
        id={props.id}
        img={props.img}
        title={props.title}
        description={props.description}
        tracks={props.tracks}
        deleteOwnPlayList={props.deleteOwnPlayList}
        deleteTrackFromPlayList={props.deleteTrackFromPlayList}
        deleteTrackFetch={props.deleteTrackFetch}
        playPlayer={props.playPlayer}
        setMusicForPlayer={props.setMusicForPlayer}
        setIndexOfTrack={props.setIndexOfTrack}
        musicPlayerPlayList={props.musicPlayerPlayList}
        indexOfPlayingTrack={props.indexOfPlayingTrack}
        isPlaying={props.isPlaying}
        activeTrack={props.activeTrack}
        disablerButtonPlay={props.disablerButtonPlay}
      />
    </div>
  );
  
};

export default OwnPlayListsRouter;

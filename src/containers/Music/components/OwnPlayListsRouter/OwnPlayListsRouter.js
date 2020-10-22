import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./OwnPlayListsRouter.css";

import {
  deleteOwnPlayList,
  deleteTrackFromPlayList,
} from "redux/musicalplaylists-reducer";
import {
  setMusicForPlayer,
  playPlayer,
  setIndexOfTrack,
} from "redux/musicplayer-reducer";

import { HeaderOwnPlayListsRouter } from "../HeaderOwnPlayListsRouter";
import { BodyOwnPlayListsRouter } from "../BodyOwnPlayListsRouter";

const OwnPlayListsRouter_ = (props) => {
  return (
    <div className={"ownPlayListsRouter"}>
      <HeaderOwnPlayListsRouter />
      <BodyOwnPlayListsRouter
        {...props}
        id={props.id}
        img={props.img}
        title={props.title}
        description={props.description}
        tracks={props.tracks}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  deleteTrackFetch: state.musicPlayListReducer.deleteTrackFetch,
  musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
  indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
  isPlaying: state.musicPlayerReducer.isPlaying,
  activeTrack: state.musicPlayerReducer.activeTrack,
  disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
});

export const OwnPlayListsRouter = compose(
  withRouter,
  connect(mapStateToProps, {
    deleteOwnPlayList,
    deleteTrackFromPlayList,
    playPlayer,
    setMusicForPlayer,
    setIndexOfTrack,
  })
)(OwnPlayListsRouter_);

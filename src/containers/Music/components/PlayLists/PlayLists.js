import React from "react";
import "./PlayLists.css"

import { HeaderPlayLists } from "../HeaderPlayLists";
import { BodyPlayLists } from "../BodyPlayLists";

import { connect } from "react-redux";
import { useEffect } from "react";

import {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
} from "../../../../redux/musicalplaylists-reducer";


const PlayLists_ = (props) => {
  getMyOwnPlayLists();

  useEffect(() => {}, [props.ownPlayLists]);

  return (
    <div className={"playlists"}>
      <HeaderPlayLists
        {...props}
      />
      <BodyPlayLists {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    tempTrack: state.musicPlayListReducer.tempTrack,
    playListSwitcher: state.musicPlayListReducer.playListSwitcher,
    fetch: state.musicPlayListReducer.fetch
  };
};

export const PlayLists = connect(mapStateToProps, {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
})(PlayLists_);

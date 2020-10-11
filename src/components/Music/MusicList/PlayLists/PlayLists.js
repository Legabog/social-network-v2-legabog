import React from "react";
import "./PlayLists.css"

import HeaderPlayLists from "./HeaderPlayLists/HeaderPlayLists.js";
import BodyPlayLists from "./BodyPlayLists/BodyPlayLists.js";

import { connect } from "react-redux";
import { useEffect } from "react";

import {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
} from "../../../../redux/musicalplaylists-reducer";


const PlayLists = (props) => {
  getMyOwnPlayLists();

  useEffect(() => {}, [props.ownPlayLists]);

  return (
    <div className={"playlists"}>
      <HeaderPlayLists
        switchStateOfPlayLists={props.switchStateOfPlayLists}
        playListSwitcher={props.playListSwitcher}
        tempTrack={props.tempTrack}
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

export default connect(mapStateToProps, {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
})(PlayLists);

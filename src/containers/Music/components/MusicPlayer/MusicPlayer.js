import React from "react";
import "./MusicPlayer.css"


import { HeaderMusicPlayer } from "../HeaderMusicPlayer";
import { BodyMusicPlayer } from "../BodyMusicPlayer";


import { connect } from "react-redux";
import {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
} from "redux/musicalbums-reducer";

import {
  switchStateOfPlayLists,
  addTrackToPlayList,
} from "redux/musicalplaylists-reducer";
import {
  setMusicForPlayer,
  playPlayer,
  setIndexOfTrack,
} from "redux/musicplayer-reducer";

const MusicPlayer_ = (props) => {
  return (
    <div className={"music-player"}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        switcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        {...props}
        author={props.nameArtist}
        title={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
      /> 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
     // muisc player reducer
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    disabledTitles: state.musicAlbumsReducer.disabledTitles,
    disabledAuthors: state.musicAlbumsReducer.disabledAuthors,
    isPlaying: state.musicPlayerReducer.isPlaying,
    musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
    indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
    activeTrack: state.musicPlayerReducer.activeTrack,
    disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
  };
};

export const MusicPlayer = connect(mapStateToProps, {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
  switchStateOfPlayLists,
  addTrackToPlayList,
  playPlayer,
  setMusicForPlayer,
  setIndexOfTrack,
})(MusicPlayer_);

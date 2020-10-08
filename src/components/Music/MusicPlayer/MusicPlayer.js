import React from "react";
import "./MusicPlayer.css"


import HeaderMusicPlayer from "./HeaderMusicPlayer/HeaderMusicPlayer.js";
import BodyMusicPlayer from "./BodyMusicPlayer/BodyMusicPlayer.js";


import { connect } from "react-redux";
import {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
} from "../../../redux/musicalbums-reducer";

const MusicPlayer = (props) => {
  return (
    <div className={"musicPlayer"}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        switcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        author={props.nameArtist}
        title={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
        pushAlbumToRecentlyPlayed={props.pushAlbumToRecentlyPlayed}
        recentlyPlayed={props.recentlyPlayed}
        pushToRecentlyPlayed={props.pushToRecentlyPlayed}
        disabledTitles={props.disabledTitles}
        disabledAuthors={props.disabledAuthors}
        pushTitleToDisabledArray={props.pushTitleToDisabledArray}
        pushAuthorToDisabledArray={props.pushAuthorToDisabledArray}
        switchStateOfPlayLists={props.switchStateOfPlayLists}
        addTrackToPlayList={props.addTrackToPlayList}
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

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    disabledTitles: state.musicAlbumsReducer.disabledTitles,
    disabledAuthors: state.musicAlbumsReducer.disabledAuthors
  };
};

export default connect(mapStateToProps, {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
})(MusicPlayer);

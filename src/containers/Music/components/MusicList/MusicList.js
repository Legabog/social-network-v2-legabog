import React from "react";
import "./MusicList.css";

import { HeaderMusicList } from "../HeaderMusicList";
import { BodyMusicList } from "../BodyMusicList";
import { FooterMusicList } from "../FooterMusicList";

import { connect } from "react-redux";
import {
  toggleSwitcher,
} from "../../../../redux/musicalbums-reducer";
import {switchStateOfPlayLists} from "../../../../redux/musicalplaylists-reducer"


const MusicList_ = (props) => {
    return (
      <div className={"music-list"}>
        <HeaderMusicList />
        <BodyMusicList switchStateOfPlayLists={props.switchStateOfPlayLists}/>
        <FooterMusicList
          {...props}
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
  };
};

export const MusicList = connect(mapStateToProps, {
  toggleSwitcher,
  switchStateOfPlayLists
})(MusicList_);

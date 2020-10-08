import React from "react";
import "./MusicList.css";

import HeaderMusicList from "./HeaderMusicList/HeaderMusicList.js";
import BodyMusicList from "./BodyMusicList/BodyMusicList.js";
import FooterMusicList from "./FooterMusicList/FooterMusicList.js";

import { connect } from "react-redux";
import {
  toggleSwitcher,
} from "../../../redux/musicalbums-reducer";
import {switchStateOfPlayLists} from "../../../redux/musicalplaylists-reducer"


const MusicList = (props) => {
    return (
      <div className={"musicList"}>
        <HeaderMusicList />
        <BodyMusicList switchStateOfPlayLists={props.switchStateOfPlayLists}/>
        <FooterMusicList
          recentlyPlayed={props.recentlyPlayed}
          toggleSwitcher={props.toggleSwitcher}
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
  };
};

export default connect(mapStateToProps, {
  toggleSwitcher,
  switchStateOfPlayLists
})(MusicList);

import React from "react";
import "./BodyPlayLists.css";

import PhotoAdd from "../../../../../utils/assets/apple theme/playlist_add.jpg";

import { NavLink } from "react-router-dom";
import PlayList from "../PlayList/PlayList.js";
import PlaylistPreloader from "./PlaylistsPreloader/PlaylistsPreloader";

const BodyPlayLists = (props) => {
  return (
    <div className={"bodyPlayLists"}>
      {props.playListSwitcher ? null : (
        <NavLink to="/music-list/playlists/create">
          <div className={"bodyPlayLists__createPlayList"}>
            <img src={PhotoAdd} alt="descripion" />
            <h3>Create new playlist</h3>
          </div>
        </NavLink>
      )}
      {props.fetch ? (
        <PlaylistPreloader />
      ) : (
        props.ownPlayLists.map((e) => (
          <PlayList
            key={Math.random()}
            img={e.playlistcoverUrl}
            name={e.title}
            description={e.description}
            id={e._id}
            tracks={e.tracks}
            tempTrack={props.tempTrack}
            updatePlaylist={props.updatePlaylist}
            playListSwitcher={props.playListSwitcher}
            addTrackToPlayList={props.addTrackToPlayList}
            switchStateOfPlayLists={props.switchStateOfPlayLists}
          />
        ))
      )}
      <div className={"lastBlock"}></div>
    </div>
  );
};

export default BodyPlayLists;

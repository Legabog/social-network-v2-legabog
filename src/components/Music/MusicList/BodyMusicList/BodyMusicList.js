import React from "react";

import BodyMusicListItem from "./BodyMusicListItem/BodyMusicListItem.js";

const BodyMusicList = (props) => {
  return (
    <div className={"music-list-body"}>
      <BodyMusicListItem title={"Artists"} link={"artists"} />
      <BodyMusicListItem title={"Albums"} link={"albums"} />
      <div
        onClick={() => {
          props.switchStateOfPlayLists(false);
        }}
      >
        <BodyMusicListItem title={"Playlists"} link={"playlists"} />
      </div>
    </div>
  );
};

export default BodyMusicList;

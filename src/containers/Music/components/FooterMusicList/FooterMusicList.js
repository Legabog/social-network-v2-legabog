import React from "react";
import "./FooterMusicList.css";

import _ from "lodash/core";

import { FooterItem } from "../FooterItem";

export const FooterMusicList = React.memo((props) => {
  return (
    <div className={"music-list-footer"}>
      <h3>Recently played: </h3>
      {props.recentlyPlayed.map((e) => (
        <FooterItem
          key={_.uniqueId(e)}
          img={e.img}
          title={e.title}
          author={e.author}
          toggleSwitcher={props.toggleSwitcher}
        />
      ))}
    </div>
  );
});

import React from "react";
import "./FooterMusicList.css";

import FooterItem from "./FooterItem/FooterItem.js";

const FooterMusicList = React.memo((props) => {
  return (
    <div className={"footerMusicList"}>
      <h3>Recently played: </h3>
        {props.recentlyPlayed.map((e) => (
          <FooterItem
            key={Math.random()}
            img={e.img}
            title={e.title}
            author={e.author}
            toggleSwitcher={props.toggleSwitcher}
          />
        ))}
    </div>
  );
});

export default FooterMusicList;

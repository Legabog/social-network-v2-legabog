import React from "react";
import "./TrackItem.css";

import { ActionSwitcher } from "./ActionSwitcher/ActionSwitcher.js";

const TracksItem = (props) => {
  return (
    <div className={"bodyMusicPlayer__item__wrapper"}>
      {props.tracks.map((e) => {
        return (
          <div key={e._id} className={"bodyMusicPlayer__item"}>
            <div className={"bodyMusicPlayer__description"}>
              <h2
                onClick={() => {
                  if (
                    props.disabledAuthors.includes(props.author) &&
                    props.disabledTitles.includes(props.title)
                  ) {
                  } else {
                    props.pushToRecentlyPlayed(
                      props.img,
                      props.title,
                      props.author
                    );
                  }

                  //-------------------Set music for player
                  //-------------------- Set index of active(playing) track
                  let SearchElement = e.title;
                  let index = props.tracks.findIndex(
                    (e) => e.title === SearchElement
                  );

                  if (!props.disablerButtonPlay) {
                    props.playPlayer(
                      {
                        albumCover: props.img,
                        album: props.title,
                        author: props.author,
                        title: e.title,
                        trackUrl: e.trackUrl,
                      },
                      {
                        author: props.author,
                        title: props.title,
                        albumCover: props.img,
                        tracks: props.tracks,
                      },
                      index
                    );
                  }
                }}
              >
                {e.title}
              </h2>
              <ActionSwitcher
                switchStateOfPlayLists={props.switchStateOfPlayLists}
                addTrackToPlayList={props.addTrackToPlayList}
                title={e.title}
                albumTitle={props.title}
                author={props.author}
                albumCover={props.img}
                trackUrl={e.trackUrl}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TracksItem;

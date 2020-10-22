import React from "react";
import "./BodyMusicPlayerTrackItem.css";

import { BodyMusicPlayerActionSwitcher } from "../BodyMusicPlayerActionSwitcher";

export const BodyMusicPlayerTrackItem = (props) => {
  return (
    <div className={"music-player-body__item-wrapper"}>
      {props.tracks.map((e) => {
        return (
          <div key={e._id} className={"music-player-body__item"}>
            <div className={"music-player-body__item-description"}>
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
              <BodyMusicPlayerActionSwitcher
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


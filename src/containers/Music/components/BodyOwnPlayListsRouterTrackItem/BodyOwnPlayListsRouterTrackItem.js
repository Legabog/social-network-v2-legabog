import React from "react";
import "./BodyOwnPlayListsRouterTrackItem.css";

import { BodyOwnPlayListsRouterActionSwitcher } from "../BodyOwnPlayListsRouterActionSwitcher";

export const BodyOwnPlayListsRouterTrackItem = (props) => {
  return (
    <div className={"bodyOwnPlayListsRouter__tracks"}>
      <div className={"bodyOwnPlayListsRouter__item"}>
        <div className={"bodyOwnPlayListsRouter__description"}>
          <div
            className={"bodyOwnPlayListsRouter__titleAndAuthor"}
            onClick={() => {
              let SearchElement = props.title;
              let index = props.tracks.findIndex(
                (e) => e.title === SearchElement
              );

              if (!props.disablerButtonPlay) {
                props.playPlayer(
                  {
                    albumCover: props.albumCover,
                    album: props.albumTitle,
                    author: props.author,
                    title: props.title,
                    trackUrl: props.trackUrl,
                  },
                  {
                    author: props.author,
                    title: props.albumTitle,
                    albumCover: props.albumCover,
                    tracks: props.tracks,
                  },
                  index
                );
              }
            }}
          >
            <h2>{props.title}</h2>
            <p>{props.author}</p>
          </div>
          <BodyOwnPlayListsRouterActionSwitcher
            albumCover={props.albumCover}
            title={props.title}
            author={props.author}
            id={props.id}
            pid={props.pid}
            deleteTrackFromPlayList={props.deleteTrackFromPlayList}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};


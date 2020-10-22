import React from "react";
import { audioRef } from "containers/MusicPlayerPanel/AudioContext";

export const AudioElement = (props) => {
  return (
    <>
      <audio
        volume={props.volume}
        controls
        id="audio"
        ref={audioRef}
        onEnded={() => {
          switch (props.repeatState) {
            case 0:
              if (
                props.indexOfPlayingTrack + 1 <
                props.musicPlayerPlayList.tracks.length
              ) {
                props.nextTrack(
                  {
                    albumCover:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumCover !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumCover
                        : props.musicPlayerPlayList.albumCover,
                    album:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumTitle !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumTitle
                        : props.musicPlayerPlayList.title,
                    author:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].author !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].author
                        : props.musicPlayerPlayList.author,
                    title:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].title,
                    trackUrl:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].trackUrl,
                  },
                  props.indexOfPlayingTrack + 1
                );
              } else {
                props.setActiveTrackAndPlayerPlayListNull();
                audioRef.current.currentTime = 0;
              }
              break;
            case 1:
              if (
                props.indexOfPlayingTrack ===
                props.musicPlayerPlayList.tracks.length - 1
              ) {
                props.nextTrack(
                  {
                    albumCover:
                      props.musicPlayerPlayList.tracks[0].albumCover !==
                      undefined
                        ? props.musicPlayerPlayList.tracks[0].albumCover
                        : props.musicPlayerPlayList.albumCover,
                    album:
                      props.musicPlayerPlayList.tracks[0].albumTitle !==
                      undefined
                        ? props.musicPlayerPlayList.tracks[0].albumTitle
                        : props.musicPlayerPlayList.title,
                    author:
                      props.musicPlayerPlayList.tracks[0].author !== undefined
                        ? props.musicPlayerPlayList.tracks[0].author
                        : props.musicPlayerPlayList.author,
                    title: props.musicPlayerPlayList.tracks[0].title,
                    trackUrl: props.musicPlayerPlayList.tracks[0].trackUrl,
                  },
                  0
                );
              } else {
                props.nextTrack(
                  {
                    albumCover:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumCover !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumCover
                        : props.musicPlayerPlayList.albumCover,
                    album:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumTitle !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumTitle
                        : props.musicPlayerPlayList.title,
                    author:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].author !== undefined
                        ? props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].author
                        : props.musicPlayerPlayList.author,
                    title:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].title,
                    trackUrl:
                      props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].trackUrl,
                  },
                  props.indexOfPlayingTrack + 1
                );
              }
              break;
            case 2:
              audioRef.current.currentTime = 0;
              audioRef.current.play();
              break;
            default:
              break;
          }
        }}
      ></audio>
    </>
  );
};

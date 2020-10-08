import React from "react";

const AudioElement = (props) => {
  let audio = document.getElementById("audio");

  return (
    <React.Fragment>
      <audio
        volume={props.volume}
        controls
        id="audio"
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
                audio.currentTime = 0;
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
              audio.currentTime = 0;
              audio.play();
              break;
            default:
              break;
          }
        }}
      ></audio>
    </React.Fragment>
  );
};

export default AudioElement;

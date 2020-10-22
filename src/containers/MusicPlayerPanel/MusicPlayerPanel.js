import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./MusicPlayerPanel.css";

import {
  setMusicForPlayer,
  toggleIsPlaying,
  playPlayer,
  pausePlayer,
  setIndexOfTrack,
  nextTrack,
  previousTrack,
  shuffleMusic,
  setActiveTrackAndPlayerPlayListNull,
} from "redux/musicplayer-reducer";

import { BackDropMusicPlayerPanel } from "pres-components/BackDropMusicPlayerPanel";
import { AudioElement } from "./components/AudioElement";
import { CloseMusicPlayerPanelDescription } from "./components/CloseMusicPlayerPanelDescription";
import { CloseMusicPlayerPanelControl } from "./components/CloseMusicPlayerPanelControl";
import { OpenMusicPlayerDropDownButton } from "./components/OpenMusicPlayerDropDownButton";
import { OpenMusicPlayerPanelDescription } from "./components/OpenMusicPlayerPanelDescription";
import { OpenMusicPlayerTrackBar } from "./components/OpenMusicPlayerTrackBar";
import { OpenMusicPlayerPanelControl } from "./components/OpenMusicPlayerPanelControl";
import { OpenMusicPlayerVolumeBar } from "./components/OpenMusicPlayerVolumeBar";
import { OpenMusicPlayerShuffleAndRepeatButton } from "./components/OpenMusicPlayerShuffleAndRepeatButton";
import { audioRef } from "containers/MusicPlayerPanel/AudioContext";

const MusicPlayerPanel_ = (props) => {
  const isCurrent = useRef(true);

  const [opened, switchCondition] = useState(false);

  const toggleMusicPanel = () => {
    switchCondition(!opened);
  };

  let [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioTimeHandler = (e) => {
    setAudioCurrentTime((audioRef.current.currentTime = e.target.value));
  };

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (isCurrent.current) {
        setAudioCurrentTime(audioRef.current.currentTime);
      }
    }, 100);
  }, []);

  let [volume, volumeH] = useState(1);

  const volumeHandler = (e) => {
    volumeH((audioRef.current.volume = e.target.value));
  };

  let [repeatState, toggleRepeatState] = useState(0);

  const setRepeatState = () => {
    switch (repeatState) {
      case 0:
        toggleRepeatState(1);
        break;
      case 1:
        toggleRepeatState(2);
        break;
      case 2:
        toggleRepeatState(0);
        break;
      default:
        break;
    }
  };

  let cls = "music-player-panel";

  if (opened) {
    cls += "_open";
  } else {
    cls += "_close";
  }

  return (
    <>
      {!opened ? (
        <div className={cls}>
          <CloseMusicPlayerPanelDescription
            {...props}
            toggleMusicPanel={toggleMusicPanel}
          />

          <CloseMusicPlayerPanelControl {...props} repeatState={repeatState} />
        </div>
      ) : (
        <div className={cls}>
          <OpenMusicPlayerDropDownButton toggleMusicPanel={toggleMusicPanel} />
          <OpenMusicPlayerPanelDescription {...props} />
          <OpenMusicPlayerTrackBar
            {...props}
            audioCurrentTime={audioCurrentTime}
            audioTimeHandler={audioTimeHandler}
          />
          <OpenMusicPlayerPanelControl {...props} repeatState={repeatState} />

          <OpenMusicPlayerVolumeBar
            {...props}
            volume={volume}
            volumeH={volumeH}
            volumeHandler={volumeHandler}
          />

          <OpenMusicPlayerShuffleAndRepeatButton
            {...props}
            setRepeatState={setRepeatState}
            repeatState={repeatState}
          />
        </div>
      )}
      {opened ? <BackDropMusicPlayerPanel onClick={toggleMusicPanel} /> : null}
      <AudioElement {...props} volume={volume} repeatState={repeatState} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isPlaying: state.musicPlayerReducer.isPlaying,
  musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
  indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
  activeTrack: state.musicPlayerReducer.activeTrack,
  disablerButtonNext: state.musicPlayerReducer.disablerButtonNext,
  disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
});

export const MusicPlayerPanel = compose(
  withRouter,
  connect(mapStateToProps, {
    setMusicForPlayer,
    toggleIsPlaying,
    playPlayer,
    pausePlayer,
    setIndexOfTrack,
    nextTrack,
    previousTrack,
    shuffleMusic,
    setActiveTrackAndPlayerPlayListNull,
  })
)(MusicPlayerPanel_);

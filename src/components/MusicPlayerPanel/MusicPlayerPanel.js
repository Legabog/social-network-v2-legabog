import React from "react";
import { useState, useEffect } from "react";
import "./MusicPlayerPanel.css";

import BackDropMusicPlayerPanel from "../common/BackDropMusicPlayerPanel/BackDropMusicPlayerPanel.js";
import AudioElement from "./AudioElement/AudioElement.js";
import CloseMusicPlayerPanelDescription from "./CloseMusicPlayerPanelDescription/CloseMusicPlayerPanelDescription";
import CloseMusicPlayerPanelControl from "./CloseMusicPlayerPanelControl/CloseMusicPlayerPanelControl";
import OpenMusicPlayerDropDownButton from "./OpenMusicPlayerDropDownButton/OpenMusicPlayerDropDownButton";
import OpenMusicPlayerPanelDescription from "./OpenMusicPlayerPanelDescription/OpenMusicPlayerPanelDescription";
import OpenMusicPlayerTrackBar from "./OpenMusicPlayerTrackBar/OpenMusicPlayerTrackBar.js";
import OpenMusicPlayerPanelControl from "./OpenMusicPlayerPanelControl/OpenMusicPlayerPanelControl.js";
import OpenMusicPlayerVolumeBar from "./OpenMusicPlayerVolumeBar/OpenMusicPlayerVolumeBar.js";
import OpenMusicPlayerShuffleAndRepeatButton from "./OpenMusicPlayerShuffleAndRepeatButton/OpenMusicPlayerShuffleAndRepeatButton.js";

const MusicPlayerPanel = (props) => {
  let audio = document.getElementById("audio");

  const [opened, switchCondition] = useState(false);

  const toggleMusicPanel = () => {
    switchCondition(!opened);
  };

  let [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioTimeHandler = (e) => {
    audioCurrentTime = audio.currentTime;
    setAudioCurrentTime((audio.currentTime = e.target.value));
  };

  useEffect(() => {
    let audio = document.getElementById("audio");
    setInterval(() => {
      setAudioCurrentTime(audio.currentTime);
    }, 1);
  }, []);

  let [volume, volumeH] = useState(1);

  const volumeHandler = (e) => {
    volumeH((audio.volume = e.target.value));
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

export default MusicPlayerPanel;

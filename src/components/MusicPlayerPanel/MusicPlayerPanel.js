import React from "react";
import { useState, useEffect } from "react";
import "./MusicPlayerPanel.css";

import BackDropMusicPlayerPanel from "../common/BackDropMusicPlayerPanel/BackDropMusicPlayerPanel.js";
import AudioElement from "./AudioElement/AudioElement.js";
import OpenPlayerPanelDescription from "./OpenPlayerPanelDescription/OpenPlayerPanelDescription.js";
import OpenPlayerPanelControl from "./OpenPlayerPanelControl/OpenPlayerPanelControl.js";
import DropDownButton from "./DropDownButton/DropDownButton.js";
import ClosePlayerPanelDescription from "./ClosePlayerPanelDescription/ClosePlayerPanelDescription.js";
import TrackBar from "./TrackBar/TrackBar.js";
import ClosePlayerPanelControl from "./ClosePlayerPanelControl/ClosePlayerPanelControl.js";
import VolumeBar from "./VolumeBar/VolumeBar.js";
import ShuffleAndRepeatButton from "./ShuffleAndRepeatButton/SuffleAndRepeatButton.js";

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

  let cls = "MusicPlayerPanel";

  if (opened) {
    cls += "__open";
  } else {
    cls += "__close";
  }

  return (
    <React.Fragment>
      {!opened ? (
        <div className={cls}>
          <OpenPlayerPanelDescription
            {...props}
            toggleMusicPanel={toggleMusicPanel}
          />
          <OpenPlayerPanelControl {...props} repeatState={repeatState} />
        </div>
      ) : (
        <div className={cls}>
          <DropDownButton toggleMusicPanel={toggleMusicPanel} />
          <ClosePlayerPanelDescription {...props} />
          <TrackBar
            {...props}
            audioCurrentTime={audioCurrentTime}
            audioTimeHandler={audioTimeHandler}
          />

          <ClosePlayerPanelControl {...props} repeatState={repeatState} />

          <VolumeBar
            {...props}
            volume={volume}
            volumeH={volumeH}
            volumeHandler={volumeHandler}
          />

          <ShuffleAndRepeatButton
            {...props}
            setRepeatState={setRepeatState}
            repeatState={repeatState}
          />
        </div>
      )}
      {opened ? <BackDropMusicPlayerPanel onClick={toggleMusicPanel} /> : null}
      <AudioElement {...props} volume={volume} repeatState={repeatState} />
    </React.Fragment>
  );
};

export default MusicPlayerPanel;

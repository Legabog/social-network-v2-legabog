import React, { useRef } from "react";
import "./OpenMusicPlayerVolumeBar.css";

import MicOffIcon from "@material-ui/icons/MicOff";
import MicIcon from "@material-ui/icons/Mic";
import { audioRef } from "containers/MusicPlayerPanel/AudioContext";

export const OpenMusicPlayerVolumeBar = (props) => {

  const volumeRangeRef = useRef()

  return (
    <>
      <div className={"music-player-panel_open__volume-wrapper"}>
        <div className={"music-player-panel_open__volume"}>
          <div className={"music-player-panel_open__mute"}>
            <MicOffIcon
              onClick={() => {
                if (props.activeTrack !== null) {
                  props.volumeH((audioRef.current.volume = 0));
                }
              }}
            />
          </div>

          <input
            disabled={props.activeTrack !== null ? false : true}
            id="volumeRange"
            type="range"
            ref={volumeRangeRef}
            min="0"
            max="1"
            step="0.01"
            value={props.volume}
            style={{
              background: `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                props.volume * 100
              }%,#E6E6E6 ${props.volume * 100}%, #E6E6E6 100%)`,
            }}
            onInput={() => {
              let val = props.volume * 100;
              volumeRangeRef.current.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
            }}
            onClick={() => {
              let val = props.volume * 100;
              volumeRangeRef.current.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
            }}
            onChange={props.volumeHandler}
          />
          <div className={"music-player-panel_open__unmute"}>
            <MicIcon
              onClick={() => {
                if (props.activeTrack !== null) {
                  props.volumeH((audioRef.current.volume = 1));
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

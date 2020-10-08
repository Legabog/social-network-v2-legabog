import React from "react";
import MicOffIcon from "@material-ui/icons/MicOff";
import MicIcon from "@material-ui/icons/Mic";
import "../MusicPlayerPanel.css";

const VolumeBar = (props) => {
  let audio = document.getElementById("audio");

  return (
    <React.Fragment>
      <div className={"MusicPlayerPanel__open__volume__wrapper"}>
        <div className={"MusicPlayerPanel__open__volume"}>
          <div className={"MusicPlayerPanel__open__mute"}>
            <MicOffIcon
              onClick={() => {
                if (props.activeTrack !== null) {
                  props.volumeH((audio.volume = 0));
                }
              }}
            />
          </div>

          <input
            disabled={props.activeTrack !== null ? false : true}
            id="volumeRange"
            type="range"
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
              let volumeRange = document.getElementById("volumeRange");
              volumeRange.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
            }}
            onClick={() => {
              let val = props.volume * 100;
              let volumeRange = document.getElementById("volumeRange");
              volumeRange.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
            }}
            onChange={props.volumeHandler}
          />
          <div className={"MusicPlayerPanel__open__unmute"}>
            <MicIcon
              onClick={() => {
                if (props.activeTrack !== null) {
                  props.volumeH((audio.volume = 1));
                }
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VolumeBar;

import React from "react";
import "./OpenMusicPlayerTrackBar.css";

export const OpenMusicPlayerTrackBar = (props) => {
  let audio = document.getElementById("audio");

  const calculateTime = (seconds = 0, guide = seconds) => {
    
    let s = Math.floor(seconds % 60);
    let m = Math.floor((seconds / 60) % 60);
    let h = Math.floor(seconds / 3600);
    const gm = Math.floor((guide / 60) % 60);
    const gh = Math.floor(guide / 3600);

    if (isNaN(seconds) || seconds === Infinity) {
      h = m = s = "-";
    }

    h = h > 0 || gh > 0 ? `${h}:` : "";
    m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
    s = s < 10 ? `0${s}` : s;

    return h + m + s;
  };

  return (
    <>
      <div className={"music-player-panel_open__track-bar"}>
        <div className={"music-player-panel_open__track-bar-input"}>
          <input
            disabled={props.activeTrack !== null ? false : true}
            id="trackBarRange"
            type="range"
            min="0"
            max={isNaN(audio.duration) ? null : audio.duration}
            step="1"
            value={props.audioCurrentTime}
            style={{
              background: `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%, #E6E6E6 100%)`,
            }}
            onInput={() => {
              let trackBarRange = document.getElementById("trackBarRange");

              trackBarRange.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%, #E6E6E6 100%)`;
            }}
            onClick={() => {
              let trackBarRange = document.getElementById("trackBarRange");
              trackBarRange.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audio.duration) * 100
              }%, #E6E6E6 100%)`;
            }}
            onChange={props.audioTimeHandler}
          />
        </div>

        <div className={"music-player-panel_open__time"}>
          <div className={"music-player-panel_open__current-time"}>
            <h5>{calculateTime(props.audioCurrentTime)}</h5>
          </div>
          <div className={"music-player-panel_open__time-left"}>
            <h5>
              {isNaN(audio.duration)
                ? "-0:00"
                : "-" + calculateTime(audio.duration - props.audioCurrentTime)}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};


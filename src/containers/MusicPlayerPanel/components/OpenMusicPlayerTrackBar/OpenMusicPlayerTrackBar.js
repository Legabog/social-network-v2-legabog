import React, { useRef } from "react";
import "./OpenMusicPlayerTrackBar.css";
import { audioRef } from "containers/MusicPlayerPanel/AudioContext";

export const OpenMusicPlayerTrackBar = (props) => {

  const trackBarRef = useRef()

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
            ref={trackBarRef}
            type="range"
            min="0"
            max={isNaN(audioRef.current.duration) ? null : audioRef.current.duration}
            step="1"
            value={props.audioCurrentTime}
            style={{
              background: `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
              }%, #E6E6E6 100%)`,
            }}
            onInput={() => {
              trackBarRef.current.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
              }%, #E6E6E6 100%)`;
            }}
            onClick={() => {
              trackBarRef.current.style.background = `-webkit-linear-gradient(left ,#1877F2 0%, #1877F2 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
              }%,#E6E6E6 ${
                (props.audioCurrentTime / audioRef.current.duration) * 100
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
              {isNaN(audioRef.current.duration)
                ? "-0:00"
                : "-" +
                  calculateTime(
                    audioRef.current.duration - props.audioCurrentTime
                  )}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

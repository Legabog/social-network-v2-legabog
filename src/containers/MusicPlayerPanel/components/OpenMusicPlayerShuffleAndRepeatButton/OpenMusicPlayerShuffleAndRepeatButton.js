import React from "react";
import "./OpenMusicPlayerShuffleAndRepeatButton.css";

import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";

export const OpenMusicPlayerShuffleAndRepeatButton = (props) => {
  return (
    <>
      <div className={"music-player-panel_open__shuffle-and-repeat-button"}>
        <div className={"music-player-panel_open__shuffle-and-repeat"}>
          <button
            disabled={props.activeTrack !== null ? false : true}
            onClick={props.setRepeatState}
          >
            {props.repeatState === 0 ? (
              <RepeatIcon style={{ color: "gray" }} />
            ) : props.repeatState === 1 ? (
              <RepeatIcon style={{ color: "#1877F2" }} />
            ) : (
              <RepeatOneIcon style={{ color: "#1877F2" }} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};


import React from "react";
import "../MusicPlayerPanel.css";

import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";

export const ShuffleAndRepeatButton = (props) => {
  return (
    <React.Fragment>
      <div className={"MusicPlayerPanel__open__shuffleAndRepeat__wrapper"}>
        <div className={"MusicPlayerPanel__open__shuffleAndRepeat"}>
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
    </React.Fragment>
  );
};

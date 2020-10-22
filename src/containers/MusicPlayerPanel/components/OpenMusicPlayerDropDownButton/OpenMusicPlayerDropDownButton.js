import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./OpenMusicPlayerDropDownButton.css";

export const OpenMusicPlayerDropDownButton = (props) => {
  return (
    <>
      <div className={"music-player-panel_open__dropDown"}>
        <ArrowDropDownIcon onClick={props.toggleMusicPanel} />
      </div>
    </>
  );
};


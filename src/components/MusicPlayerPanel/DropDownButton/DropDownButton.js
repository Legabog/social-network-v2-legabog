import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "../MusicPlayerPanel.css";

const DropDownButton = (props) => {
  return (
    <React.Fragment>
      <div className={"MusicPlayerPanel__open__dropDown"}>
        <ArrowDropDownIcon onClick={props.toggleMusicPanel} />
      </div>
    </React.Fragment>
  );
};

export default DropDownButton;

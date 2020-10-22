import React from "react";
import { useState } from "react";
import "./BodyOwnPlayListsRouterActionSwitcher.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const BodyOwnPlayListsRouterActionSwitcher = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHover(0);
  };

  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div
      className={"bodyOwnPlayListsRouter__ActionSwitcher"}
      onMouseOver={() => {
        setHover(1);
      }}
      onMouseOut={() => {
        setHover(0);
      }}
    >
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          textTransform: "none",
          color: "#fff",
          transition: "none" || "none",
        }}
      >
        <div className={"bodyOwnPlayListsRouter__icon"}>
          {hover ? (
            <MoreHorizIcon style={{ color: "#F62A54" }} />
          ) : (
            <MoreHorizIcon style={{ color: "#1877F2" }} />
          )}
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "380px" }}
      >
        <div className={"bodyOwnPlayListsRouter__ActionSwitcherroot"}>
          <div className={"bodyOwnPlayListsRouter__ActionSwitcherdescriptionHeader"}>
            <img src={props.albumCover} alt="mini_album_cover" />
            <div className={"bodyOwnPlayListsRouter__ActionSwitchertitleAndAuthor"}>
              <h3>{props.title}</h3>
              <p>{props.author}</p>
            </div>
            <CloseIcon onClick={handleClose} style={{ color: "rgb(163, 163, 163)" }} />
          </div>

          <hr />
        </div>
        <MenuItem
          onClick={() => {
            props.deleteTrackFromPlayList(props.id, props.pid);
          }}
        >
          <div className={"bodyOwnPlayListsRouter__ActionSwitcherdeleteFromPlayList"}>
            <DeleteOutlineIcon style={{ color: "rgb(163, 163, 163)" }}/>
            <h3>Delete from playlist</h3>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

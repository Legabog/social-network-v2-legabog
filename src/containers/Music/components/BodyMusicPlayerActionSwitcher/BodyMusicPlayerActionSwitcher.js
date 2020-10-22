import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import "./BodyMusicPlayerActionSwitcher.css"


export const BodyMusicPlayerActionSwitcher = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHover(0)
  };

  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div
      className={"action-switcher"}
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
        <div className={"action-switcher__icon"}>
          {hover 
            ? <MoreHorizIcon style={{color: "#F62A54"}}/>
            : <MoreHorizIcon style={{color: "#1877F2"}}/>
          }
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{width: "380px", marginLeft: "-20px"}}
      >
        <div className={"action-switcher__root"}>
          <div className={"action-switcher__description-header"}>
            <img src={props.albumCover} alt="mini_album_cover"/>
            <div className={"action-switcher__title-and-author"}>
              <h3>{props.title}</h3>
              <p>{props.author}</p>
            </div>
            <CloseIcon onClick={handleClose} style={{color: "rgb(163, 163, 163)"}}/> 
          </div>
        </div>
        <MenuItem
          onClick={() => {
            props.switchStateOfPlayLists(true);
            props.addTrackToPlayList(
              props.title,
              props.author,
              props.trackUrl,
              props.albumTitle,
              props.albumCover
            );
          }}
        >
          <NavLink
            style={{ color: "#4A76A8", textDecoration: "none" }}
            to={`/music-list/playlists`}
          >
            <div className={"action-switcher__add"}>
              <AddIcon style={{color: "rgb(163, 163, 163)"}}/>
              <h3>Add to a Playlist</h3>
            </div>
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

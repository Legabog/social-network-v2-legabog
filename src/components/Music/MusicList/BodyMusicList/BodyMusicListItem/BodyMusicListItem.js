import React from "react";
import "./BodyMusicListItem.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const BodyMusicListItem = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <React.Fragment>
      <div
        className={"bodyMusicList__item"}
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <NavLink to={`/music-list/${props.link}`}>
          <div className={"bodyMusicList__item"}>
            <h2>{props.title}</h2>
            {hover 
              ? <ArrowForwardIosIcon style={{color: "#F62A54"}}/>
              : <ArrowForwardIosIcon style={{color: "#1877F2"}}/>
            }
          </div>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default BodyMusicListItem;

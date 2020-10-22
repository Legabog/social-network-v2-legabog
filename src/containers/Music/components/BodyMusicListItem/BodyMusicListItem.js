import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./BodyMusicListItem.css";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const BodyMusicListItem = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      <div
        className={"music-list-body__item"}
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <NavLink to={`/music-list/${props.link}`}>
          <div className={"music-list-body__item"}>
            <h2>{props.title}</h2>
            {hover 
              ? <ArrowForwardIosIcon style={{color: "#F62A54"}}/>
              : <ArrowForwardIosIcon style={{color: "#1877F2"}}/>
            }
          </div>
        </NavLink>
      </div>
    </>
  );
};
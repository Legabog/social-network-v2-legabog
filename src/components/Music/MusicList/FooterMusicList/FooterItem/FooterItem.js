import React from "react";
import "./FooterItem.css";
import { NavLink } from "react-router-dom";

const FooterItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div
        className={"music__footer__item"}
        onClick={() => {
          props.toggleSwitcher(3);
        }}
      >
        <img src={props.img} alt="music__footer__description" />
        <div className={"music__footer__discription"}>
          <h4 className={"music__footer__album"}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={"music__footer__artist"}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default FooterItem;

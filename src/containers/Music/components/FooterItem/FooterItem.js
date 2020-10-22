import React from "react";
import "./FooterItem.css";
import { NavLink } from "react-router-dom";

export const FooterItem = (props) => {
  return (
    <>
      <NavLink to={`/music-player/${props.author}/${props.title}`}>
        <div
          className={"music-list-footer__item"}
          onClick={() => {
            props.toggleSwitcher(3);
          }}
        >
          <img src={props.img} alt="description" />
          <div className={"music-list-footer__description"}>
            <h4 className={"music-list-footer__album"}>
              <strong>{props.title}</strong>
            </h4>
            <h4 className={"music-list-footer__artist"}>
              <strong>{props.author}</strong>
            </h4>
          </div>
        </div>
      </NavLink>
    </>
  );
};


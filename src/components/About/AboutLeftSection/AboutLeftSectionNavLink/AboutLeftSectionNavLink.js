import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutLeftSectionNavLink.css";

const AboutLeftSectionNavLink = (props) => {
  return (
    <>
      <NavLink to={props.navLink}>
        {props.activeLink ? (
          <div className={"AboutLeftSectionNavLink__wrapper-active"}>
            <span>{props.title}</span>
          </div>
        ) : (
          <div className={"AboutLeftSectionNavLink__wrapper"}>
            <span>{props.title}</span>
          </div>
        )}
      </NavLink>
    </>
  );
};

export default AboutLeftSectionNavLink;

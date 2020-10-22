import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ChangeAvatarSimplePreloader } from "pres-components/ChangeAvatarSimplePreloader";

export const SidebarRow = ({
  src,
  Icon,
  IconFromSprite,
  Img,
  title,
  navLink,
  Link,
  fetchAvatar,
  toggleAdditionalSections,
}) => {
  return navLink ? (
    <NavLink to={navLink}>
      <div className="sidebar-row" onClick={toggleAdditionalSections}>
        {fetchAvatar ? (
          <ChangeAvatarSimplePreloader width={"32px"} height={"32px"} />
        ) : (
          (src && <Avatar src={src} />) || (Icon && <Icon />)
        )}

        <span>{title}</span>
      </div>
    </NavLink>
  ) : (
    <a href={Link}>
      <div className="sidebar-row" onClick={toggleAdditionalSections}>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        {IconFromSprite ? (
          <div className={"sidebar-row__icon-from-sprite"}>
            {IconFromSprite}
          </div>
        ) : null}
        {Img ? (
          <div className={"sidebar-row__img"}>
            <img src={Img} alt="description" />
          </div>
        ) : null}
        <span>{title}</span>
      </div>
    </a>
  );
};

import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ChangeAvatarSimplePreloader from "../../common/ChangeAvatarSimplePreloader/ChangeAvatarSimplePreloader";

const SidebarRow = ({
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
      <div className="sidebarRow" onClick={toggleAdditionalSections}>
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
      <div className="sidebarRow" onClick={toggleAdditionalSections}>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        {IconFromSprite ? (
          <div className={"sidebarRow__iconFromSprote"}>{IconFromSprite}</div>
        ) : null}
        {Img ? (
          <div className={"sidebarRow__img"}>
            <img src={Img} alt="description" />
          </div>
        ) : null}
        <span>{title}</span>
      </div>
    </a>
  );
};

export default SidebarRow;

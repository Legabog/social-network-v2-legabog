import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Sidebar.css";

import map_svg from "assets/images/map.svg";
import game_logo from "assets/images/game_logo.jpg";
import vkr_logo from "assets/images/vkr_logo.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ChatIcon from "@material-ui/icons/Chat";
import GitHubIcon from "@material-ui/icons/GitHub";
import PeopleIcon from "@material-ui/icons/People";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import GamesIcon from "@material-ui/icons/Games";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WorkIcon from "@material-ui/icons/Work";
import FlagIcon from "@material-ui/icons/Flag";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { SidebarRow } from "./components/SidebarRow";

const Sidebar_ = React.memo((props) => {
  const [additionalSections, setAdditionalSections] = useState(false);

  const toggleAdditionalSections = () => {
    additionalSections
      ? setAdditionalSections(false)
      : setAdditionalSections(true);
  };

  return (
    <div className="sidebar">
      <SidebarRow
        Icon={
          props.user === null || props.user.Avatars.activeAvatarUrl === ""
            ? AccountCircleIcon
            : null
        }
        src={
          props.user === null || props.user.Avatars.activeAvatarUrl === ""
            ? null
            : props.user.Avatars.activeAvatarUrl
        }
        title={
          props.user === null
            ? null
            : `${props.user.Name} ${props.user.Sername}`
        }
        navLink={"/profile"}
        fetchAvatar={props.fetchAvatar}
      />

      <SidebarRow Icon={GitHubIcon} title="Welcome" navLink={"/welcome"} />
      <SidebarRow Icon={LibraryMusicIcon} title="Music" navLink={"/music"} />

      <hr />

      <div className={"sidebar__title-section"}>
        <span>Some deployed projects</span>
      </div>

      <SidebarRow
        IconFromSprite={
          <svg>
            <use href={map_svg + "#vk"} />
          </svg>
        }
        title="Social network VK-version"
        Link={"https://covers-storage.firebaseapp.com/"}
      />

      <SidebarRow
        IconFromSprite={
          <svg>
            <use href={map_svg + "#vue_logo"} />
          </svg>
        }
        title="Vue.js, Node.js, Socket.io chat"
        Link={"https://murmuring-tor-87484.herokuapp.com/"}
      />
      <SidebarRow
        Img={game_logo}
        title="ALEKSEY SURVIVE GAME, Phaser3"
        Link={"https://myfirstbot-sphara.web.app/"}
      />
      <SidebarRow
        Img={vkr_logo}
        title="Vkr project"
        Link={"https://vkr-project-legabog.web.app/"}
      />
      {additionalSections ? (
        <>
          <hr />
          <SidebarRow
            Icon={LocalHospitalIcon}
            title="COVID-19 Information Center"
          />
          <SidebarRow Icon={EmojiPeopleIcon} title="Friends" />
          <SidebarRow Icon={ChatIcon} title="Messenger" />

          <SidebarRow Icon={PeopleIcon} title="Groups" />
          <SidebarRow Icon={EventIcon} title="Events" />
          <SidebarRow Icon={BookmarkIcon} title="Saved" />

          <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
          <SidebarRow Icon={GamesIcon} title="Games" />
          <SidebarRow Icon={SportsEsportsIcon} title="Esports Streams" />
          <SidebarRow Icon={WorkIcon} title="Jobs" />
          <SidebarRow Icon={FlagIcon} title="Pages" />
          <SidebarRow Icon={WbSunnyIcon} title="Weather" />
          <SidebarRow
            Icon={ExpandLessIcon}
            title="See Less"
            toggleAdditionalSections={toggleAdditionalSections}
          />
        </>
      ) : (
        <SidebarRow
          Icon={ExpandMoreOutlined}
          title="See More"
          toggleAdditionalSections={toggleAdditionalSections}
        />
      )}
    </div>
  );
});

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  fetchAvatar: state.userReducer.fetchAvatar,
});

export const Sidebar = compose(
  withRouter,
  connect(mapStateToProps, {})
)(Sidebar_);

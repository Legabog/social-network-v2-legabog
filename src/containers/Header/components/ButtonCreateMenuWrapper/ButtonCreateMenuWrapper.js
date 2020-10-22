import React from "react";
import EventIcon from "@material-ui/icons/Event";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import "./ButtonCreateMenuWrapper.css";
import { ButtonCreateMenuSection } from "../ButtonCreateMenuSection";

export const ButtonCreateMenuWrapper = (props) => {
  return (
    <div
      className={"button-create-menu__wrapper"}
      style={
        props.activeButton === 0
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button-create-menu__header">
        <h2>Create</h2>
      </div>
      <div className="button-create-menu__body">
        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={PostAddIcon}
          category={"Post"}
          help={"Share a post on News Feed."}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={PhotoAlbumIcon}
          category={"Story"}
          help={"Share a photo or write something."}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={EventIcon}
          category={"Life event"}
          help={"Add a life event to your profile."}
        />

        <hr />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={FlagIcon}
          category={"Page"}
          help={"Connect and share with customers and fans."}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={SupervisedUserCircleIcon}
          category={"Group"}
          help={"Connect with people who share your interests."}
        />

        <ButtonCreateMenuSection
          toggleActiveButton={props.toggleActiveButton}
          Icon={EventAvailableIcon}
          category={"Event"}
          help={"Bring people together with a public or private event."}
        />
      </div>
    </div>
  );
};


import React from "react";
import EventIcon from "@material-ui/icons/Event";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import "./ButtonCreateMenuWrapper.css";

const ButtonCreateMenuWrapper = (props) => {
  return (
    <div
      className={"button__create__menu__wrapper"}
      style={
        props.activeButton === 0
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__create__menu__header">
        <h2>Create</h2>
      </div>
      <div className="button__create__menu__body">
        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <PostAddIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Post</span>
            </div>
            <div className="button__create__description__help">
              <span>Share a post on News Feed.</span>
            </div>
          </div>
        </div>

        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <PhotoAlbumIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Story</span>
            </div>
            <div className="button__create__description__help">
              <span>Share a photo or write something.</span>
            </div>
          </div>
        </div>

        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <EventIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Life event</span>
            </div>
            <div className="button__create__description__help">
              <span>Add a life event to your profile.</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <FlagIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Page</span>
            </div>
            <div className="button__create__description__help">
              <span>Connect and share with customers and fans.</span>
            </div>
          </div>
        </div>

        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <SupervisedUserCircleIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Group</span>
            </div>
            <div className="button__create__description__help">
              <span>Connect with people who share your interests.</span>
            </div>
          </div>
        </div>

        <div className="button__create__section__border">
          <div className="button__create__section__icon">
            <EventAvailableIcon
              style={{
                width: "24px",
                height: "24px",
                marginTop: "6px",
                marginLeft: "6px",
              }}
            />
          </div>

          <div className="button__create__description">
            <div className="button__create__description__category">
              <span>Event</span>
            </div>
            <div className="button__create__description__help">
              <span>Bring people together with a public or private event.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCreateMenuWrapper;

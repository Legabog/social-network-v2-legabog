import React, { useState } from "react";
import "./ProfileUpdateBodySection.css";

const ProfileUpdateBodySection = (props) => {
  const [maxLineOfImages] = useState(6);
  const [display, setDisplay] = useState("none");

  const toggleDisplay = () => {
    display === "none" ? setDisplay() : setDisplay("none");
  };

  return (
    <div className={"prifleUpdateAvatar__body__Section"}>
      <span>{props.titleSection}</span>
      {props.user === null || props.avatarsArray.length === 0 ? (
        <div className={"prifleUpdateAvatar__body__Section__imgLine"}></div>
      ) : props.avatarsArray.length <= maxLineOfImages ? (
        <div className={"prifleUpdateAvatar__body__Section__imgLine"}>
          {props.avatarsArray.map((e, index) => {
            return (
              <img
                src={e}
                key={index}
                alt="description"
                onClick={(v) => {
                  v.preventDefault();
                  props.changeAvatarPreHandler(e);
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className={"prifleUpdateAvatar__body__Section__imgLineOversize"}>
          <div
            className={
              "prifleUpdateAvatar__body__Section__imgLineOversize-main"
            }
          >
            {props.avatarsArray.map((e, index) => {
              if (index <= maxLineOfImages - 1) {
                return (
                  <img
                    src={e}
                    alt="description"
                    key={index}
                    onClick={(v) => {
                      v.preventDefault();
                      props.changeAvatarPreHandler(e);
                    }}
                  />
                );
              }

              return null;
            })}
          </div>

          <div
            className={
              "prifleUpdateAvatar__body__Section__imgLineOversize-secondary"
            }
            style={{ display: display }}
          >
            {props.avatarsArray.map((e, index) => {
              if (index > maxLineOfImages - 1) {
                return (
                  <img
                    src={e}
                    alt="description"
                    key={index}
                    onClick={(v) => {
                      v.preventDefault();
                      props.changeAvatarPreHandler(e);
                    }}
                  />
                );
              }

              return null;
            })}
          </div>
          <div
            className={
              "prifleUpdateAvatar__body__Section__imgLineOversize-button"
            }
            style={{ display: display !== "none" ? "none" : null }}
            onClick={toggleDisplay}
          >
            <span>See More</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUpdateBodySection;

import React, { useState } from "react";
import "./ProfileUpdateBodySection.css";

import _ from "lodash/core";

export const ProfileUpdateBodySection = (props) => {
  const [maxLineOfImages] = useState(6);
  const [display, setDisplay] = useState("none");

  const toggleDisplay = () => {
    display === "none" ? setDisplay() : setDisplay("none");
  };

  return (
    <div className={"profle-update-avatar-body__section"}>
      <span>{props.titleSection}</span>
      {props.user === null || props.avatarsArray.length === 0 ? (
        <div className={"profle-update-avatar-body__section-img-line"}></div>
      ) : props.avatarsArray.length <= maxLineOfImages ? (
        <div className={"profle-update-avatar-body__section-img-line"}>
          {props.avatarsArray.map((e, index) => {
            return (
              <img
                className={"profle-update-avatar-body__section-img"}
                src={e}
                key={_.uniqueId(`m1_${e}`)}
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
        <div
          className={"profle-update-avatar-body__section-img-line_oversized"}
        >
          <div
            className={
              "profle-update-avatar-body__section-img-line-main_oversized"
            }
          >
            {props.avatarsArray.map((e, index) => {
              if (index <= maxLineOfImages - 1) {
                return (
                  <img
                    className={"profle-update-avatar-body__section-img"}
                    src={e}
                    alt="description"
                    key={_.uniqueId(`m2_${e}`)}
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
              "profle-update-avatar-body__section-img-line-secondary_oversized"
            }
            style={{ display: display }}
          >
            {props.avatarsArray.map((e, index) => {
              if (index > maxLineOfImages - 1) {
                return (
                  <img
                    className={"profle-update-avatar-body__section-img"}
                    src={e}
                    alt="description"
                    key={_.uniqueId(`m3_${e}`)}
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
            className={"section-img-line-secondary_oversized__button"}
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

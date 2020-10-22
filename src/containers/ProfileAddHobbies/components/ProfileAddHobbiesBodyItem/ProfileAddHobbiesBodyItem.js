import React from "react";
import "./ProfileAddHobbiesBodyItem.css";
import _ from "lodash/core";

export const ProfileAddHobbiesBodyItem = (props) => {
  return (
    <div
      className={`profile-add-hobbies-body-item${
        _.some(props.tempHobbies, {
          hobbie: props.description,
          icon: props.Icon,
        })
          ? "_active"
          : ""
      }`}
      onClick={() => {
        props.toggleTempHobbies(
          props.description,
          props.Icon,
          _.findIndex(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
        );
      }}
    >
      <div
        className={`profile-add-hobbies-body-item__icon${
          _.some(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
            ? "_active"
            : ""
        }`}
      >
        <props.Icon />
      </div>

      <div
        className={`profile-add-hobbies-body-item__description${
          _.some(props.tempHobbies, {
            hobbie: props.description,
            icon: props.Icon,
          })
            ? "_active"
            : ""
        }`}
      >
        <span>{props.description}</span>
      </div>
    </div>
  );
};

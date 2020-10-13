import React from "react";
import _ from "lodash";
import "./ProfileAddHobbiesBodyItem.css";

const ProfileAddHobbiesBodyItem = (props) => {
  

  return (
    <div
      className={`profile-add-hobbies-body-item${
        _.findIndex(props.tempHobbies, {
          hobbie: props.description,
          icon: props.Icon,
        })
          ? "_active"
          : ""
      }`}
      onClick={() => {
        props.pushToTempHobbies(props.description, props.Icon);
      }}
    >
      <div
        className={`profile-add-hobbies-body-item__icon${
          _.findIndex( props.tempHobbies, {
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
          _.findIndex(props.tempHobbies, {
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

export default ProfileAddHobbiesBodyItem;

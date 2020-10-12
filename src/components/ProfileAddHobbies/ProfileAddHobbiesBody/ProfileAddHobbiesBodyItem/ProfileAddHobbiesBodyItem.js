import React, { useState } from "react";
import "./ProfileAddHobbiesBodyItem.css";

const ProfileAddHobbiesBodyItem = (props) => {
  const [acttiveItem, setActiveItem] = useState(false);

  const toggleItem = () => {
    if (acttiveItem === false) {
      props.pushToTempHobbies(props.description);
      setActiveItem(true);
    } else {
      props.deleteElementFromTempHobbies(0)
      setActiveItem(false);
    }
  };

  return (
    <div
      className={`profile-add-hobbies-body-item${acttiveItem ? "_active" : ""}`}
      onClick={() => {
        toggleItem()
      }}
    >
      <div
        className={`profile-add-hobbies-body-item__icon${
          acttiveItem ? "_active" : ""
        }`}
      >
        <props.Icon />
      </div>

      <div
        className={`profile-add-hobbies-body-item__description${
          acttiveItem ? "_active" : ""
        }`}
      >
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default ProfileAddHobbiesBodyItem;

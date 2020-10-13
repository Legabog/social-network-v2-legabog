import React, { useState } from "react";
import _ from "lodash";
import "./ProfileAddHobbies.css";

import BackDrop from "../common/BackDrop/BackDrop";
import ProfileAddHobbiesHeader from "./ProfileAddHobbiesHeader/ProfileAddHobbiesHeader";
import ProfileAddHobbiesBody from "./ProfileAddHobbiesBody/ProfileAddHobbiesBody";
import ProfileAddHobbiesFooter from "./ProfileAddHobbiesFooter/ProfileAddHobbiesFooter";

const ProfileAddHobbies = (props) => {
  const [tempHobbies, setTempHobbies] = useState([]);

  const pushToTempHobbies = (hobbie, icon) => {
    let result = 0;

    tempHobbies.map( e => {
      if (_.isEqual({ hobbie, icon }, e)) {
        result += 1;
      }
    });

    if (result === 0) {
      setTempHobbies([...tempHobbies, { hobbie, icon }]);
    }
  };

  const deleteElementFromTempHobbies = (index) => {
    setTempHobbies(
      tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1))
    );
  };

  return (
    <div
      className={"profile-add-hobbies__wrapper"}
      style={{
        visibility: props.profileAddHobbiesVisibility,
        opacity: props.profileAddHobbiesOpacity,
      }}
    >
      <div className={"profile-add-hobbies"}>
        <ProfileAddHobbiesHeader setTempHobbies={setTempHobbies} {...props} />
        <ProfileAddHobbiesBody
          tempHobbies={tempHobbies}
          deleteElementFromTempHobbies={deleteElementFromTempHobbies}
          pushToTempHobbies={pushToTempHobbies}
          {...props}
        />
        <ProfileAddHobbiesFooter
          tempHobbies={tempHobbies}
          setTempHobbies={setTempHobbies}
          {...props}
        />
      </div>
      <BackDrop
        onClick={() => {
          props.toggleProfileAddHobbies(
            props.profileAddHobbiesVisibility,
            props.profileAddHobbiesOpacity
          );
        }}
      />
    </div>
  );
};

export default ProfileAddHobbies;

import React, { useState } from "react";
import "./ProfileAddHobbies.css";

import BackDrop from "../common/BackDrop/BackDrop";
import ProfileAddHobbiesHeader from "./ProfileAddHobbiesHeader/ProfileAddHobbiesHeader";
import ProfileAddHobbiesBody from "./ProfileAddHobbiesBody/ProfileAddHobbiesBody";
import ProfileAddHobbiesFooter from "./ProfileAddHobbiesFooter/ProfileAddHobbiesFooter";

const ProfileAddHobbies = (props) => {
  const [tempHobbies, setTempHobbies] = useState([]);

  const pushToTempHobbies = (hobbie) => {
    if ( tempHobbies.includes(hobbie) === false ) {
        setTempHobbies([...tempHobbies, hobbie]);
    } 
    console.log(tempHobbies)
  };

  const deleteElementFromTempHobbies = (index) => {
    setTempHobbies(tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1)));
    console.log(tempHobbies)
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

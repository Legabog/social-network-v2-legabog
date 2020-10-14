import React, { useState } from "react";
import _ from "lodash";
import "./ProfileAddHobbies.css";

import BackDrop from "../common/BackDrop/BackDrop";
import ProfileAddHobbiesHeader from "./ProfileAddHobbiesHeader/ProfileAddHobbiesHeader";
import ProfileAddHobbiesBody from "./ProfileAddHobbiesBody/ProfileAddHobbiesBody";
import ProfileAddHobbiesFooter from "./ProfileAddHobbiesFooter/ProfileAddHobbiesFooter";

const ProfileAddHobbies = (props) => {
  
  const [tempHobbies, setTempHobbies] = useState([]);

  const toggleTempHobbies = (hobbie, icon, index) => {
    !_.some(tempHobbies, { hobbie, icon }) 
      ? setTempHobbies([...tempHobbies, { hobbie, icon }])
      : setTempHobbies(
        tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1))
      )
  };

  // const deleteElementFromTempHobbies = (index) => {
  //   setTempHobbies(
  //     tempHobbies.slice(0, index).concat(tempHobbies.slice(index + 1))
  //   );
  // };

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
          toggleTempHobbies={toggleTempHobbies}
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

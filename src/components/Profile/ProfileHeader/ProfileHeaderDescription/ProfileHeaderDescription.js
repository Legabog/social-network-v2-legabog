import React, { useState } from "react";
import "./ProfileHeaderDescription.css";
import ProfileHeaderNameAndSername from "./ProfileHeaderDescriptionNameAndSername/ProfileHeaderDescriptionNameAndSername";
import ProfileHeaderBioActive from "./ProfileHeaderBioActive/ProfileHeaderBioActive";
import ProfileHeaderBio from "./ProfileHeaderBio/ProfileHeaderBio";
import ProfileHeaderDescriptionPreloader from "./ProfileHeaderDescriptionPreloader/ProfileHeaderDescriptionPreloader";

const ProfileHeaderDescription = (props) => {
  const [clickState, setClickState] = useState(false);

  const toggleClickState = () => {
    clickState === false ? setClickState(true) : setClickState(false);
  };

  return (
    <div className={"profile__header__description"}>
      <div className={"profile__header__description__wrapper"}>
        <ProfileHeaderNameAndSername {...props} />

        {props.fetchBio ? <ProfileHeaderDescriptionPreloader /> : null}

        {props.user === null || clickState ? (
          <ProfileHeaderBioActive
            {...props}
            toggleClickState={toggleClickState}
          />
        ) : (
          <ProfileHeaderBio {...props} toggleClickState={toggleClickState} />
        )}
      </div>
    </div>
  );
};

export default ProfileHeaderDescription;

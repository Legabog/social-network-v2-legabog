import React from "react";
import "./ProfileUpdateBody.css";
import ProfileUpdateBodySection from "./ProfileUpdateBodySection/ProfileUpdateBodySection";

const ProfileUpdateBody = (props) => {
  return (
    <div className={"prifleUpdateAvatar__body"}>
      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null || props.user.RecentUploads.length === 0
            ? []
            : props.user.RecentUploads
        }
        {...props}
        titleSection={"Recents Uploads"}
      />
      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null || props.user.Avatars.pofileAvatars.length === 0
            ? []
            : props.user.Avatars.pofileAvatars
        }
        {...props}
        titleSection={"Profile Pictures"}
      />

      <ProfileUpdateBodySection
        avatarsArray={
          props.user === null ||
          props.user.AvatarBackground.pofileAvatarBackgrounds.length === 0
            ? []
            : props.user.AvatarBackground.pofileAvatarBackgrounds
        }
        {...props}
        titleSection={"Cover Photos"}
      />
    </div>
  );
};

export default ProfileUpdateBody;

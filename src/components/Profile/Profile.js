import React from "react";
import ProfileUpdateAvatar from "../ProfileUpdateAvatar/ProfileUpdateAvatar";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileSelectAvatarBackground from "../ProfileSelectAvatarBackground/ProfileSelectAvatarBackground";
import ProfileBody from "./ProfileBody/ProfileBody";
import { useLocation } from "react-router-dom";

const Profile = (props) => {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/profile" ? (
        <div className={"profile"}>
          <ProfileHeader {...props} />
          <ProfileUpdateAvatar {...props} />
          <ProfileSelectAvatarBackground {...props} />
          <ProfileBody {...props} />
        </div>
      ) : (
        <div className={"profile"}>
          <ProfileHeader {...props} />
          <ProfileUpdateAvatar {...props} />
          <ProfileSelectAvatarBackground {...props} />
        </div>
      )}
    </>
  );
};

export default Profile;

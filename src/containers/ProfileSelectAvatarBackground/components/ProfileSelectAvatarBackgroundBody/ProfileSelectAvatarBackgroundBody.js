import React, { useState } from "react";
import "./ProfileSelectAvatarBackgroundBody.css";

import { ProfileSelectAvatarBackgroundNavigation } from "../ProfileSelectAvatarBackgroundNavigation";
import { ProfileSelectAvatarBackgroundPhotoAlbums } from "../ProfileSelectAvatarBackgroundPhotoAlbums";
import { ProfileSelectAvatarBackgroundRecentPhotos } from "../ProfileSelectAvatarBackgroundRecentPhotos";

export const ProfileSelectAvatarBackgroundBody = (props) => {
  const [navigationState, setNavigationState] = useState(0);

  return (
    <div className={"profile-select-avatar-background-body"}>
      <ProfileSelectAvatarBackgroundNavigation
        navigationState={navigationState}
        setNavigationState={setNavigationState}
      />

      {navigationState === 0 ? (
        <ProfileSelectAvatarBackgroundRecentPhotos {...props} />
      ) : navigationState === 1 ? (
        <ProfileSelectAvatarBackgroundPhotoAlbums
          toggleSelectComponent={props.toggleSelectComponent}
          {...props}
        />
      ) : null}
    </div>
  );
};


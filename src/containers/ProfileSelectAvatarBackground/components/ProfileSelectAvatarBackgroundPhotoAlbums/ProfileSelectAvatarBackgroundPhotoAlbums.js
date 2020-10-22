import React from "react";
import "./ProfileSelectAvatarBackgroundPhotoAlbums.css";

import { AvatarBackgroundPhotoAlbumsSection } from "../AvatarBackgroundPhotoAlbumsSection";

export const ProfileSelectAvatarBackgroundPhotoAlbums = (props) => {
  return (
    <div className={"profile-select-avatar-background-photo-albums-wrapper"}>
      {props.user === null ||
      (props.user.Avatars.pofileAvatars.length === 0 &&
        props.user.Avatars.pofileAvatars.length === 0) ? (
        <div className={"profile-select-avatar-background-photo-albums"}></div>
      ) : (
        <div className={"profile-select-avatar-background-photo-albums"}>
          {props.user === null ||
          props.user.Avatars.pofileAvatars.length === 0 ? null : (
            <AvatarBackgroundPhotoAlbumsSection
              toggleSelectComponent={props.toggleSelectComponent}
              img={props.user.Avatars.pofileAvatars[0]}
              content={0}
              title={"Profile Pictures"}
              uploads={props.user.Avatars.pofileAvatars.length}
            />
          )}

          {props.user === null ||
          props.user.AvatarBackground.pofileAvatarBackgrounds.length ===
            0 ? null : (
            <AvatarBackgroundPhotoAlbumsSection
              img={props.user.AvatarBackground.pofileAvatarBackgrounds[0]}
              toggleSelectComponent={props.toggleSelectComponent}
              content={1}
              title={"Cover Photos"}
              uploads={
                props.user.AvatarBackground.pofileAvatarBackgrounds.length
              }
            />
          )}
        </div>
      )}
    </div>
  );
};


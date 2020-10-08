import React from "react";
import AvatarBackgroundPhotoAlbumsSection from "./AvatarBackgroundPhotoAlbumsSection/AvatarBackgroundPhotoAlbumsSection";
import "./ProfileSelectAvatarBackgroundPhotoAlbums.css";

const ProfileSelectAvatarBackgroundPhotoAlbums = (props) => {
  return (
    <div className={"prifleSelectAvatarBackground__photoAlbums__wrapper"}>
      {props.user === null ||
      (props.user.Avatars.pofileAvatars.length === 0 &&
        props.user.Avatars.pofileAvatars.length === 0) ? (
        <div className={"prifleSelectAvatarBackground__photoAlbums"}></div>
      ) : (
        <div className={"prifleSelectAvatarBackground__photoAlbums"}>
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

export default ProfileSelectAvatarBackgroundPhotoAlbums;

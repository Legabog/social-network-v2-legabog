import React from "react";
import "./ProfileSelectAvatarBackgroundBodyActive.css";

const ProfileSelectAvatarBackgroundBodyActive = (props) => {
  return (
    <div className={"profile-select-avatar-background-body-wrapper_active"}>
      <div className={"profile-select-avatar-background-body_active"}>
        {props.selectComponentContent === 0
          ? props.user.Avatars.pofileAvatars.map((e, index) => {
              return (
                <img
                  key={index}
                  src={e}
                  alt="description"
                  onClick={() => {
                    props.avatarBackgroundLoaderUrlHandler(e);
                    props.toggleWindowConfirmBackground(true);
                    props.toggleProfileSelectAvatarBackground(
                      props.profileSelectVisibility,
                      props.profileSelectOpacity
                    );
                    props.toggleSelectComponent(0, "Select Photo", 0);
                  }}
                />
              );
            })
          : props.user.AvatarBackground.pofileAvatarBackgrounds.map(
              (e, index) => {
                return (
                  <img
                    key={index}
                    src={e}
                    alt="description"
                    onClick={() => {
                      props.avatarBackgroundLoaderUrlHandler(e);
                      props.toggleWindowConfirmBackground(true);
                      props.toggleProfileSelectAvatarBackground(
                        props.profileSelectVisibility,
                        props.profileSelectOpacity
                      );
                      props.toggleSelectComponent(0, "Select Photo", 0);
                    }}
                    
                  />
                );
              }
            )}
      </div>
    </div>
  );
};

export default ProfileSelectAvatarBackgroundBodyActive;

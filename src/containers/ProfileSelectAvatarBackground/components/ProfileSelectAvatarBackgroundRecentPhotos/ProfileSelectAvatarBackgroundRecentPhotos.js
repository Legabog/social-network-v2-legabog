import React from "react";
import "./ProfileSelectAvatarBackgroundRecentPhotos.css";

export const ProfileSelectAvatarBackgroundRecentPhotos = (props) => {
  return (
    <div
      className={"profile-select-avatar-background-recent-photos-wrapper"}
    >
      <div className={"profile-select-avatar-background-recent-photos"}>
        {props.user === null || props.user.RecentUploads === []
          ? null
          : props.user.RecentUploads.map((e, index) => {
              return (
                <img
                  src={e}
                  alt="description"
                  key={index}
                  onClick={() => {
                    props.avatarBackgroundLoaderUrlHandler(e);
                    props.toggleWindowConfirmBackground(true);
                    props.toggleProfileSelectAvatarBackground(
                      props.profileSelectVisibility,
                      props.profileSelectOpacity
                    );
                  }}
                />
              );
            })}
      </div>
    </div>
  );
};


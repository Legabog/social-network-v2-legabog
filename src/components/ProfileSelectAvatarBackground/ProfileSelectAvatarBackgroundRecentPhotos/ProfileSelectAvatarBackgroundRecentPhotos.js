import React from "react";
import "./ProfileSelectAvatarBackgroundRecentPhotos.css";

const ProfileSelectAvatarBackgroundRecentPhotos = (props) => {
  return (
    <div
      className={"prifleSelectAvatarBackground__recentPhotos__wrapper"}
    >
      <div className={"prifleSelectAvatarBackground__recentPhotos"}>
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

export default ProfileSelectAvatarBackgroundRecentPhotos

import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileBodyColumnComponent.css";

export const ProfileBodyColumnComponent = (props) => {
  switch (props.stateComponent) {
    case 0:
      return (
        <div className={"ProfileBodyColumnComponent"}>
          <div className={"ProfileBodyColumnComponent__description"}>
            <span>Intro</span>
          </div>

          <div
            className={"ProfileBodyColumnComponent__buttonInfo"}
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <span>Edit Details</span>
          </div>

          <div
            className={"ProfileBodyColumnComponent__buttonInfo"}
            onClick={() => {
              props.toggleProfileAddHobbies(
                props.profileAddHobbiesVisibility,
                props.profileAddHobbiesOpacity
              );
            }}
          >
            <span>Add Hobbies</span>
          </div>
          <div className={"ProfileBodyColumnComponent__buttonInfo"}>
            <span>Edit Featured</span>
          </div>
        </div>
      );

    case 1:
      return (
        <div className={"ProfileBodyColumnComponent"}>
          <div className={"ProfileBodyColumnComponent__description"}>
            <span>Photos</span>

            <div className={"ProfileBodyColumnComponent__link"}>
              <NavLink to={"/profile/photos"}>See all</NavLink>
            </div>
          </div>

          <div className={"ProfileBodyColumnComponent__photoContainer"}>
            {props.user === null || props.user.RecentUploads.length === 0
              ? null
              : props.user.RecentUploads.map((e, index) => {
                  if (index <= 8) {
                    return <img key={index} src={e} alt="description" />;
                  }

                  return null;
                })}
          </div>
        </div>
      );

    case 2:
      return (
        <div className={"ProfileBodyColumnComponent"}>
          <div className={"ProfileBodyColumnComponent__description"}>
            <span>Friends</span>
            <div className={"ProfileBodyColumnComponent__link"}>
              <NavLink to={"/profile/friends"}>See all</NavLink>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

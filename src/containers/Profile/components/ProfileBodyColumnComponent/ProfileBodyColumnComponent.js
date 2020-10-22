import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileBodyColumnComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { ProfileBodyColumnComponentIntroItem } from "containers/Profile/components/ProfileBodyColumnComponentIntroItem";

import _ from "lodash/core";

export const ProfileBodyColumnComponent = (props) => {
  switch (props.stateComponent) {
    case 0:
      return (
        <div className={"profile-body-column-component"}>
          <div className={"profile-body-column-component__description"}>
            <span>Intro</span>
          </div>

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.WorkPlace.map(
                (e, index) => {
                  return (
                    <ProfileBodyColumnComponentIntroItem
                      key={_.uniqueId(e)}
                      Icon={WorkIcon}
                      mainTitle={`Position: ${e.position}; Company: ${e.company};`}
                    />
                  );
                }
              )
            : null}

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.College.map(
                (e, index) => {
                  return (
                    <ProfileBodyColumnComponentIntroItem
                      key={_.uniqueId(e)}
                      Icon={SchoolIcon}
                      mainTitle={`Studied at ${e.college}`}
                    />
                  );
                }
              )
            : null}

          {props.fullUserInfoAbout !== null
            ? props.fullUserInfoAbout.WorkAndEducation.HighSchool.map(
                (e, index) => {
                  return (
                    <ProfileBodyColumnComponentIntroItem
                      key={_.uniqueId(e)}
                      Icon={SchoolIcon}
                      mainTitle={`Went to ${e.school}`}
                    />
                  );
                }
              )
            : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.PlacesLived.CurrentCity !== "" ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={HomeIcon}
              mainTitle={`Lives in ${props.fullUserInfoAbout.PlacesLived.CurrentCity}`}
            />
          ) : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.PlacesLived.HomeTown !== "" ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={LocationOnIcon}
              mainTitle={`From ${props.fullUserInfoAbout.PlacesLived.HomeTown}`}
            />
          ) : null}

          {props.fullUserInfoAbout !== null &&
          props.fullUserInfoAbout.FamilyAndRelationships.Relationship !== "" ? (
            <ProfileBodyColumnComponentIntroItem
              Icon={FavoriteIcon}
              mainTitle={`Status: ${props.fullUserInfoAbout.FamilyAndRelationships.Relationship}`}
            />
          ) : null}

          <div
            className={"profile-body-column-component__button-info"}
            onClick={() => {
              props.toggleProfileEditDetails(
                props.profileEditDetailsVisibility,
                props.profileEditDetailsOpacity
              );
            }}
          >
            <span>Edit Details</span>
          </div>

          <div className={"profile-body-column-component__hobbies-section"}></div>

          <div
            className={"profile-body-column-component__button-info"}
            onClick={() => {
              props.toggleProfileAddHobbies(
                props.profileAddHobbiesVisibility,
                props.profileAddHobbiesOpacity
              );
            }}
          >
            <span>
              {props.fullUserInfoAbout !== null &&
              props.fullUserInfoAbout.Hobbies.length !== 0
                ? "Edit Hobbies"
                : "Add Hobbies"}
            </span>
          </div>
          <div className={"profile-body-column-component__button-info"}>
            <span>Edit Featured</span>
          </div>
        </div>
      );

    case 1:
      return (
        <div className={"profile-body-column-component"}>
          <div className={"profile-body-column-component__description"}>
            <span>Photos</span>

            <div className={"profile-body-column-component__link"}>
              <NavLink to={"/profile/photos"}>See all</NavLink>
            </div>
          </div>

          <div className={"profile-body-column-component__photo-container"}>
            {props.user === null || props.user.RecentUploads.length === 0
              ? null
              : props.user.RecentUploads.map((e, index) => {
                  if (index <= 8) {
                    return (
                      <img key={_.uniqueId(e)} src={e} alt="description" />
                    );
                  }

                  return null;
                })}
          </div>
        </div>
      );

    case 2:
      return (
        <div className={"profile-body-column-component"}>
          <div className={"profile-body-column-component__description"}>
            <span>Friends</span>
            <div className={"profile-body-column-component__link"}>
              <NavLink to={"/profile/friends"}>See all</NavLink>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

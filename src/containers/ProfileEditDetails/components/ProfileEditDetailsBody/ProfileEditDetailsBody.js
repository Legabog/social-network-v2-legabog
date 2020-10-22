import React from "react";
import "./ProfileEditDetailsBody.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import { ProfileEditDetailsBodySection } from "../ProfileEditDetailsBodySection";

export const ProfileEditDetailsBody = (props) => {
  return (
    <div className={"profile-edit-details-body"}>
      <div className={"profile-edit-details-body__description"}>
        <div className={"profile-edit-details-body__description-main"}>
          <span>Customize Your Intro</span>
        </div>
        <div className={"profile-edit-details-body__description-secondary"}>
          <span>
            Details you select will be public and won't post to News Feed
          </span>
        </div>
      </div>
      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
        }
        navLink={"/profile/about_work_and_education"}
        titleBold={"Work"}
        title={"Add a workplace"}
        Icon={WorkIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.WorkAndEducation.College
        }
        navLink={"/profile/about_work_and_education"}
        titleBold={"Education"}
        title={"Add a high school or college"}
        Icon={SchoolIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.PlacesLived.CurrentCity
        }
        navLink={"/profile/about_places"}
        titleBold={"Current City"}
        title={"Change your current city"}
        Icon={LocationCityIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.PlacesLived.HomeTown
        }
        navLink={"/profile/about_places"}
        titleBold={"Hometown"}
        title={"Change your hometown"}
        Icon={HomeRoundedIcon}
        {...props}
      />

      <hr />

      <ProfileEditDetailsBodySection
        componentArguments={
          props.fullUserInfoAbout === null
            ? null
            : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
        }
        navLink={"/profile/about_family_and_relationships"}
        titleBold={"Relationship"}
        title={"Change your relationship"}
        Icon={FavoriteRoundedIcon}
        {...props}
      />
    </div>
  );
};


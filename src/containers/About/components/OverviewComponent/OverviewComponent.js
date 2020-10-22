import React from "react";
import "./OverviewComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import { OverviewComponentSection } from "../OverviewComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";

export const OverviewComponent = (props) => {
  return (
    <div className={"OverviewComponent__wrapper"}>
      { props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"OverviewComponent"}>
          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
            }
            fieldReducer={props.overviewAddAWorkplace}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAWorkplace}
            editTitle={"Add a workplace"}
            deleteTitle={"Delete a workplace"}
            title={"Add a workplace"}
            Icon={WorkIcon}
            activeInputs={4}
            ativeInputPlaceholder1={"Company"}
            ativeInputPlaceholder2={"Position"}
            ativeInputPlaceholder3={"City/Town"}
            ativeInputPlaceholder4={"Description"}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.HighSchool
            }
            fieldReducer={props.overviewAddAHighSchool}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHighSchool}
            title={"Add a high school"}
            editTitle={"Add a high school"}
            deleteTitle={"Delete a high school"}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"High School"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.College
            }
            fieldReducer={props.overviewAddACollege}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACollege}
            title={"Add a college"}
            editTitle={"Add a college"}
            deleteTitle={"Delete a college"}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"College"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.PlacesLived.CurrentCity
            }
            fieldReducer={props.overviewAddACurrentCity}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACurrentCity}
            title={"Add current city"}
            editTitle={"Edit current city"}
            deleteTitle={"Delete current city"}
            Icon={LocationCityIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Current City"}
            {...props}
          />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.PlacesLived.HomeTown
            }
            fieldReducer={props.overviewAddAHometown}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHometown}
            title={"Add hometown"}
            editTitle={"Edit hometown"}
            deleteTitle={"Delete hometown"}
            Icon={HomeRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Hometown"}
            {...props}
          />

          <hr />

          <OverviewComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
            }
            fieldReducer={props.overviewAddARelationshipStatus}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteARelationshipStatus}
            title={"Add a relationship status"}
            editTitle={"Edit a relationship status"}
            deleteTitle={"Delete a relationship status"}
            Icon={FavoriteRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Relationship status"}
            {...props}
          />
        </div>
      )}
    </div>
  );
};


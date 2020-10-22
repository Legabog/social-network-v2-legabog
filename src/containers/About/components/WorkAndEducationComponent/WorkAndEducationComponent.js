import React from "react";
import "./WorkAndEducationComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import { WorkAndEducationComponentSection } from "../WorkAndEducationComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader";

export const WorkAndEducationComponent = (props) => {
  return (
    <div className={"WorkAndEducationComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"WorkAndEducationComponent"}>
          <WorkAndEducationComponentSection
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
            titleBold={"Worplace"}
            Icon={WorkIcon}
            activeInputs={4}
            ativeInputPlaceholder1={"Company"}
            ativeInputPlaceholder2={"Position"}
            ativeInputPlaceholder3={"City/Town"}
            ativeInputPlaceholder4={"Description"}
            {...props}
          />

          <hr />

          <WorkAndEducationComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.HighSchool
            }
            fieldReducer={props.overviewAddAHighSchool}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteAHighSchool}
            title={"Add a high school"}
            titleBold={"High School"}
            editTitle={"Add a high school"}
            deleteTitle={"Delete a high school"}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"High School"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <hr />

          <WorkAndEducationComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.WorkAndEducation.College
            }
            fieldReducer={props.overviewAddACollege}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteACollege}
            title={"Add a college"}
            titleBold={"College"}
            editTitle={"Add a college"}
            deleteTitle={"Delete a college"}
            Icon={SchoolIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"College"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};


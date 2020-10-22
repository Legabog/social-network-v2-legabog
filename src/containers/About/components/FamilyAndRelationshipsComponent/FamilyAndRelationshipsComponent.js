import React from "react";
import "./FamilyAndRelationshipsComponent.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

import { FamilyAndRelationshipsComponentSection } from "../FamilyAndRelationshipsComponentSection";
import { CirclePreloader } from "pres-components/CirclePreloader/CirclePreloader";

export const FamilyAndRelationshipsComponent = (props) => {
  return (
    <div className={"FamilyAndRelationshipsComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"FamilyAndRelationshipsComponent"}>
          <FamilyAndRelationshipsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.Relationship
            }
            fieldReducer={props.overviewAddARelationshipStatus}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.overviewDeleteARelationshipStatus}
            title={"Add a relationship status"}
            titleBold={"Relationship"}
            editTitle={"Edit a relationship status"}
            deleteTitle={"Delete a relationship status"}
            Icon={FavoriteIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Relationship status"}
            {...props}
          />

          <FamilyAndRelationshipsComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.FamilyAndRelationships.FamilyMembers
            }
            fieldReducer={props.familyAndRelationshipsAddFamilyMember}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.familyAndRelationshipsDeleteFamilyMember}
            title={"Add a family member"}
            titleBold={"Family Members"}
            editTitle={"Add a family member"}
            deleteTitle={"Delete a family member"}
            Icon={PersonIcon}
            activeInputs={3}
            ativeInputPlaceholder1={"Name"}
            ativeInputPlaceholder2={"Sername"}
            ativeInputPlaceholder3={"Status"}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};

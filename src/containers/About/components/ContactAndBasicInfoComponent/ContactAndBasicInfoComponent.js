import React from "react";
import "./ContactAndBasicInfoComponent.css";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LinkIcon from "@material-ui/icons/Link";
import TranslateIcon from "@material-ui/icons/Translate";
import CakeIcon from "@material-ui/icons/Cake";
import FaceIcon from "@material-ui/icons/Face";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LooksIcon from "@material-ui/icons/Looks";
import MoodIcon from "@material-ui/icons/Mood";

import { ContactAndBasicInfoComponentSection } from "../ContactAndBasicInfoComponentSection";

import { CirclePreloader } from "pres-components/CirclePreloader";

export const ContactAndBasicInfoComponent = (props) => {
  return (
    <div className={"ContactAndBasicInfoComponent__wrapper"}>
      {props.fetchFullUserInfoAbout ? (
        <CirclePreloader />
      ) : (
        <div className={"ContactAndBasicInfoComponent"}>
          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.Address
            }
            fieldReducer={props.contactAndBasicInfoAddAddress}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteAddress}
            title={"Add your address"}
            titleBold={"Contact Info"}
            editTitle={"Edit your address"}
            deleteTitle={"Delete your address"}
            Icon={HomeRoundedIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Your address"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.MobilePhone
            }
            fieldReducer={props.contactAndBasicInfoAddMobilePhone}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteMobilePhone}
            title={"Add your mobile phone"}
            editTitle={"Add another mobile phone"}
            deleteTitle={"Delete your mobile phone"}
            Icon={PhoneRoundedIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"Your mobile phone"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <hr />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.Websites
            }
            fieldReducer={props.contactAndBasicInfoAddWebsite}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteWebsite}
            title={"Add a website"}
            titleBold={"Websites and Social links"}
            editTitle={"Add a website"}
            deleteTitle={"Delete a website"}
            Icon={LinkIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"Website link"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.ContactInfo.SocialLinks
            }
            fieldReducer={props.contactAndBasicInfoAddSocialLink}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteSocialLink}
            title={"Add a social link"}
            editTitle={"Add a social link"}
            deleteTitle={"Delete a social link"}
            Icon={LinkIcon}
            activeInputs={2}
            ativeInputPlaceholder1={"Social link"}
            ativeInputPlaceholder2={"Description"}
            {...props}
          />

          <hr />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Gender
            }
            fieldReducer={props.contactAndBasicInfoAddGender}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteGender}
            title={"Add your gender"}
            titleBold={"Basic Info"}
            editTitle={"Edit your gender"}
            deleteTitle={"Delete your gender"}
            Icon={FaceIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Gender"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Language
            }
            fieldReducer={props.contactAndBasicInfoAddLanguage}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteLanguage}
            title={"Add your language"}
            editTitle={"Edit your language"}
            deleteTitle={"Delete your language"}
            Icon={TranslateIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Language"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.ReligionViews
            }
            fieldReducer={props.contactAndBasicInfoAddReligionViews}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteReligionViews}
            title={"Add your religion views"}
            editTitle={"Edit your religion views"}
            deleteTitle={"Delete your religion views"}
            Icon={LooksIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Religion views"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.PoliticalViews
            }
            fieldReducer={props.contactAndBasicInfoAddPoliticalViews}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeletePoliticalViews}
            title={"Add your political views"}
            editTitle={"Edit your political views"}
            deleteTitle={"Delete your political views"}
            Icon={AccountBalanceIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Political views"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.InterestedMale
            }
            fieldReducer={props.contactAndBasicInfoAddInterestedMale}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteInterestedMale}
            title={"Add who you're interested in"}
            editTitle={"Edit"}
            deleteTitle={"Delete"}
            Icon={MoodIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Who you're interested in"}
            {...props}
          />

          <ContactAndBasicInfoComponentSection
            componentArguments={
              props.fullUserInfoAbout === null
                ? null
                : props.fullUserInfoAbout.BasicInfo.Birthday_data
            }
            fieldReducer={props.contactAndBasicInfoAddBirthday}
            addReducer={props.changeFieldFirebase}
            deleteReducer={props.contactAndBasicInfoDeleteBirthday}
            title={"Add your birth date"}
            editTitle={"Edit your birth date"}
            deleteTitle={"Delete your birth date"}
            Icon={CakeIcon}
            activeInputs={1}
            ativeInputPlaceholder1={"Your birth date"}
            {...props}
          />

          <hr />
        </div>
      )}
    </div>
  );
};


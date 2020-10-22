import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./About.css";

import {
  overviewAddAWorkplace,
  overviewDeleteAWorkplace,
  overviewAddAHighSchool,
  overviewDeleteAHighSchool,
  overviewAddACollege,
  overviewDeleteACollege,
  overviewAddACurrentCity,
  overviewDeleteACurrentCity,
  overviewAddAHometown,
  overviewDeleteAHometown,
  overviewAddARelationshipStatus,
  overviewDeleteARelationshipStatus,
  placeslivedAddACity,
  placeslivedDeleteACity,
  contactAndBasicInfoAddAddress,
  contactAndBasicInfoDeleteAddress,
  contactAndBasicInfoAddMobilePhone,
  contactAndBasicInfoDeleteMobilePhone,
  contactAndBasicInfoAddWebsite,
  contactAndBasicInfoDeleteWebsite,
  contactAndBasicInfoAddSocialLink,
  contactAndBasicInfoDeleteSocialLink,
  contactAndBasicInfoAddGender,
  contactAndBasicInfoDeleteGender,
  contactAndBasicInfoAddLanguage,
  contactAndBasicInfoDeleteLanguage,
  contactAndBasicInfoAddBirthday,
  contactAndBasicInfoDeleteBirthday,
  contactAndBasicInfoAddInterestedMale,
  contactAndBasicInfoDeleteInterestedMale,
  contactAndBasicInfoAddReligionViews,
  contactAndBasicInfoDeleteReligionViews,
  contactAndBasicInfoAddPoliticalViews,
  contactAndBasicInfoDeletePoliticalViews,
  familyAndRelationshipsAddFamilyMember,
  familyAndRelationshipsDeleteFamilyMember,
  detailsAboutYouAddDetails,
  detailsAboutYouDeleteDetails,
  detailsAboutYouAddNamePronunciations,
  detailsAboutYouDeleteNamePronunciations,
  detailsAboutYouAddOtherName,
  detailsAboutYouDeleteOtherName,
  detailsAboutYouAddFavoriteQuotes,
  detailsAboutYouDeleteFavoriteQuotes,
  lifeEventsAddLifeEvent,
  lifeEventsDeleteLifeEvent,
  addFromTempHobbies,
  deleteHobbies,
  changeFieldFirebase,
} from "redux/about-component-reducer"

import { AboutLeftSection } from "./components/AboutLeftSection";
import { AboutRightSection } from "./components/AboutRightSection";

export const About_ = (props) => {
  return (
    <div className={"about__wrapper"}>
      <div className={"about"}>
        <AboutLeftSection {...props} />
        <AboutRightSection {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeAccountEmail: state.authReducer.activeAccountEmail,
  fullUserInfoAbout: state.aboutComponentReducer.fullUserInfoAbout,
  fetchFullUserInfoAbout: state.aboutComponentReducer.fetchFullUserInfoAbout,
});

export const About = compose(
  withRouter,
  connect(mapStateToProps, {
    overviewAddAWorkplace,
  overviewDeleteAWorkplace,
  overviewAddAHighSchool,
  overviewDeleteAHighSchool,
  overviewAddACollege,
  overviewDeleteACollege,
  overviewAddACurrentCity,
  overviewDeleteACurrentCity,
  overviewAddAHometown,
  overviewDeleteAHometown,
  overviewAddARelationshipStatus,
  overviewDeleteARelationshipStatus,
  placeslivedAddACity,
  placeslivedDeleteACity,
  contactAndBasicInfoAddAddress,
  contactAndBasicInfoDeleteAddress,
  contactAndBasicInfoAddMobilePhone,
  contactAndBasicInfoDeleteMobilePhone,
  contactAndBasicInfoAddWebsite,
  contactAndBasicInfoDeleteWebsite,
  contactAndBasicInfoAddSocialLink,
  contactAndBasicInfoDeleteSocialLink,
  contactAndBasicInfoAddGender,
  contactAndBasicInfoDeleteGender,
  contactAndBasicInfoAddLanguage,
  contactAndBasicInfoDeleteLanguage,
  contactAndBasicInfoAddBirthday,
  contactAndBasicInfoDeleteBirthday,
  contactAndBasicInfoAddInterestedMale,
  contactAndBasicInfoDeleteInterestedMale,
  contactAndBasicInfoAddReligionViews,
  contactAndBasicInfoDeleteReligionViews,
  contactAndBasicInfoAddPoliticalViews,
  contactAndBasicInfoDeletePoliticalViews,
  familyAndRelationshipsAddFamilyMember,
  familyAndRelationshipsDeleteFamilyMember,
  detailsAboutYouAddDetails,
  detailsAboutYouDeleteDetails,
  detailsAboutYouAddNamePronunciations,
  detailsAboutYouDeleteNamePronunciations,
  detailsAboutYouAddOtherName,
  detailsAboutYouDeleteOtherName,
  detailsAboutYouAddFavoriteQuotes,
  detailsAboutYouDeleteFavoriteQuotes,
  lifeEventsAddLifeEvent,
  lifeEventsDeleteLifeEvent,
  addFromTempHobbies,
  deleteHobbies,
  changeFieldFirebase,
  })
)(About_);
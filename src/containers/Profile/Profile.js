import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Profile.css";

import {
  changeAvatar,
  changeAvatarPreHandler,
  changeAvatarHandler,
  avatarLoaderBase64Handler,
  sendAvatar,
  avatarBackgroundLoaderBase64Handler,
  avatarBackgroundLoaderUrlHandler,
  toggleSwitcherAvatarBackgroundURLorBase64,
  clearTempAvatarBackgroundHandler,
  changeAvatarBackgroundHandler,
  changeAvatarBackgroundURLHandler,
  removeAvatarBackgroundHandler,
  changeBioHandler,
} from "redux/user-reducer";

import {
  toggleProfileUpdateAvatar,
  closeHandlerProfileUpdate,
} from "redux/profile-update-avatar-reducer";

import {
  toggleProfileSelectAvatarBackground,
  toggleWindowConfirmBackground,
} from "redux/profile-select-avatar-background-reducer";

import { toggleProfileEditDetails } from "redux/profile-edit-details-about-you-reducer";
import { toggleProfileAddHobbies } from "redux/profile-add-hobbies-reducer";

import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileBody } from "./components/ProfileBody";
import { ProfileUpdateAvatar } from "containers/ProfileUpdateAvatar";
import { ProfileSelectAvatarBackground } from "containers/ProfileSelectAvatarBackground";
import { ProfileAddHobbies } from "containers/ProfileAddHobbies";
import { ProfileEditDetails } from "containers/ProfileEditDetails";

const Profile_ = (props) => {
  return (
    <>
      {props.location.pathname === "/profile" ? (
        <div className={"profile"}>
          <ProfileHeader {...props} />
          <ProfileUpdateAvatar {...props} />
          <ProfileSelectAvatarBackground {...props} />
          <ProfileAddHobbies {...props} />
          <ProfileEditDetails {...props} />
          <ProfileBody {...props} />
        </div>
      ) : (
        <div className={"profile"}>
          <ProfileHeader {...props} />
          <ProfileUpdateAvatar {...props} />
          <ProfileSelectAvatarBackground {...props} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  activeAccountEmail: state.authReducer.activeAccountEmail,
  fullUserInfoAbout: state.aboutComponentReducer.fullUserInfoAbout,
  fetchFullUserInfoAbout: state.aboutComponentReducer.fetchFullUserInfoAbout,
  user: state.userReducer.user,
  fetchBio: state.userReducer.fetchBio,
  fetchAvatar: state.userReducer.fetchAvatar,
  fetchProfileAvatars: state.userReducer.fetchProfileAvatars,
  fetchAvatarBackground: state.userReducer.fetchAvatarBackground,
  switcherAvatarBackgroundURLorBase64:
    state.userReducer.switcherAvatarBackgroundURLorBase64,
  // profile update avatar reducer
  profileUpdateVisibility:
    state.profileUpdateAvatarReducer.profileUpdateVisibility,
  profileUpdateOpacity: state.profileUpdateAvatarReducer.profileUpdateOpacity,
  profileUpdateStateComponent:
    state.profileUpdateAvatarReducer.profileUpdateStateComponent,
  profileUpdateConditionForAvatar:
    state.profileUpdateAvatarReducer.profileUpdateConditionForAvatar,
  profileUpdateTempAvatar:
    state.profileUpdateAvatarReducer.profileUpdateTempAvatar,
  profileUpdateTempAvatarName:
    state.profileUpdateAvatarReducer.profileUpdateTempAvatarName,
  profileUpdateTempAvatarBackground:
    state.profileUpdateAvatarReducer.profileUpdateTempAvatarBackground,
  profileUpdateTempAvatarBackgroundName:
    state.profileUpdateAvatarReducer.profileUpdateTempAvatarBackgroundName,
  // profile select avatar background
  windowConfirmBackgroundVisibility:
    state.profileSelectAvatarBackgroundReducer
      .windowConfirmBackgroundVisibility,
  windowConfirmBackgroundOpacity:
    state.profileSelectAvatarBackgroundReducer.windowConfirmBackgroundOpacity,
  profileSelectVisibility:
    state.profileSelectAvatarBackgroundReducer.profileSelectVisibility,
  profileSelectOpacity:
    state.profileSelectAvatarBackgroundReducer.profileSelectOpacity,
  profileSelectState:
    state.profileSelectAvatarBackgroundReducer.profileSelectState,
  // profile edit details component
  profileEditDetailsVisibility:
    state.profileEditDetailsReducer.profileEditDetailsVisibility,
  profileEditDetailsOpacity:
    state.profileEditDetailsReducer.profileEditDetailsOpacity,
  // profile add hobbies component
  profileAddHobbiesStateComponent:
    state.profileAddHobbiesReducer.profileAddHobbiesStateComponent,
  profileAddHobbiesSearchListHobbies:
    state.profileAddHobbiesReducer.profileAddHobbiesSearchListHobbies,
  profileAddHobbiesVisibility:
    state.profileAddHobbiesReducer.profileAddHobbiesVisibility,
  profileAddHobbiesOpacity:
    state.profileAddHobbiesReducer.profileAddHobbiesOpacity,
});

export const Profile = compose(
  withRouter,
  connect(mapStateToProps, {
    changeAvatar,
    changeAvatarPreHandler,
    changeAvatarHandler,
    avatarLoaderBase64Handler,
    sendAvatar,
    avatarBackgroundLoaderBase64Handler,
    avatarBackgroundLoaderUrlHandler,
    toggleSwitcherAvatarBackgroundURLorBase64,
    clearTempAvatarBackgroundHandler,
    changeAvatarBackgroundHandler,
    changeAvatarBackgroundURLHandler,
    removeAvatarBackgroundHandler,
    changeBioHandler,

    toggleProfileUpdateAvatar,
    closeHandlerProfileUpdate,

    toggleProfileSelectAvatarBackground,
    toggleWindowConfirmBackground,

    toggleProfileEditDetails,

    toggleProfileAddHobbies
  })
)(Profile_);

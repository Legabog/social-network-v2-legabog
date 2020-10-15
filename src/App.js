import React, { Suspense, useEffect } from "react";
import { Routes } from "./utils/routes/routes-config";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, withRouter } from "react-router-dom";

import {
  setUser,
  setActiveUser,
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
} from "./redux/user-reducer";
import {
  signIn,
  signUp,
  autoLogin,
  logoutButton,
  toggleLoginError,
} from "./redux/auth-reducer";
import {
  displayRegistrationBlockTrue,
  displayRegistrationBlockFalse,
} from "./redux/registration-block-reducer";
import {
  toggleProfileUpdateAvatar,
  closeHandlerProfileUpdate,
} from "./redux/profile-update-avatar-reducer";
import {
  toggleProfileSelectAvatarBackground,
  toggleWindowConfirmBackground,
} from "./redux/profile-select-avatar-background-reducer";
import {
  togglePrivacyGuide,
  togglePrivacyGuideState,
} from "./redux/welcome-component-reducer";
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
} from "./redux/about-component-reducer";
import { toggleProfileEditDetails } from "./redux/profile-edit-details-about-you-reducer";
import { toggleProfileAddHobbies } from "./redux/profile-add-hobbies-reducer";
import { getMusicAlbumsData } from "./redux/musicalbums-reducer";
import {
  addToPlayList,
  switchStateOfPlayLists,
  addTrackToPlayList,
  getMyOwnPlayLists,
  createNewPlayList,
  deleteOwnPlayList,
  deleteTrackFromPlayList,
} from "./redux/musicalplaylists-reducer";
import {
  setMusicForPlayer,
  toggleIsPlaying,
  playPlayer,
  pausePlayer,
  setIndexOfTrack,
  nextTrack,
  previousTrack,
  shuffleMusic,
  setActiveTrackAndPlayerPlayListNull,
} from "./redux/musicplayer-reducer";

// ---------Main Components

import Root from "./components/Root/Root";

// --------Logged in user

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import MusicPlayerPanel from "./components/MusicPlayerPanel/MusicPlayerPanel";
import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";
import Profile from "./components/Profile/Profile";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";

// ---------Not logged in user

import Login from "./components/Login/Login";
import RegistrationBlock from "./components/Login/RegistrationBlock/RegistrationBlock";

// -----Lazy components

const Music = React.lazy(() => import("./components/Music/Music"));

const MusicList = React.lazy(() =>
  import("./components/Music/MusicList/MusicList")
);

const ArtistsList = React.lazy(() =>
  import("./components/Music/MusicList/Artists/Artists")
);

const ArtistItemRouter = React.lazy(() =>
  import("./components/Music/ArtistItemRouter/ArtistItemRouter")
);

const AlbumsList = React.lazy(() =>
  import("./components/Music/MusicList/Albums/Albums")
);

const PlayLists = React.lazy(() =>
  import("./components/Music/MusicList/PlayLists/PlayLists")
);

const CreateAlbum = React.lazy(() =>
  import("./components/Music/MusicList/CreateAlbum/CreateAlbum")
);

const OwnPlayListsRouter = React.lazy(() =>
  import("./components/Music/OwnPlayListsRouter/OwnPlayListsRouter")
);

const LoginRoute = React.lazy(() =>
  import("./components/Login/LoginRoute/LoginRoute")
);

const ConfirmEmailRoute = React.lazy(() =>
  import("./components/common/ConfirmEmailRoute/ConfirmEmailRoute")
);

const ConfirmedEmailRoute = React.lazy(() =>
  import("./components/common/ConfirmedEmailRoute/ConfirmedEmailRoute")
);

const MusicPlayer = React.lazy(() =>
  import("./components/Music/MusicPlayer/MusicPlayer")
);

//

const App = (props) => {
  useEffect(() => {
    props.autoLogin();
    props.getMusicAlbumsData();
    props.getMyOwnPlayLists();

    // eslint-disable-next-line
  }, []);

  if (!!localStorage.getItem("token")) {
    return (
      <Root component={<MusicPlayerPanel {...props} />}>
        {props.Fetching ? <Preloader /> : null}
        <Route
          path={Routes.MAIN}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Body>
                <Sidebar {...props} />
                <Feed {...props} />
                <Widgets />
              </Body>
            </>
          )}
        />

        <Route
          path={Routes.MUSIC}
          exact
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <Music />
                </Body>
              </Suspense>
            </>
          )}
        />
        <Route
          path={Routes.MUSIC_LIST}
          exact
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <MusicList />
                </Body>
              </Suspense>
            </>
          )}
        />
        <Route
          path={Routes.MUSIC_LIST_ARTISTS}
          exact
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <ArtistsList />
                </Body>
              </Suspense>
            </>
          )}
        />
        <Route
          path={Routes.MUSIC_LIST_ALBUMS}
          exact
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <AlbumsList />
                </Body>
              </Suspense>
            </>
          )}
        />
        <Route
          path={Routes.MUSIC_LIST_PLAYLISTS}
          exact
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <PlayLists />
                </Body>
              </Suspense>
            </>
          )}
        />
        <Route
          exact
          path={Routes.MUSIC_LIST_CREATE_PLAYLIST}
          render={() => (
            <>
              <Suspense fallback={<Preloader />}>
                <Header {...props} />
                <Body>
                  <CreateAlbum
                    fetch={props.fetch}
                    addToPlayList={props.createNewPlayList}
                    update={props.getMyOwnPlayLists}
                  />
                </Body>
              </Suspense>
            </>
          )}
        />
        {props.musicAlbums.map((e, index) => (
          <Route
            key={index}
            path={Routes.MUSIC_LIST_ARTISTS + `/${e.author}`}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <ArtistItemRouter nameArtist={e.author} />
                  </Body>
                </Suspense>
              </>
            )}
          />
        ))}
        {props.musicAlbums.map((e, index) => (
          <Route
            key={index}
            path={Routes.MUSIC_PLAYER + `/${e.author}/${e.title}`}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <MusicPlayer
                      nameArtist={e.author}
                      albumTitle={e.title}
                      img={e.albumcoverUrl}
                      switchStateOfPlayLists={props.switchStateOfPlayLists}
                      addTrackToPlayList={props.addTrackToPlayList}
                      playPlayer={props.playPlayer}
                      setMusicForPlayer={props.setMusicForPlayer}
                      setIndexOfTrack={props.setIndexOfTrack}
                      musicPlayerPlayList={props.musicPlayerPlayList}
                      indexOfPlayingTrack={props.indexOfPlayingTrack}
                      isPlaying={props.isPlaying}
                      activeTrack={props.activeTrack}
                      disablerButtonPlay={props.disablerButtonPlay}
                    />
                  </Body>
                </Suspense>
              </>
            )}
          />
        ))}
        {props.ownPlayLists.map((e, index) => (
          <Route
            key={index}
            path={`/music-playlists/${e.title}/`}
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
                  <Header {...props} />
                  <Body>
                    <OwnPlayListsRouter
                      id={e._id}
                      img={e.playlistcoverUrl}
                      title={e.title}
                      description={e.description}
                      tracks={e.tracks}
                      {...props}
                    />
                  </Body>
                </Suspense>
              </>
            )}
          />
        ))}

        <Route
          path={Routes.WELCOME}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Body>
                <Sidebar {...props} />
                <Welcome {...props} />
                <Widgets />
              </Body>
            </>
          )}
        />
        <Route
          path={Routes.FRIENDS}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Preloader />
            </>
          )}
        />
        <Route
          path={Routes.GROUPS}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Preloader />
            </>
          )}
        />
        <Route
          path={Routes.MESSAGES}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Preloader />
            </>
          )}
        />

        <Route
          path={Routes.PROFILE}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Profile {...props} />
            </>
          )}
        />
        {Routes.PROFILE_ABOUT.map((e, index) => (
          <Route
            key={index}
            path={e}
            exact
            render={() => (
              <>
                <Header {...props} />
                <Profile {...props} />
                <About {...props} />
              </>
            )}
          />
        ))}
        <Route
          path={Routes.PROFILE_FRIENDS}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Profile {...props} />
              <h1>Friends</h1>
            </>
          )}
        />
        <Route
          path={Routes.PROFILE_PHOTOS}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Profile {...props} />
              <h1>Photos</h1>
            </>
          )}
        />
        <Route
          path={Routes.PROFILE_ARCHIVE}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Profile {...props} />
              <h1>Archive</h1>
            </>
          )}
        />
        <Route
          path={Routes.PROFILE_VIDEOS}
          exact
          render={() => (
            <>
              <Header {...props} />
              <Profile {...props} />
              <h1>Videos</h1>
            </>
          )}
        />
        <Route render={() => <ErrorRoute />} />
      </Root>
    );
  } else {
    return (
      <Root>
        {props.fetching ? (
          <Preloader />
        ) : (
          <>
            <Route
              path={Routes.MAIN}
              exact
              render={() => (
                <>
                  <Login {...props} />
                  <RegistrationBlock {...props} />
                </>
              )}
            />
            <Route
              path={Routes.LOGIN}
              exact
              render={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <LoginRoute {...props} />
                    <RegistrationBlock {...props} />
                  </Suspense>
                </>
              )}
            />
            <Route
              path={Routes.CONFIRM_EMAIL}
              exact
              render={() => (
                <Suspense fallback={<Preloader />}>
                  <ConfirmEmailRoute {...props} />
                </Suspense>
              )}
            />

            <Route
              path={Routes.CONFIRMED_EMAIL}
              exact
              render={() => (
                <Suspense fallback={<Preloader />}>
                  <ConfirmedEmailRoute />
                </Suspense>
              )}
            />
            <Route render={() => <ErrorRoute />} />
          </>
        )}
      </Root>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    // user-reducer
    user: state.userReducer.user,
    fetchBio: state.userReducer.fetchBio,
    fetchAvatar: state.userReducer.fetchAvatar,
    fetchProfileAvatars: state.userReducer.fetchProfileAvatars,
    fetchAvatarBackground: state.userReducer.fetchAvatarBackground,
    switcherAvatarBackgroundURLorBase64:
      state.userReducer.switcherAvatarBackgroundURLorBase64,
    // auth-reducer
    activeAccountEmail: state.authReducer.activeAccountEmail,
    token: state.authReducer.token,
    fetching: state.authReducer.fetching,
    registrationFetching: state.authReducer.registrationFetching,
    registrationError: state.authReducer.registrationError,
    loginError: state.authReducer.loginError,
    // registration block reducer
    visibilityRegistrationBlock:
      state.registrationBlockReducer.visibilityRegistrationBlock,
    opacityRegistrationBlock:
      state.registrationBlockReducer.opacityRegistrationBlock,
    // music albums reducer
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    // muisc playlists reducer
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    deleteTrackFetch: state.musicPlayListReducer.deleteTrackFetch,
    // muisc player reducer
    isPlaying: state.musicPlayerReducer.isPlaying,
    musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
    indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
    activeTrack: state.musicPlayerReducer.activeTrack,
    disablerButtonNext: state.musicPlayerReducer.disablerButtonNext,
    disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
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
    // welcome component
    privacyGuideState: state.welcomeComponentReducer.privacyGuideState,
    privacyGuideVisibility:
      state.welcomeComponentReducer.privacyGuideVisibility,
    privacyGuideOpacity: state.welcomeComponentReducer.privacyGuideOpacity,
    // about component
    fullUserInfoAbout: state.aboutComponentReducer.fullUserInfoAbout,
    fetchFullUserInfoAbout: state.aboutComponentReducer.fetchFullUserInfoAbout,
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
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setUser,
    setActiveUser,
    changeAvatar,
    avatarLoaderBase64Handler,
    sendAvatar,
    changeAvatarPreHandler,
    changeAvatarHandler,
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
    togglePrivacyGuide,
    togglePrivacyGuideState,
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
    detailsAboutYouAddNamePronunciations,
    detailsAboutYouDeleteNamePronunciations,
    detailsAboutYouAddOtherName,
    detailsAboutYouDeleteOtherName,
    detailsAboutYouAddFavoriteQuotes,
    detailsAboutYouDeleteFavoriteQuotes,
    lifeEventsAddLifeEvent,
    lifeEventsDeleteLifeEvent,
    detailsAboutYouAddDetails,
    detailsAboutYouDeleteDetails,
    placeslivedAddACity,
    placeslivedDeleteACity,
    changeFieldFirebase,
    toggleProfileEditDetails,
    toggleProfileAddHobbies,
    addFromTempHobbies,
    deleteHobbies,
    signIn,
    signUp,
    displayRegistrationBlockTrue,
    displayRegistrationBlockFalse,
    autoLogin,
    logoutButton,
    toggleLoginError,
    getMusicAlbumsData,
    addToPlayList,
    switchStateOfPlayLists,
    addTrackToPlayList,
    getMyOwnPlayLists,
    createNewPlayList,
    deleteOwnPlayList,
    deleteTrackFromPlayList,
    setMusicForPlayer,
    toggleIsPlaying,
    playPlayer,
    pausePlayer,
    setIndexOfTrack,
    nextTrack,
    previousTrack,
    shuffleMusic,
    setActiveTrackAndPlayerPlayListNull,
  })
)(App);

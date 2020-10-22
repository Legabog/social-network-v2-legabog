import db from "utils/firebase/firebase";
import { storage, addToArray } from "utils/firebase/firebase";
import { setFullUserInfoAbout } from "./about-component-reducer";
import {
  closeHandlerProfileUpdate,
  setTempAvatar,
  setTempAvatarBackground,
  setTempAvatarBackgroundName,
  setTempAvatarName,
  toggleProfileUpdateConditionForAvatar,
  toggleProfileUpdateStateComponent,
} from "./profile-update-avatar-reducer";

const SET_USER = "SET_USER";
const CHANGE_AVATAR = "CHANGE_AVATAR";
const ADD_AVATAR_TO_PROFILE_AVATARS = "SET_ADD_AVATAR_TO_PROFILE_AVATARS";
const ADD_AVATAR_BACKGROUND_TO_PROFILE_AVATAR_BACKGROUNDS =
  "ADD_AVATAR_BACKGROUND_TO_PROFILE_AVATAR_BACKGROUNDS";
const ADD_AVATAR_TO_RECENT_UPLOADS = "ADD_AVATAR_TO_RECENT_UPLOADS";
const ADD_AVATAR_BACKGROUND_TO_RECENT_UPLOADS =
  "ADD_AVATAR_BACKGROUND_TO_RECENT_UPLOADS";
const CHANGE_AVATAR_BACKGROUND = "CHANGE_AVATAR_BACKGROUND";
const CHANGE_BIO = "CHANGE_BIO";
const TOGGLE_FETCH_BIO = "TOGGLE_FETCH_BIO";
const TOGGLE_FETCH_AVATAR = "TOGGLE_FETCH_AVATAR";
const TOGGLE_FETCH_PROFILE_AVATARS = "TOGGLE_FETCH_PROFILE_AVATARS";
const TOGGLE_FETCH_PROFILE_AVATAR_BACKGROUNDS =
  "TOGGLE_FETCH_PROFILE_AVATAR_BACKGROUNDS";
const TOGGLE_FETCH_AVATAR_BACKGROUND = "TOGGLE_FETCH_AVATAR_BACKGROUND";
const TOGGLE_SWITCHER_CONDITION_OF_CHANGE_AVATAR_BACKGROUND =
  "TOGGLE_SWITCHER_CONDITION_OF_CHANGE_AVATAR_BACKGROUND";

let initialState = {
  switcherAvatarBackgroundURLorBase64: 0,
  fetchBio: false,
  fetchAvatar: false,
  fetchProfileAvatars: false,
  fetchAvatarBackground: false,
  fetchAvatarBackgrounds: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case CHANGE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          Avatars: { ...state.user.Avatars, activeAvatarUrl: action.avatar },
        },
      };

    case ADD_AVATAR_TO_PROFILE_AVATARS:
      if (state.user.Avatars.pofileAvatars.includes(action.avatar)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            Avatars: {
              ...state.user.Avatars,
              pofileAvatars: [
                ...state.user.Avatars.pofileAvatars,
                action.avatar,
              ],
            },
          },
        };
      }

    case ADD_AVATAR_TO_RECENT_UPLOADS:
      if (state.user.RecentUploads.includes(action.avatar)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            RecentUploads: [...state.user.RecentUploads, action.avatar],
          },
        };
      }

    case ADD_AVATAR_BACKGROUND_TO_RECENT_UPLOADS:
      if (state.user.RecentUploads.includes(action.background)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            RecentUploads: [...state.user.RecentUploads, action.background],
          },
        };
      }

    case CHANGE_AVATAR_BACKGROUND:
      return {
        ...state,
        user: {
          ...state.user,
          AvatarBackground: {
            ...state.user.AvatarBackground,
            activeAvatarBackgroundUrl: action.background,
          },
        },
      };

    case ADD_AVATAR_BACKGROUND_TO_PROFILE_AVATAR_BACKGROUNDS:
      if (
        state.user.AvatarBackground.pofileAvatarBackgrounds.includes(
          action.background
        )
      ) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            AvatarBackground: {
              ...state.user.AvatarBackground,
              pofileAvatarBackgrounds: [
                ...state.user.AvatarBackground.pofileAvatarBackgrounds,
                action.background,
              ],
            },
          },
        };
      }

    case CHANGE_BIO:
      return {
        ...state,
        user: { ...state.user, Bio: action.bio },
      };
    case TOGGLE_FETCH_BIO:
      return {
        ...state,
        fetchBio: action.boolean,
      };

    case TOGGLE_FETCH_AVATAR:
      return {
        ...state,
        fetchAvatar: action.boolean,
      };

    case TOGGLE_FETCH_PROFILE_AVATARS:
      return {
        ...state,
        fetchProfileAvatars: action.boolean,
      };

    case TOGGLE_FETCH_AVATAR_BACKGROUND:
      return {
        ...state,
        fetchAvatarBackground: action.boolean,
      };

    case TOGGLE_FETCH_PROFILE_AVATAR_BACKGROUNDS:
      return {
        ...state,
        fetchAvatarBackgrounds: action.boolean,
      };

    case TOGGLE_SWITCHER_CONDITION_OF_CHANGE_AVATAR_BACKGROUND:
      return {
        ...state,
        switcherAvatarBackgroundURLorBase64: action.state,
      };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const changeAvatar = (avatar) => {
  return {
    type: CHANGE_AVATAR,
    avatar,
  };
};

export const addAvatarToProfileAvatars = (avatar) => {
  return {
    type: ADD_AVATAR_TO_PROFILE_AVATARS,
    avatar,
  };
};

export const addAvatarToRecentUploads = (avatar) => {
  return {
    type: ADD_AVATAR_TO_RECENT_UPLOADS,
    avatar,
  };
};

export const addAvatarBackgroundToRecentUploads = (background) => {
  return {
    type: ADD_AVATAR_BACKGROUND_TO_RECENT_UPLOADS,
    background,
  };
};

export const changeAvatarBackground = (background) => {
  return {
    type: CHANGE_AVATAR_BACKGROUND,
    background,
  };
};

export const addAvatarBackgroundToPofileAvatarBackgrounds = (background) => {
  return {
    type: ADD_AVATAR_BACKGROUND_TO_PROFILE_AVATAR_BACKGROUNDS,
    background,
  };
};

export const changeBio = (bio) => {
  return {
    type: CHANGE_BIO,
    bio,
  };
};

export const toggleFetchBio = (boolean) => {
  return {
    type: TOGGLE_FETCH_BIO,
    boolean,
  };
};

export const toggleFetchAvatar = (boolean) => {
  return {
    type: TOGGLE_FETCH_AVATAR,
    boolean,
  };
};

export const toggleFetchProfileAvatars = (boolean) => {
  return {
    type: TOGGLE_FETCH_PROFILE_AVATARS,
    boolean,
  };
};

export const toggleFetchAvatarBackground = (boolean) => {
  return {
    type: TOGGLE_FETCH_AVATAR_BACKGROUND,
    boolean,
  };
};

export const toggleFetchAvatarBackgrounds = (boolean) => {
  return {
    type: TOGGLE_FETCH_PROFILE_AVATAR_BACKGROUNDS,
    boolean,
  };
};

export const toggleSwitcherAvatarBackgroundURLorBase64 = (state) => {
  return {
    type: TOGGLE_SWITCHER_CONDITION_OF_CHANGE_AVATAR_BACKGROUND,
    state,
  };
};

//-------AVATAR REDCUERS THUNK ASYNC

// Avatar input Base64 Handler

export const avatarLoaderBase64Handler = (img) => {
  return async (dispatch) => {
    dispatch(toggleProfileUpdateStateComponent(1));
    dispatch(toggleProfileUpdateConditionForAvatar(0));
    dispatch(setTempAvatarName(img.name));

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(setTempAvatar(reader.result));
    };
    reader.onerror = (error) => {
      console.log("Oops base64 handler has an error", error);
    };
  };
};

// Avatar connect with Firebase Storage and Firestore

export const sendAvatar = (avatar, avatarName, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
    dispatch(toggleFetchProfileAvatars(true));
    dispatch(changeAvatar(avatar));

    // ----------Firebase storage

    var storageRef = storage.ref();
    var imagesRef = storageRef.child(`avatars/${avatarName}`);
    imagesRef
      .putString(avatar + "", "data_url")
      .then(function (snapshot) {
        // Success
        console.log(
          `Success. Storage with name /avatars/ was updated. Avatar was uploaded. Path:/avatars/${avatarName}`
        );

        db.collection("users_database")
          .get()
          .then((usersDatabase) => {
            usersDatabase.forEach((userDatabase) => {
              if (userDatabase.data().Email === email) {
                const resultUrl = `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2F${avatarName}?alt=media`;

                db.collection("users_database")
                  .doc(userDatabase.id)
                  .update({
                    "Avatars.activeAvatarUrl": resultUrl,
                    "Avatars.pofileAvatars": addToArray(resultUrl),
                    RecentUploads: addToArray(resultUrl),
                  })
                  .then(() => {
                    dispatch(addAvatarToProfileAvatars(resultUrl));
                    dispatch(addAvatarToRecentUploads(resultUrl));
                    dispatch(toggleFetchAvatar(false));
                    dispatch(toggleFetchProfileAvatars(false));
                    console.log("Success. Cloud FireStore was updated");
                  })
                  .then(() => {
                    dispatch(closeHandlerProfileUpdate());
                  })
                  .catch((e) => {
                    dispatch(toggleFetchAvatar(false));
                    dispatch(toggleFetchProfileAvatars(false));
                    dispatch(closeHandlerProfileUpdate());
                    console.log(e + "error on  uploading in Cloud FireStore");
                  });
              }
            });
          });
      })
      .catch((e) => {
        console.log(e + "error on uploading in storage");
      });
  };
};

// Set temp avatar

export const changeAvatarPreHandler = (avatarUrl) => {
  return (dispatch) => {
    dispatch(toggleProfileUpdateStateComponent(1));
    dispatch(toggleProfileUpdateConditionForAvatar(1));
    dispatch(setTempAvatar(avatarUrl));
  };
};

// Connect ONLY with Firestore

export const changeAvatarHandler = (avatar, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
    dispatch(toggleFetchProfileAvatars(true));
    dispatch(changeAvatar(avatar));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                "Avatars.activeAvatarUrl": avatar,
                "Avatars.pofileAvatars": addToArray(avatar),
              })
              .then(() => {
                console.log("Success. Cloud FireStore was updated");
                dispatch(addAvatarToProfileAvatars(avatar));
                dispatch(addAvatarToRecentUploads(avatar));
                dispatch(toggleFetchAvatar(false));
                dispatch(toggleFetchProfileAvatars(false));
              })
              .then(() => {
                dispatch(closeHandlerProfileUpdate());
              })
              .catch((e) => {
                console.log(e + "error on  uploading in Cloud FireStore");
                dispatch(toggleFetchAvatar(false));
                dispatch(toggleFetchProfileAvatars(false));
                dispatch(closeHandlerProfileUpdate());
              });
          }
        });
      });
  };
};

//-------AVATAR BACKGROUND REDCUERS THUNK ASYNC

// Avatar Background input Base64 Handler

export const avatarBackgroundLoaderBase64Handler = (img) => {
  return async (dispatch) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(setTempAvatarBackground(reader.result));
      dispatch(setTempAvatarBackgroundName(img.name));
      dispatch(toggleSwitcherAvatarBackgroundURLorBase64(0));
    };
    reader.onerror = (error) => {
      console.log("Oops base64 handler has an error", error);
    };
  };
};

// Avatar Background temp load

export const avatarBackgroundLoaderUrlHandler = (img) => {
  return (dispatch) => {
    dispatch(setTempAvatarBackground(img));
    dispatch(
      setTempAvatarBackgroundName(
        img
          .slice(
            "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2F"
              .length
          )
          .slice(0, -"?alt=media".length)
      )
    );
    dispatch(toggleSwitcherAvatarBackgroundURLorBase64(1));
  };
};

// Avatar Background clear temp

export const clearTempAvatarBackgroundHandler = () => {
  return (dispatch) => {
    dispatch(setTempAvatarBackground(null));
    dispatch(setTempAvatarBackgroundName(null));
    document.getElementById("avatarBackground-uploader").value = "";
  };
};

// Avatar Background full upload to Firebase storage and Firestore

export const changeAvatarBackgroundHandler = (
  background,
  backgroundName,
  email,
  secondaryFn
) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatarBackground(true));
    dispatch(toggleFetchAvatarBackgrounds(true));
    dispatch(changeAvatarBackground(background));

    // ----------Firebase storage

    var storageRef = storage.ref();
    var imagesRef = storageRef.child(`avatar-backgrounds/${backgroundName}`);
    imagesRef
      .putString(background + "", "data_url")
      .then(function (snapshot) {
        // Success
        console.log(
          `Success. Storage with name /avatar-backgrounds/ was updated. Background was uploaded. Path:/avatar-backgrounds/${backgroundName}`
        );

        db.collection("users_database")
          .get()
          .then((usersDatabase) => {
            usersDatabase.forEach((userDatabase) => {
              if (userDatabase.data().Email === email) {
                const resultUrl = `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatar-backgrounds%2F${backgroundName}?alt=media`;

                db.collection("users_database")
                  .doc(userDatabase.id)
                  .update({
                    "AvatarBackground.activeAvatarBackgroundUrl": resultUrl,
                    "AvatarBackground.pofileAvatarBackgrounds": addToArray(
                      resultUrl
                    ),
                    RecentUploads: addToArray(resultUrl),
                  })
                  .then(() => {
                    dispatch(toggleFetchAvatarBackground(false));
                    dispatch(toggleFetchAvatarBackgrounds(false));
                    dispatch(
                      addAvatarBackgroundToPofileAvatarBackgrounds(resultUrl)
                    );
                    dispatch(addAvatarBackgroundToRecentUploads(resultUrl));
                    dispatch(setTempAvatarBackground(null));
                    dispatch(setTempAvatarBackgroundName(null));
                    document.getElementById("avatarBackground-uploader").value =
                      "";
                    console.log("Success. Cloud FireStore was updated");
                  })
                  .then(() => {
                    secondaryFn(false);
                  })
                  .catch((e) => {
                    dispatch(toggleFetchAvatarBackground(false));
                    dispatch(toggleFetchAvatarBackgrounds(false));
                    dispatch(setTempAvatarBackground(null));
                    dispatch(setTempAvatarBackgroundName(null));
                    document.getElementById("avatarBackground-uploader").value =
                      "";
                    console.log(e + "error on  uploading in Cloud FireStore");
                  });
              }
            });
          });
      })
      .catch((e) => {
        dispatch(toggleFetchAvatarBackground(false));
        dispatch(toggleFetchAvatarBackgrounds(false));
        dispatch(setTempAvatarBackground(null));
        dispatch(setTempAvatarBackgroundName(null));
        document.getElementById("avatarBackground-uploader").value = "";
        console.log(e + "error on uploading in storage");
      });
  };
};

// Avatar Background select part update only URL in Firestore

export const changeAvatarBackgroundURLHandler = (
  background,
  email,
  secondaryFn
) => {
  return (dispatch) => {
    dispatch(toggleFetchAvatarBackground(true));
    dispatch(toggleFetchAvatarBackgrounds(true));
    dispatch(changeAvatarBackground(background));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                "AvatarBackground.activeAvatarBackgroundUrl": background,
                "AvatarBackground.pofileAvatarBackgrounds": addToArray(
                  background
                ),
              })
              .then(() => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(toggleFetchAvatarBackgrounds(false));
                dispatch(
                  addAvatarBackgroundToPofileAvatarBackgrounds(background)
                );
                dispatch(addAvatarBackgroundToRecentUploads(background));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                console.log("Success. Cloud FireStore was updated");
              })
              .then(() => {
                secondaryFn(false);
              })
              .catch((e) => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(toggleFetchAvatarBackgrounds(false));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                console.log(e + "error on  uploading in Cloud FireStore");
              });
          }
        });
      });
  };
};

// Avatar Background remove from Firestore

export const removeAvatarBackgroundHandler = (email) => {
  return (dispatch) => {
    dispatch(toggleFetchAvatarBackground(true));
    dispatch(changeAvatarBackground(""));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                "AvatarBackground.activeAvatarBackgroundUrl": "",
              })
              .then(() => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                document.getElementById("avatarBackground-uploader").value = "";
                console.log("Success. Cloud FireStore was updated");
              })
              .catch((e) => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                document.getElementById("avatarBackground-uploader").value = "";
                console.log(e + "error on  uploading in Cloud FireStore");
              });
          }
        });
      });
  };
};

//-------BIO REDCUERS THUNK ASYNC

export const changeBioHandler = (bio, email, func) => {
  return async (dispatch) => {
    await dispatch(changeBio(bio));
    dispatch(toggleFetchBio(true));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                Bio: bio,
              })
              .then(() => {
                console.log("Upd");
                dispatch(toggleFetchBio(false));
                func();
              })
              .catch(() => {
                console.log("Error");
                dispatch(toggleFetchBio(true));
              });
          }
        });
      });
  };
};

// Set active user to system

export const setActiveUser = (email) => {
  return (dispatch) => {
    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            dispatch(setUser(userDatabase.data()));
            dispatch(setFullUserInfoAbout(userDatabase.data().FullInfo));
          }
        });
      });
  };
};

export default userReducer;

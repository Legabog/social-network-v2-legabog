const TOGGLE_PROFILE_UPDATE_VISIBILITY = "TOGGLE_PROFILE_UPDATE_VISIBILITY";
const TOGGLE_PROFILE_UPDATE_OPACITY = "TOGGLE_PROFILE_UPDATE_OPACITY";
const TOGGLE_PROFILE_UPDATE_STATE_COMPONENT =
  "TOGGLE_PROFILE_UPDATE_STATE_COMPONENT";
const SET_PROFILE_UPDATE_TEMP_AVATAR = "SET_PROFILE_UPDATE_TEMP_AVATAR";
const SET_PROFILE_UPDATE_TEMP_AVATAR_NAME =
  "SET_PROFILE_UPDATE_TEMP_AVATAR_NAME";
const TOGGLE_PROFILE_UPDATE_CONDITION_FOR_AVATAR =
  "TOGGLE_PROFILE_UPDATE_CONDITION_FOR_AVATAR";
const SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND =
  "SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND";
  const SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND_NAME =
  "SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND_NAME";

let initialState = {
  profileUpdateStateComponent: 0,
  profileUpdateConditionForAvatar: 0,
  // 
  profileUpdateTempAvatar: null,
  profileUpdateTempAvatarName: null,
  // 
  profileUpdateTempAvatarBackground: null,
  profileUpdateTempAvatarBackgroundName: null,
  // 
  profileUpdateVisibility: "hidden",
  profileUpdateOpacity: 0,
};

const profileUpdateAvatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_UPDATE_TEMP_AVATAR:
      return {
        ...state,
        profileUpdateTempAvatar: action.avatar,
      };

    case SET_PROFILE_UPDATE_TEMP_AVATAR_NAME:
      return {
        ...state,
        profileUpdateTempAvatarName: action.avatarName,
      };

    case SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND:
      return {
        ...state,
        profileUpdateTempAvatarBackground: action.avatarBackground,
      };
      case SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND_NAME:
        return {
          ...state,
          profileUpdateTempAvatarBackgroundName: action.backgroundName,
        };
      
    case TOGGLE_PROFILE_UPDATE_VISIBILITY:
      return {
        ...state,
        profileUpdateVisibility: action.state,
      };

    case TOGGLE_PROFILE_UPDATE_OPACITY:
      return {
        ...state,
        profileUpdateOpacity: action.state,
      };

    case TOGGLE_PROFILE_UPDATE_STATE_COMPONENT:
      return {
        ...state,
        profileUpdateStateComponent: action.state,
      };

    case TOGGLE_PROFILE_UPDATE_CONDITION_FOR_AVATAR:
      return {
        ...state,
        profileUpdateConditionForAvatar: action.condition,
      };
    default:
      return state;
  }
};

export const setTempAvatar = (avatar) => {
  return {
    type: SET_PROFILE_UPDATE_TEMP_AVATAR,
    avatar,
  };
};

export const setTempAvatarName = (avatarName) => {
  return {
    type: SET_PROFILE_UPDATE_TEMP_AVATAR_NAME,
    avatarName,
  };
};

export const setTempAvatarBackground = (avatarBackground) => {
  return {
    type: SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND,
    avatarBackground,
  };
};

export const setTempAvatarBackgroundName = (backgroundName) => {
  return {
    type: SET_PROFILE_UPDATE_TEMP_AVATAR_BACKGROUND_NAME,
    backgroundName,
  };
};

export const toggleProfileUpdateStateComponent = (state) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_STATE_COMPONENT,
    state,
  };
};

export const toggleProfileUpdateConditionForAvatar = (condition) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_CONDITION_FOR_AVATAR,
    condition,
  };
};

export const toggleProfileUpdateVisibility = (state) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_VISIBILITY,
    state,
  };
};

export const toggleProfileUpdateOpacity = (state) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_OPACITY,
    state,
  };
};

export const closeHandlerProfileUpdate = () => {
  return (dispatch) => {
    dispatch(toggleProfileUpdateStateComponent(0));
    dispatch(toggleProfileUpdateConditionForAvatar(0));
    dispatch(toggleProfileUpdateVisibility("hidden"));
    dispatch(toggleProfileUpdateOpacity(0));
    dispatch(setTempAvatar(null));
    dispatch(setTempAvatarName(null));

    //-------- For the same pictures
    document.getElementById("avatar-uploader").value = "";
  };
};

export const toggleProfileUpdateAvatar = (visibility, opacity) => {
  return (dispatch) => {
    if (visibility === "hidden" && opacity === 0) {
      dispatch(toggleProfileUpdateVisibility("visible"));
      dispatch(toggleProfileUpdateOpacity(1));
    } else {
      dispatch(toggleProfileUpdateVisibility("hidden"));
      dispatch(toggleProfileUpdateOpacity(0));
    }
  };
};

export default profileUpdateAvatarReducer;

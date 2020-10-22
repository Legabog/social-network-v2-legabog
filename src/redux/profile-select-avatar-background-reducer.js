const TOGGLE_PROFILE_SELECT_VISIBILITY = "TOGGLE_PROFILE_SELECT_VISIBILITY";
const TOGGLE_PROFILE_SELECT_OPACITY = "TOGGLE_PROFILE_SELECT_OPACITY";
const TOGGLE_PROFILE_SELECT_STATE_COMPONENT =
  "TOGGLE_PROFILE_SELECT_STATE_COMPONENT";
const TOGGLE_WINDOW_CONFIRM_BACKGROUND_VISIBILITY =
  "TOGGLE_WINDOW_CONFIRM_BACKGROUND_VISIBILITY";
const TOGGLE_WINDOW_CONFIRM_BACKGROUND_OPACITY =
  "TOGGLE_WINDOW_CONFIRM_BACKGROUND_OPACITY";

let initialState = {
  profileSelectState: 0,
  profileSelectVisibility: "hidden",
  profileSelectOpacity: 0,
  // Confirm window Background
  windowConfirmBackgroundVisibility: "hidden",
  windowConfirmBackgroundOpacity: 0,
};

const profileSelectAvatarBackgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_SELECT_VISIBILITY:
      return {
        ...state,
        profileSelectVisibility: action.value,
      };

    case TOGGLE_PROFILE_SELECT_OPACITY:
      return {
        ...state,
        profileSelectOpacity: action.value,
      };

    case TOGGLE_WINDOW_CONFIRM_BACKGROUND_VISIBILITY:
      return {
        ...state,
        windowConfirmBackgroundVisibility: action.value,
      };

    case TOGGLE_WINDOW_CONFIRM_BACKGROUND_OPACITY:
      return {
        ...state,
        windowConfirmBackgroundOpacity: action.value,
      };
    case TOGGLE_PROFILE_SELECT_STATE_COMPONENT:
      return {
        ...state,
        profileSelectState: action.state,
      };
    default:
      return state;
  }
};

export const toggleProfileSelectVisibility = (value) => {
  return {
    type: TOGGLE_PROFILE_SELECT_VISIBILITY,
    value,
  };
};

export const toggleProfileSelectOpacity = (value) => {
  return {
    type: TOGGLE_PROFILE_SELECT_OPACITY,
    value,
  };
};

export const toggleWindowConfirmBackgroundVisibility = (value) => {
  return {
    type: TOGGLE_WINDOW_CONFIRM_BACKGROUND_VISIBILITY,
    value,
  };
};

export const toggleWindowConfirmBackgroundOpacity = (value) => {
  return {
    type: TOGGLE_WINDOW_CONFIRM_BACKGROUND_OPACITY,
    value,
  };
};

export const toggleProfileSelectState = (state) => {
  return {
    type: TOGGLE_PROFILE_SELECT_VISIBILITY,
    state,
  };
};

export const toggleWindowConfirmBackground = (boolean) => {
  return (dispatch) => {
    boolean
      ? dispatch(toggleWindowConfirmBackgroundVisibility("visible"))
      : dispatch(toggleWindowConfirmBackgroundVisibility("hidden"));

    boolean
      ? dispatch(toggleWindowConfirmBackgroundOpacity(1))
      : dispatch(toggleWindowConfirmBackgroundOpacity(0));
  };
};

export const toggleProfileSelectAvatarBackground = (visibility, opacity) => {
  return (dispatch) => {
    if (visibility === "hidden" && opacity === 0) {
      dispatch(toggleProfileSelectVisibility("visible"));
      dispatch(toggleProfileSelectOpacity(1));
    } else {
      dispatch(toggleProfileSelectVisibility("hidden"));
      dispatch(toggleProfileSelectOpacity(0));
    }
  };
};

export default profileSelectAvatarBackgroundReducer;

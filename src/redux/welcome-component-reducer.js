const TOGGLE_PRIVACY_GUIDE_STATE = "TOGGLE_PRIVACY_GUIDE_STATE";
const TOGGLE_PRIVACY_GUIDE_VISIBILITY = "TOGGLE_PRIVACY_GUIDE_VISIBILITY";
const TOGGLE_PRIVACY_GUIDE_OPACITY = "TOGGLE_PRIVACY_GUIDE_OPACITY";

let initialState = {
  privacyGuideState: 0,
  privacyGuideVisibility: "hidden",
  privacyGuideOpacity: 0,
};

const welcomeComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIVACY_GUIDE_STATE:
      return {
        ...state,
        privacyGuideState: action.state,
      };
    case TOGGLE_PRIVACY_GUIDE_VISIBILITY:
      return {
        ...state,
        privacyGuideVisibility: action.state,
      };

    case TOGGLE_PRIVACY_GUIDE_OPACITY:
      return {
        ...state,
        privacyGuideOpacity: action.state,
      };
    default:
      return state;
  }
};

export const togglePrivacyGuideState = (state) => {
  return {
    type: TOGGLE_PRIVACY_GUIDE_STATE,
    state,
  };
};

export const togglePrivacyGuideVisibility = (state) => {
  return {
    type: TOGGLE_PRIVACY_GUIDE_VISIBILITY,
    state,
  };
};

export const togglePrivacyGuideOpacity = (state) => {
  return {
    type: TOGGLE_PRIVACY_GUIDE_OPACITY,
    state,
  };
};

export const togglePrivacyGuide = (boolean) => {
  return (dispatch) => {
    boolean
      ? dispatch(togglePrivacyGuideVisibility("visible"))
      : dispatch(togglePrivacyGuideVisibility("hidden"));

    boolean
      ? dispatch(togglePrivacyGuideOpacity(1))
      : dispatch(togglePrivacyGuideOpacity(0));

  };
};

export default welcomeComponentReducer;

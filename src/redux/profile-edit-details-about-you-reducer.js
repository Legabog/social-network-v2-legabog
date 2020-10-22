const TOGGLE_PROFILE_EDIT_DETAILS_VISIBILITY = "TOGGLE_PROFILE_EDIT_DETAILS_VISIBILITY";
const TOGGLE_PROFILE_EDIT_DETAILS_OPACITY = "TOGGLE_PROFILE_EDIT_DETAILS_OPACITY";
const TOGGLE_PROFILE_EDIT_DETAILS_STATE_COMPONENT =
  "TOGGLE_PROFILE_EDIT_DETAILS_STATE_COMPONENT";

let initialState = {
  profileEditDetailsStateComponent: 0,
  // 
  profileEditDetailsVisibility: "hidden",
  profileEditDetailsOpacity: 0,
};

const profileEditDetailsReducer = (state = initialState, action) => {
  switch (action.type) {  

    case TOGGLE_PROFILE_EDIT_DETAILS_VISIBILITY:
      return {
        ...state,
        profileEditDetailsVisibility: action.state,
      };

    case TOGGLE_PROFILE_EDIT_DETAILS_OPACITY:
      return {
        ...state,
        profileEditDetailsOpacity: action.state,
      };

    case TOGGLE_PROFILE_EDIT_DETAILS_STATE_COMPONENT:
      return {
        ...state,
        profileEditDetailsOpacity: action.state,
      };

    default:
      return state;
  }
};

export const toggleProfileEditDetailsStateComponent = (state) => {
  return {
    type: TOGGLE_PROFILE_EDIT_DETAILS_STATE_COMPONENT,
    state,
  };
};

export const toggleProfileEditDetailsVisibility = (state) => {
  return {
    type: TOGGLE_PROFILE_EDIT_DETAILS_VISIBILITY,
    state,
  };
};

export const toggleProfileEditDetailsOpacity = (state) => {
  return {
    type: TOGGLE_PROFILE_EDIT_DETAILS_OPACITY,
    state,
  };
};

export const toggleProfileEditDetails = (visibility, opacity) => {
    return (dispatch) => {
      if (visibility === "hidden" && opacity === 0) {
        dispatch(toggleProfileEditDetailsVisibility("visible"));
        dispatch(toggleProfileEditDetailsOpacity(1));
      } else {
        dispatch(toggleProfileEditDetailsVisibility("hidden"));
        dispatch(toggleProfileEditDetailsOpacity(0));
      }
    };
  };
export default profileEditDetailsReducer;
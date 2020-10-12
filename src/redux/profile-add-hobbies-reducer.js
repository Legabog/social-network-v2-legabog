const TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY = "TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY";
const TOGGLE_PROFILE_ADD_HOBBIES_OPACITY = "TOGGLE_PROFILE_ADD_HOBBIES_OPACITY";
const TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT =
  "TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT";

let initialState = {
  profileAddHobbiesStateComponent: 0,
  // 
  profileAddHobbiesVisibility: "hidden",
  profileAddHobbiesOpacity: 0,
};

const profileAddHobbiesReducer = (state = initialState, action) => {
  switch (action.type) {  

    case TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY:
      return {
        ...state,
        profileAddHobbiesVisibility: action.state,
      };

    case TOGGLE_PROFILE_ADD_HOBBIES_OPACITY:
      return {
        ...state,
        profileAddHobbiesOpacity: action.state,
      };

    case TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT:
      return {
        ...state,
        profileAddHobbiesStateComponent: action.state,
      };

    default:
      return state;
  }
};

export const toggleProfileAddHobbiesStateComponent = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT,
    state,
  };
};

export const toggleProfileAddHobbiesVisibility = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY,
    state,
  };
};

export const toggleProfileAddHobbiesOpacity = (state) => {
  return {
    type: TOGGLE_PROFILE_ADD_HOBBIES_OPACITY,
    state,
  };
};

export const toggleProfileAddHobbies = (visibility, opacity) => {
    return (dispatch) => {
      if (visibility === "hidden" && opacity === 0) {
        dispatch(toggleProfileAddHobbiesVisibility("visible"));
        dispatch(toggleProfileAddHobbiesOpacity(1));
      } else {
        dispatch(toggleProfileAddHobbiesVisibility("hidden"));
        dispatch(toggleProfileAddHobbiesOpacity(0));
      }
    };
};

export default profileAddHobbiesReducer;
const DISPLAY_REGISTRATION_BLOCK_TRUE = "DISPLAY_REGISTRATION_BLOCK_TRUE";
const DISPLAY_REGISTRATION_BLOCK_FALSE = "DISPLAY_REGISTRATION_BLOCK_FALSE";

let initialState = {
  visibilityRegistrationBlock: "hidden",
  opacityRegistrationBlock: 0,
};

const registrationBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_REGISTRATION_BLOCK_TRUE:
      return {
        ...state,
        visibilityRegistrationBlock: "visible",
        opacityRegistrationBlock: 1,
      };
    case DISPLAY_REGISTRATION_BLOCK_FALSE:
      return {
        ...state,
        visibilityRegistrationBlock: "hidden",
        opacityRegistrationBlock: 0,
      };
    default:
      return state;
  }
};

export const displayRegistrationBlockTrue = () => {
  return {
    type: DISPLAY_REGISTRATION_BLOCK_TRUE,
  };
};

export const displayRegistrationBlockFalse = () => {
  return {
    type: DISPLAY_REGISTRATION_BLOCK_FALSE,
  };
};

export default registrationBlockReducer;

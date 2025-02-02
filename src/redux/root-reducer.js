import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./app-reducer";
import registrationBlockReducer from "./registration-block-reducer"
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import musicAlbumsReducer from "./musicalbums-reducer";
import musicPlayListReducer from "./musicalplaylists-reducer";
import musicPlayerReducer from "./musicplayer-reducer";
import profileUpdateAvatarReducer from "./profile-update-avatar-reducer";
import profileSelectAvatarBackgroundReducer from "./profile-select-avatar-background-reducer";
import welcomeComponentReducer from "./welcome-component-reducer";
import profileBodyReducer from "./profile-body-reducer"
import aboutComponentReducer from "./about-component-reducer"
import profileEditDetailsReducer from "./profile-edit-details-about-you-reducer"
import profileAddHobbiesReducer from "./profile-add-hobbies-reducer"

import thunk from "redux-thunk";

let root_reducer = combineReducers({
  appReducer,
  registrationBlockReducer,
  userReducer,
  authReducer,
  musicAlbumsReducer,
  musicPlayListReducer,
  musicPlayerReducer,
  profileUpdateAvatarReducer,
  profileSelectAvatarBackgroundReducer,
  profileEditDetailsReducer,
  welcomeComponentReducer,
  profileBodyReducer,
  aboutComponentReducer,
  profileAddHobbiesReducer
});

let store = createStore(root_reducer, applyMiddleware(thunk));

window.store = store;

export default store;

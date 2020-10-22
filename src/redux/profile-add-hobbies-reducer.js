// Icons for Search list

import AccountBalanceIcon from '@material-ui/icons/AccountBalance'; 
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import BookIcon from "@material-ui/icons/Book";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SportsIcon from '@material-ui/icons/Sports';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import RowingIcon from '@material-ui/icons/Rowing';
import MovieIcon from "@material-ui/icons/Movie";
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ChatIcon from '@material-ui/icons/Chat';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import CodeIcon from '@material-ui/icons/Code';

const TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY = "TOGGLE_PROFILE_ADD_HOBBIES_VISIBILITY";
const TOGGLE_PROFILE_ADD_HOBBIES_OPACITY = "TOGGLE_PROFILE_ADD_HOBBIES_OPACITY";
const TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT =
  "TOGGLE_PROFILE_ADD_HOBBIES_STATE_COMPONENT";

let initialState = {
  profileAddHobbiesStateComponent: 0,
  // 
  profileAddHobbiesVisibility: "hidden",
  profileAddHobbiesOpacity: 0,
  // List of search hobbies
  profileAddHobbiesSearchListHobbies: [
    { hobbie: "Business", icon: AccountBalanceIcon  },
    { hobbie: "Investments", icon: AccountBalanceIcon  },
    { hobbie: "Shares", icon: AccountBalanceIcon  },
    // 
    { hobbie: "Flights", icon: AirplanemodeActiveIcon  },
    { hobbie: "Travels", icon: AirplanemodeActiveIcon  },
    { hobbie: "Airplanes", icon: AirplanemodeActiveIcon  },
    // 
    { hobbie: "Money", icon: AttachMoneyIcon },
    { hobbie: "Money-making", icon: AttachMoneyIcon },
    { hobbie: "Money-making in internet", icon: AttachMoneyIcon },
    // 
    { hobbie: "Listening to Music", icon: HeadsetMicIcon },
    { hobbie: "Playing Music", icon: HeadsetMicIcon },
    { hobbie: "Creating Music", icon: HeadsetMicIcon },
    // 
    { hobbie: "Reading", icon: BookIcon },
    { hobbie: "Studing", icon: BookIcon },
    { hobbie: "Learning", icon: BookIcon },
    { hobbie: "Book Collection", icon: BookIcon },
    { hobbie: "Writing", icon: BookIcon },
    { hobbie: "Creative Writing", icon: BookIcon },
    // 
    { hobbie: "Video Games", icon: SportsEsportsIcon },
    { hobbie: "Games", icon: SportsEsportsIcon },
    { hobbie: "Game Streams", icon: SportsEsportsIcon },
    { hobbie: "E-sport", icon: SportsEsportsIcon },
    // 
    { hobbie: "Sports", icon: SportsIcon },
    { hobbie: "Football", icon: SportsSoccerIcon },
    { hobbie: "American Football", icon: SportsFootballIcon },
    { hobbie: "Basketball", icon: SportsBasketballIcon },
    { hobbie: "Baseball", icon: SportsBaseballIcon },
    { hobbie: "Cricet", icon: SportsCricketIcon },
    { hobbie: "Golf", icon: SportsGolfIcon },
    { hobbie: "Handball", icon: SportsHandballIcon },
    { hobbie: "Hockey", icon: SportsHockeyIcon },
    { hobbie: "MMA", icon: SportsMmaIcon },
    { hobbie: "Tennis", icon: SportsTennisIcon },
    { hobbie: "Volleyball", icon: SportsVolleyballIcon },
    { hobbie: "Rowling", icon: RowingIcon },
    { hobbie: "Gym", icon: FitnessCenterIcon },
    // 
    { hobbie: "Art", icon: CropOriginalIcon},
    { hobbie: "Portrait Art", icon: ColorLensIcon},
    { hobbie: "Glass Art", icon: ColorLensIcon},
    { hobbie: "Screenprinting", icon: ColorLensIcon},
    { hobbie: "Landscape Painting", icon: ColorLensIcon},
    // 
    { hobbie: "Photography", icon: PhotoCameraIcon },
    { hobbie: "Macro Photography", icon: PhotoCameraIcon },
    { hobbie: "Portrait Photography", icon: PhotoCameraIcon },
    { hobbie: "Nature Photography", icon: PhotoCameraIcon },
    { hobbie: "Fashion Photography", icon: PhotoCameraIcon },
    { hobbie: "Landscape Photography", icon: PhotoCameraIcon },
    // 
    { hobbie: "Watching Movies", icon: MovieIcon },
    { hobbie: "Vlogging", icon: MovieIcon },
    { hobbie: "Videography", icon: MovieIcon },
    // 
    { hobbie: "Chatting", icon: ChatIcon },
    { hobbie: "Chatting with friends", icon: ChatIcon },
    { hobbie: "Trolling in chat", icon: ChatIcon },
    // 
    { hobbie: "Instagram", icon: InstagramIcon },
    { hobbie: "Github", icon: GitHubIcon },
    { hobbie: "LinkedIn", icon: LinkedInIcon },
    { hobbie: "Reddit", icon: RedditIcon },
    { hobbie: "Twitter", icon: TwitterIcon },
    { hobbie: "Facebook", icon: FacebookIcon },
    // 
    { hobbie: "Coding", icon: CodeIcon },
    { hobbie: "Learning Code", icon: CodeIcon },
    // 
  ]
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
import { musicApi } from "api/music-api";

const SET_MUSIC_ALBUMS_DATA = "SET_MUSIC_ALBUMS_DATA";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SWITCHER = "SWITCHER";
const PUSH_ALBUM_TO_RECENTLY_PLAYED = "PUSH_ALBUM_TO_RECENTLY_PLAYED";
const PUSH_TITLE_TO_DISABLED_ARRAY = "PUSH_TITLE_TO_DISABLED_ARRAY";
const PUSH_AUTHOR_TO_DISABLED_ARRAY = "PUSH_AUTHOR_TO_DISABLED_ARRAY";

let initialState = {
  musicAlbums: [],
  Fetching: false,
  musicAlbumsSwitcher: 1,
  recentlyPlayed: [],
  disabledTitles: [],
  disabledAuthors: [],
};

const musicAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_ALBUMS_DATA:
      return {
        ...state,
        musicAlbums: action.payload,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        Fetching: action.Fetching,
      };
    case PUSH_ALBUM_TO_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: [...state.recentlyPlayed, action.data],
      };

    case PUSH_TITLE_TO_DISABLED_ARRAY:
      return {
        ...state,
        disabledTitles: [...state.disabledTitles, action.title],
      };

    case PUSH_AUTHOR_TO_DISABLED_ARRAY:
      return {
        ...state,
        disabledAuthors: [...state.disabledAuthors, action.author],
      };

    case SWITCHER:
      return {
        ...state,
        musicAlbumsSwitcher: action.switcher,
      };

    default:
      return state;
  }
};

export const setMusicAlbumsData = (payload) => {
  return {
    type: SET_MUSIC_ALBUMS_DATA,
    payload,
  };
};

export const pushAlbumToRecentlyPlayed = (img, title, author) => {
  return {
    type: PUSH_ALBUM_TO_RECENTLY_PLAYED,
    data: { img, title, author },
  };
};

export const pushTitleToDisabledArray = (title) => {
  return {
    type: PUSH_TITLE_TO_DISABLED_ARRAY,
    title,
  };
};

export const pushAuthorToDisabledArray = (author) => {
  return {
    type: PUSH_AUTHOR_TO_DISABLED_ARRAY,
    author,
  };
};

export const toggleFetching = (Fetching) => {
  return {
    type: TOGGLE_FETCHING,
    Fetching,
  };
};

export const toggleSwitcher = (switcher) => {
  return {
    type: SWITCHER,
    switcher,
  };
};

export const pushToRecentlyPlayed = (img, title, author) => {
  return async (dispatch) => {
    dispatch(pushAlbumToRecentlyPlayed(img, title, author));
    dispatch(pushTitleToDisabledArray(title));
    dispatch(pushAuthorToDisabledArray(author));
  };
};

export const getMusicAlbumsData = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    musicApi.getMusicAlbums().then((response) => {
      dispatch(setMusicAlbumsData(response));
      dispatch(toggleFetching(false));
    });
  };
};

export default musicAlbumsReducer;

import { audioRef } from "containers/MusicPlayerPanel/AudioContext"


const SET_MUSIC_FOR_PLAYER = "SET_MUSIC_FOR_PLAYER";
const TOGGLE_IS_PLAYING = "TOGGLE_IS_PLAYING";
const SET_INDEX_OF_TRACK = "SET_INDEX_OF_TRACK";
const SET_ACTIVE_TRACK = "SET_ACTIVE_TRACK";
const SET_DISABLER_BUTTON_NEXT = "SET_DISABLER_BUTTON_NEXT";
const SET_DISABLER_BUTTON_PLAY = "SET_DISABLER_BUTTON_PLAY";
const SHUFFLE_MUSIC = "SHUFFLE_MUSIC";
const SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL = "SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL"

let initialState = {
  musicPlayerPlayList: null,
  isPlaying: false,
  indexOfPlayingTrack: 0,
  activeTrack: null,
  disablerButtonNext: false,
  disablerButtonPlay: false,
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_FOR_PLAYER:
      return {
        ...state,
        musicPlayerPlayList: action.payload,
      };

    case TOGGLE_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.boolean,
      };

    case SET_INDEX_OF_TRACK:
      return {
        ...state,
        indexOfPlayingTrack: action.index,
      };

    case SET_ACTIVE_TRACK:
      return {
        ...state,
        activeTrack: action.track,
      };

    case SET_DISABLER_BUTTON_NEXT:
      return {
        ...state,
        disablerButtonNext: action.boolean,
      };

    case SET_DISABLER_BUTTON_PLAY:
      return {
        ...state,
        disablerButtonPlay: action.boolean,
      };

    case SHUFFLE_MUSIC:
      return {
        ...state,
        musicPlayerPlayList: {...state.musicPlayerPlayList, tracks: state.musicPlayerPlayList.tracks.sort(() => Math.random() - 0.5)} 
      };

    case SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL:
      return {
        ...state,
        musicPlayerPlayList: null,
        indexOfPlayingTrack: 0,
        activeTrack: null
      }   
    default:
      return state;
  }
};

export const setMusicForPlayer = (payload) => {
  return {
    type: SET_MUSIC_FOR_PLAYER,
    payload,
  };
};

export const setIndexOfTrack = (index) => {
  return {
    type: SET_INDEX_OF_TRACK,
    index,
  };
};

export const setActiveTrack = (track) => {
  return {
    type: SET_ACTIVE_TRACK,
    track,
  };
};

export const toggleIsPlaying = (boolean) => {
  return {
    type: TOGGLE_IS_PLAYING,
    boolean,
  };
};

export const setDisablerButtonNext = (boolean) => {
  return {
    type: SET_DISABLER_BUTTON_NEXT,
    boolean,
  };
};

export const setDisablerButtonPlay = (boolean) => {
  return {
    type: SET_DISABLER_BUTTON_PLAY,
    boolean,
  };
};

export const shuffle = () => {
  return {
    type: SHUFFLE_MUSIC,
  };
};

export const setActiveTrackAndPlayerPlayListNull = () => {
  return {
    type: SET_ACTIVE_TRACK_AND_PLAYER_PLAYLIST_NULL
  }
}

export const playPlayer = (activeTrack, data, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setMusicForPlayer(data));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonPlay(true));
    await dispatch(setDisablerButtonNext(true));

    
    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonPlay(false));
    dispatch(setDisablerButtonNext(false));
  };
};

export const nextTrack = (activeTrack, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonNext(true));

    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonNext(false));
  };
};

export const previousTrack = (activeTrack, index) => {
  return async (dispatch) => {
    await dispatch(toggleIsPlaying(true));
    await dispatch(setIndexOfTrack(index));
    await dispatch(setActiveTrack(activeTrack));
    await dispatch(setDisablerButtonNext(true));

    audioRef.current.src = activeTrack.trackUrl;
    audioRef.current.currentTime = 0;
    await audioRef.current.play();

    dispatch(setDisablerButtonNext(false));
  };
};

export const pausePlayer = () => {
  return (dispatch) => {
    audioRef.current.pause();
    dispatch(toggleIsPlaying(false));
  };
};

export const shuffleMusic = () => {
  return (dispatch) => {
    dispatch(shuffle());
  };
};

export default musicPlayerReducer;

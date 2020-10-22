import * as axios from "axios";

export const musicApi = {

  createMusicAlbum(data) {
    return axios.post(
      "http://localhost:4000/musicalbums/create-musicalbum",
      data
    );
  },

  getMusicAlbums() {
    return axios
      .get("https://social-network-backend-legabog.herokuapp.com/musicalbums/get-musicalbums")
      .then((response) => {
        return response.data;
      });
  },

  deleteMusicAlbum(id) {
    return axios.delete(`https://social-network-backend-legabog.herokuapp.com/musicalbums/delete-album/${id}`);
  },

  getMyOwnPlaylists() {
    return axios
      .get("https://social-network-backend-legabog.herokuapp.com/myownplaylists/get-playlists")
      .then((response) => {
        return response.data;
      });
  },

  createNewPlayList(data) {
    return axios.post(
      "https://social-network-backend-legabog.herokuapp.com/myownplaylists/create-playlist",
      data
    );
  },

  deleteOwnPlayList(id) {
    return axios.delete(
      `https://social-network-backend-legabog.herokuapp.com/myownplaylists/delete-playlist/${id}`
    );
  },

  deleteTrack(trackId, playlistId) {
    return axios.delete(
      `https://social-network-backend-legabog.herokuapp.com/myownplaylists/delete-playlist/${playlistId}/delete-track/${trackId}`
    );
  },

  updateOwnPlayList(id, data) {
    return axios.put(
      `https://social-network-backend-legabog.herokuapp.com/myownplaylists/update-playlist/${id}`,
      data
    );
  },
  
};
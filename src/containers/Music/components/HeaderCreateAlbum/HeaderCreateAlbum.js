import React from "react";
import { NavLink } from "react-router-dom";
import { storage } from "utils/firebase/firebase";
import "./HeaderCreateAlbum.css";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AddPhoto from "assets/apple theme/photo_add.png";
import DefaultPhoto from "assets/apple theme/music.jpg";

export class HeaderCreateAlbum extends React.Component {
  state = {
    imgAvatar: AddPhoto,
    img: DefaultPhoto,
    nameImg: "",
    name: "",
    description: "",
    hover: 0,
    validationState: false,
  };

  setHover = (e) => {
    this.setState({ hover: e });
  };

  onChangeHandlerInput1 = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeHandlerInput2 = (e) => {
    this.setState({ description: e.target.value });
  };

  navLinkHandler = (e) => {
    if (!this.state.name.trim()) {
      e.preventDefault();
    }
  };

  handleImageUpload = (img) => {
    this.setState({ img });
  };

  base64Encode = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => this.handleImageUpload(reader.result);
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  sendImage = (img) => {
    this.setState({ nameImg: img });
    this.base64Encode(img);
    this.setState({
      img: window.URL.createObjectURL(img),
      imgAvatar: window.URL.createObjectURL(img),
    });
  };

  render() {
    return (
      <div className={"create-album-header"}>
        <div className={"create-album-header__buttons"}>
          <NavLink
            to="/music-list/playlists"
            onMouseOver={() => {
              this.setHover(1);
            }}
            onMouseOut={() => {
              this.setHover(0);
            }}
          >
            <div className={"create-album-header__button-back"}>
              {this.state.hover ? (
                <ArrowBackIosIcon style={{ color: "#F62A54" }} />
              ) : (
                <ArrowBackIosIcon style={{ color: "#1877F2" }} />
              )}
              <h3>Cancel</h3>
            </div>
          </NavLink>

          <NavLink to="/music-list/playlists" onClick={this.navLinkHandler}>
            <div
              className={"create-album-header__button-done"}
              onClick={() => {
                if (!!this.state.name.trim()) {
                  if (this.state.img === DefaultPhoto) {
                    this.props.createNewPlayList({
                      title: this.state.name + "",
                      description: this.state.description + "",
                      playlistcoverUrl: `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/playlist-covers%2Fmusic.jpg?alt=media&token=d3a88cc5-c7fe-4599-ba6c-ef8ba503a03c`,

                      tracks: [],
                    });
                  } else {
                    //----------Firebase
                    var storageRef = storage.ref();
                    var imagesRef = storageRef.child(
                      `playlist-covers/${this.state.nameImg.name}`
                    );
                    imagesRef
                      .putString(this.state.img + "", "data_url")
                      .then(function (snapshot) {
                        console.log("Uploaded a data_url string!");
                      })
                      .then(() => {
                        //--------------Post reducer to MongoDB
                        this.props.createNewPlayList({
                          title: this.state.name + "",
                          description: this.state.description + "",
                          playlistcoverUrl: `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/playlist-covers%2F${this.state.nameImg.name}?alt=media&token=d3a88cc5-c7fe-4599-ba6c-ef8ba503a03c`,
                          tracks: [],
                        });
                      });
                    //----------------------
                  }
                }
              }}
            >
              <h3>Done</h3>
            </div>
          </NavLink>
        </div>

        <h1>Create new playlist</h1>
        <div className={"create-album-header__inputs"}>
          <div className={"create-album-header__add-photo"}>
            <label htmlFor="image-loader">
              <img src={this.state.imgAvatar} alt="description" />
            </label>

            <input
              type="file"
              id="image-loader"
              accept="image/x-png, image/gif, image/jpeg, image/jpg"
              onChange={(e) => {
                this.sendImage(e.target.files[0]);
              }}
            ></input>
          </div>
          <div className={"create-album-header__input-together"}>
            <div className={"create-album-header__input1"}>
              <input
                onChange={this.onChangeHandlerInput1}
                inputvalue={this.state.input1}
                placeholder="New playlist name"
              ></input>
            </div>
            <div className={"create-album-header__input2"}>
              <input
                onChange={this.onChangeHandlerInput2}
                inputvalue={this.state.input2}
                placeholder="Description"
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


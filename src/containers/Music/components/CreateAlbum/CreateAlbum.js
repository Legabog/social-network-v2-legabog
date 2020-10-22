import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./CreateAlbum.css"

import {
  createNewPlayList,
} from "redux/musicalplaylists-reducer";

import { HeaderCreateAlbum } from "../HeaderCreateAlbum";

const CreateAlbum_ = (props) => {
  return (
    <div className={"create-album"}>
      <HeaderCreateAlbum
      {...props}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const CreateAlbum = compose(
  withRouter,
  connect(mapStateToProps, {
    createNewPlayList,
  })
)(CreateAlbum_);



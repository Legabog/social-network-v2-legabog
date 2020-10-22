import React from "react";
import "./Albums.css"

import { HeaderAlbums } from "../HeaderAlbums";
import { BodyAlbums } from "../BodyAlbums";

import { connect } from "react-redux";
import { getMusicAlbumsData } from "redux/musicalbums-reducer";
import { toggleSwitcher } from "redux/musicalbums-reducer";

const AlbumsList_ = (props) => {
  return (
    <>
      <div className={"albums"}>
        <HeaderAlbums />
        <BodyAlbums
          musicAlbums={props.musicAlbums}
          isFetching={props.isFetching}
          toggleSwitcher={props.toggleSwitcher}
          Fetching={props.Fetching}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    toggleSwitcher: state.musicAlbumsReducer.toggleSwitcher,
  };
};

export const AlbumsList = connect(mapStateToProps, {
  getMusicAlbumsData,
  toggleSwitcher,
})(AlbumsList_);

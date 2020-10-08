import React from "react";
import "./Albums.css"

import HeaderAlbums from "./HeaderAlbums/HeaderAlbums.js";
import BodyAlbums from "./BodyAlbums/BodyAlbums.js";

import { connect } from "react-redux";
import { getMusicAlbumsData } from "../../../../redux/musicalbums-reducer";
import { toggleSwitcher } from "../../../../redux/musicalbums-reducer";

const AlbumsList = (props) => {
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

export default connect(mapStateToProps, {
  getMusicAlbumsData,
  toggleSwitcher,
})(AlbumsList);

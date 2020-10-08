import React from "react";
import "./ArtistItemRouter.css"

import HeaderArtistItemRouter from "./HeaderArtistItemRouter/HeaderArtistItemRouter.js";
import BodyArtistItemRouter from "./BodyArtistItemRouter/BodyArtistItemRouter.js";

import { connect } from "react-redux";

const ArtistItemRouter = (props) => {
  return (
    <div className={"artistItemRouter"}>
      <HeaderArtistItemRouter nameArtist={props.nameArtist} />
      <BodyArtistItemRouter
        nameArtist={props.nameArtist}
        musicAlbums={props.musicAlbums}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
  };
};

export default connect(mapStateToProps, {})(ArtistItemRouter);

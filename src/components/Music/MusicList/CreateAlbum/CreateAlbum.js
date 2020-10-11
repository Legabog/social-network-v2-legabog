import React from "react";
import "./CreateAlbum.css"

import HeaderCreateAlbum from "./HeaderCreateAlbum/HeaderCreateAlbum.js";

const CreateAlbum = (props) => {
  return (
    <div className={"create-album"}>
      <HeaderCreateAlbum
        fetch={props.fetch}
        addToPlayList={props.addToPlayList}
        update={props.update}
      />
    </div>
  );
};

export default CreateAlbum;

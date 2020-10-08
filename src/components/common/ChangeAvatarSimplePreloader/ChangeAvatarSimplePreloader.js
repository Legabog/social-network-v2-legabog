import React from "react";
import "./ChangeAvatarSimplePreloader.css";

const ChangeAvatarSimplePreloader = (props) => {
  return (
    <div className={"preloader"} style={{width: `${props.width}`, height: `${props.height}`}}>
      <img
          className="avatar-preloader"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif"
          alt="avatar-preloader"
        />
    </div>
  );
};

export default ChangeAvatarSimplePreloader;

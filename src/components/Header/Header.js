import React from "react";
import "./Header.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = (props) => {
  return (
    <div className="header">
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight {...props}/>
    </div>
  );
};

export default Header;

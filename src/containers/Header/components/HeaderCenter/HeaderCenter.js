import React from "react";
import "./HeaderCenter.css";
import { HeaderNavigationBar } from "pres-components/HeaderNavigationBar";

export const HeaderCenter = (props) => {
  return (
    <div className="header__center">
      <HeaderNavigationBar {...props}/>
    </div>
  );
};


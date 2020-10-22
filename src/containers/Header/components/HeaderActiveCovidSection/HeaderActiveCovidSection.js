import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import "./HeaderActiveCovidSection.css";
import { IconButton } from "@material-ui/core";

export const HeaderActiveCovidSection = (props) => {
  return (
    <div className="header__active__covid__section">
      <div className="covid__section__header">
        <h4>Updates on COVID-19</h4>
      </div>
      <div className="covid__section__border">
        <div className="covid__section__icon">
          <SearchIcon
            style={{
              width: "24px",
              height: "24px",
              marginTop: "6px",
              marginLeft: "6px",
            }}
          />
        </div>
        <span>coronavirus updates</span>
      </div>

      <div className="covid__section__searches">
        <div className="covid__section__searches__header">
          <h4>Recent Searches</h4>
          <span>Edit</span>
        </div>
        <div className="searches__body">
          <div className="searches__body__search">
            <div className="covid__section__border">
              <div className="covid__section__icon">
                <QueryBuilderRoundedIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>games</span>
              <IconButton
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "4px",
                  marginLeft: "60px",
                }}
              >
                <CloseOutlinedIcon
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </IconButton>
            </div>
          </div>
          <div className="searches__body__search">
            <div className="covid__section__border">
              <div className="covid__section__icon">
                <QueryBuilderRoundedIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>video stream</span>
              <IconButton
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "4px",
                  marginLeft: "60px",
                }}
              >
                <CloseOutlinedIcon
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </IconButton>
            </div>
          </div>
          <div className="searches__body__search">
            <div className="covid__section__border">
              <div className="covid__section__icon">
                <QueryBuilderRoundedIcon
                  style={{
                    width: "24px",
                    height: "24px",
                    marginTop: "6px",
                    marginLeft: "6px",
                  }}
                />
              </div>
              <span>coronavirus updates</span>
              <IconButton
                style={{
                  width: "28px",
                  height: "28px",
                  marginTop: "4px",
                  marginLeft: "60px",
                }}
              >
                <CloseOutlinedIcon
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="last__div" />
      </div>
    </div>
  );
};


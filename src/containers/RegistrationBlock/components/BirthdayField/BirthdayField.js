import React, { useState } from "react";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import { IconButton } from "@material-ui/core";
import "./BirthdayField.css";

import { RegistrationFieldError } from "pres-components/RegistrationFieldError";
import { RegistrationFormInformation } from "pres-components/RegistrationFormInformation";

export const BirthdayField = (props) => {

  const [displayBirthdayError, setDisplayBirthdayError] = useState("none");
  const [displayBirthdayInfo, setDisplayBirthdayInfo] = useState("none");

  const toggleDisplayBirthdayError = (display) => {
    setDisplayBirthdayError(display);
  };

  const toggleDisplayBirthdayInfo = () => {
    displayBirthdayInfo === "none"
      ? setDisplayBirthdayInfo()
      : setDisplayBirthdayInfo("none");
  };

  const focusComponent = (id) => {
    document.getElementById(`${id}`).focus();
  };

  return (
    <div className="birthday-field">
      <div className="birthday-field__description">
        Date of birth
        <IconButton
          id="birthday-field__help-button"
          onBlur={toggleDisplayBirthdayInfo}
          onFocus={toggleDisplayBirthdayInfo}
          onClick={(e) => {
            e.preventDefault();
            focusComponent("birthday-field__help-button");
          }}
        >
          <HelpOutlinedIcon />
        </IconButton>
        <ErrorIcon
          className="birthday-field__error-icon"
          style={{
            display:
              props.checkedBirthdayInput && props.birthdayValidator()
                ? null
                : "none",
          }}
          onClick={() => {
            toggleDisplayBirthdayError();
            focusComponent("birthday-field__select-day");
          }}
        />
      </div>

      <div className="birthday-field__selects">
        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-day"
            onClick={props.bdayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"00"} defaultValue>
              Day
            </option>
            <option value={"01"}>1</option>
            <option value={"02"}>2</option>
            <option value={"03"}>3</option>
            <option value={"04"}>4</option>
            <option value={"05"}>5</option>
            <option value={"06"}>6</option>
            <option value={"07"}>7</option>
            <option value={"08"}>8</option>
            <option value={"09"}>9</option>
            <option value={"10"}>10</option>
            <option value={"11"}>11</option>
            <option value={"12"}>12</option>
            <option value={"13"}>13</option>
            <option value={"14"}>14</option>
            <option value={"15"}>15</option>
            <option value={"16"}>16</option>
            <option value={"17"}>17</option>
            <option value={"18"}>18</option>
            <option value={"19"}>19</option>
            <option value={"20"}>20</option>
            <option value={"21"}>21</option>
            <option value={"22"}>22</option>
            <option value={"23"}>23</option>
            <option value={"24"}>24</option>
            <option value={"25"}>25</option>
            <option value={"26"}>26</option>
            <option value={"27"}>27</option>
            <option value={"28"}>28</option>
            <option value={"29"}>29</option>
            <option value={"30"}>30</option>
            <option value={"31"}>31</option>
          </select>
        </div>

        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-month"
            onClick={props.mdayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"00"} defaultValue>
              Month
            </option>
            <option value={"01"}>Jan</option>
            <option value={"02"}>Feb</option>
            <option value={"03"}>Mar</option>
            <option value={"04"}>Apr</option>
            <option value={"05"}>May</option>
            <option value={"06"}>Jun</option>
            <option value={"07"}>Jul</option>
            <option value={"08"}>Aug</option>
            <option value={"09"}>Sep</option>
            <option value={"10"}>Oct</option>
            <option value={"11"}>Nov</option>
            <option value={"12"}>Dec</option>
          </select>
        </div>

        <div className="birthday-field__block">
          <select
            className="birthday-field__block__select"
            id="birthday-field__select-year"
            onClick={props.ydayHandler}
            onBlur={() => {
              props.checkBirthdayField(true);
              toggleDisplayBirthdayError("none");
            }}
            onFocus={() => {
              props.checkBirthdayField(false);
            }}
            style={{
              border:
                props.checkedBirthdayInput && props.birthdayValidator()
                  ? "1px solid red"
                  : null,
            }}
          >
            <option value={"0000"} defaultValue>
              Year
            </option>
            <option value={"2020"} defaultValue>
              2020
            </option>
            <option value={"2019"} defaultValue>
              2019
            </option>
            <option value={"2018"} defaultValue>
              2018
            </option>
            <option value={"2017"} defaultValue>
              2017
            </option>
            <option value={"2016"} defaultValue>
              2016
            </option>
            <option value={"2015"} defaultValue>
              2015
            </option>
            <option value={"2014"} defaultValue>
              2014
            </option>
            <option value={"2013"} defaultValue>
              2013
            </option>
            <option value={"2012"} defaultValue>
              2012
            </option>
            <option value={"2011"} defaultValue>
              2011
            </option>
            <option value={"2010"} defaultValue>
              2010
            </option>
            <option value={"2009"} defaultValue>
              2009
            </option>
            <option value={"2008"} defaultValue>
              2008
            </option>
            <option value={"2007"} defaultValue>
              2007
            </option>
            <option value={"2006"} defaultValue>
              2006
            </option>
            <option value={"2005"} defaultValue>
              2005
            </option>
            <option value={"2004"} defaultValue>
              2004
            </option>
            <option value={"2003"} defaultValue>
              2003
            </option>
            <option value={"2002"} defaultValue>
              2002
            </option>
            <option value={"2001"} defaultValue>
              2001
            </option>
            <option value={"2000"} defaultValue>
              2000
            </option>
            <option value={"1999"} defaultValue>
              1999
            </option>
            <option value={"1998"} defaultValue>
              1998
            </option>
            <option value={"1997"} defaultValue>
              1997
            </option>
            <option value={"1996"} defaultValue>
              1996
            </option>
            <option value={"1995"} defaultValue>
              1995
            </option>
            <option value={"1994"} defaultValue>
              1994
            </option>
            <option value={"1993"} defaultValue>
              1993
            </option>
            <option value={"1992"} defaultValue>
              1992
            </option>
            <option value={"1991"} defaultValue>
              1991
            </option>
          </select>
        </div>
      </div>
      <RegistrationFieldError
        display={displayBirthdayError}
        // error
        error_text={"It looks like you've entered the wrong info. Please make sure that you use your real date of birth."}
        error_marginLeft={"-300px"}
        error_marginTop={"-50px"}
        error_backgroundPosition={"-49px -157px"}
        error_height={"22px"}
        error_width={"11px"}
        error_top={"11px"}
        error_right={"7px"}
      />
      <RegistrationFormInformation
        info_text="Providing your date of birth helps make sure that you get the right
        experience for your age. If you want to change who sees this, go to
        the About section of your Profile. For more details, please visit
        our Data Policy."
        info_marginTop={"-80px"}
        info_marginLeft={"-290px"}
        info_e_marginTop={"-160px"}
        display={displayBirthdayInfo}
        toggleDisplayBirthdayInfo={toggleDisplayBirthdayInfo}
      />
    </div>
  );
};


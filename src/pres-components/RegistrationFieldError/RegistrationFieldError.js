import React from "react";
import "./RegistrationFieldError.css";

export const RegistrationFieldError = (props) => {
  return (
    <div
      className="registration-block__field-error"
      style={{
        display: props.display,
        marginLeft: `${props.error_marginLeft}`,
        marginTop: `${props.error_marginTop}`,
      }}
    >
      <div className="registration-block__field-error__label">
        <div className="registration-block__field-error__body">
          <div className="registration-block__field-error__content">
            {props.error_text}
          </div>
          <i
            className="registration-block__field-error__icon"
            style={{
              backgroundPosition: `${props.error_backgroundPosition}`,
              height: `${props.error_height}`,
              top: `${props.error_top}`,
              right: `${props.error_right}`,
              width: `${props.error_width}`,
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};


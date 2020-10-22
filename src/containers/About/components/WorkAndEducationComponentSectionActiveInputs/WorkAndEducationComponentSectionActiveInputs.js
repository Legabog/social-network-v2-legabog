import React, { useState } from "react";
import "./WorkAndEducationComponentSectionActiveInputs.css";

export const WorkAndEducationComponentSectionActiveInputs = (props) => {
  const [input_1, setInput_1] = useState( Array.isArray(props.componentArguments) ? "" : props.componentArguments);
  const [input_2, setInput_2] = useState( Array.isArray(props.componentArguments) ? "" : props.componentArguments);
  const [input_3, setInput_3] = useState( Array.isArray(props.componentArguments) ? "" : props.componentArguments);
  const [input_4, setInput_4] = useState( Array.isArray(props.componentArguments) ? "" : props.componentArguments);

  // changeHandlers

  const toggleInput_1 = (e) => {
    setInput_1(e.target.value);
  };

  const toggleInput_2 = (e) => {
    setInput_2(e.target.value);
  };

  const toggleInput_3 = (e) => {
    setInput_3(e.target.value);
  };

  const toggleInput_4 = (e) => {
    setInput_4(e.target.value);
  };

  switch (props.activeInputs) {
    case 1:
      return (
        <>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (input_1.trim() !== "") {
                      props.addReducer(
                        [
                          input_1.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__controllButtons"
            }
          >
            <div
              className={
                "WorkAndEducationComponentSectionActiveInputs__cancelButton"
              }
              onClick={() => {
                props.toggleActiveComponent(false);
              }}
            >
              <span>Cancel</span>
            </div>

            {input_1.trim() === "" ? (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton-disabled"
                }
              >
                <span>Save</span>
              </div>
            ) : (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton"
                }
                onClick={() => {
                  props.addReducer(
                    [
                      input_1.trim()
                    ],
                    props.fieldReducer,
                    props.activeAccountEmail,
                    props.toggleActiveComponent(false)
                  );
                }}
              >
                <span>Save</span>
              </div>
            )}
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (input_1.trim() !== "" && input_2.trim() !== "") {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (input_1.trim() !== "" && input_2.trim() !== "") {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__controllButtons"
            }
          >
            <div
              className={
                "WorkAndEducationComponentSectionActiveInputs__cancelButton"
              }
              onClick={() => {
                props.toggleActiveComponent(false);
              }}
            >
              <span>Cancel</span>
            </div>

            {input_1.trim() === "" || input_2.trim() === "" ? (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton-disabled"
                }
              >
                <span>Save</span>
              </div>
            ) : (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton"
                }
                onClick={() => {
                  props.addReducer(
                    [
                      input_1.trim(),
                      input_2.trim()
                    ],
                    props.fieldReducer,
                    props.activeAccountEmail,
                    props.toggleActiveComponent(false)
                  );
                }}
              >
                <span>Save</span>
              </div>
            )}
          </div>
        </>
      );

    case 3:
      return (
        <>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_3}
              onChange={toggleInput_3}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder3}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__controllButtons"
            }
          >
            <div
              className={
                "WorkAndEducationComponentSectionActiveInputs__cancelButton"
              }
              onClick={() => {
                props.toggleActiveComponent(false);
              }}
            >
              <span>Cancel</span>
            </div>

            {input_1.trim() === "" ||
            input_2.trim() === "" ||
            input_3.trim() === "" ? (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton-disabled"
                }
              >
                <span>Save</span>
              </div>
            ) : (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton"
                }
                onClick={() => {
                  props.addReducer(
                    [
                      input_1.trim(),
                      input_2.trim(),
                      input_3.trim(),
                    ],
                    props.fieldReducer,
                    props.activeAccountEmail,
                    props.toggleActiveComponent(false)
                  );
                }}
              >
                <span>Save</span>
              </div>
            )}
          </div>
        </>
      );

    case 4:
      return (
        <>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== "" &&
                      input_4.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                          input_4.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== "" &&
                      input_4.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                          input_4.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_3}
              onChange={toggleInput_3}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== "" &&
                      input_4.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                          input_4.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              placeholder={props.ativeInputPlaceholder3}
            />
          </div>
          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__input__wrapper"
            }
          >
            <input
              className={"WorkAndEducationComponentSectionActiveInputs__input"}
              value={input_4}
              onKeyUp={(e) => {
                switch (e.key) {
                  case "Enter":
                    if (
                      input_1.trim() !== "" &&
                      input_2.trim() !== "" &&
                      input_3.trim() !== "" &&
                      input_4.trim() !== ""
                    ) {
                      props.addReducer(
                        [
                          input_1.trim(),
                          input_2.trim(),
                          input_3.trim(),
                          input_4.trim()
                        ],
                        props.fieldReducer,
                        props.activeAccountEmail,
                        props.toggleActiveComponent(false)
                      );
                    }
                    break;
                  case "Escape":
                    props.toggleActiveComponent(false);
                    break;
                  default:
                    return null;
                }
              }}
              onChange={toggleInput_4}
              placeholder={props.ativeInputPlaceholder4}
            />
          </div>

          <div
            className={
              "WorkAndEducationComponentSectionActiveInputs__controllButtons"
            }
          >
            <div
              className={
                "WorkAndEducationComponentSectionActiveInputs__cancelButton"
              }
              onClick={() => {
                props.toggleActiveComponent(false);
              }}
            >
              <span>Cancel</span>
            </div>

            {input_1.trim() === "" ||
            input_2.trim() === "" ||
            input_3.trim() === "" ||
            input_4.trim() === "" ? (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton-disabled"
                }
              >
                <span>Save</span>
              </div>
            ) : (
              <div
                className={
                  "WorkAndEducationComponentSectionActiveInputs__saveButton"
                }
                onClick={() => {
                  props.addReducer(
                    [
                      input_1.trim(),
                      input_2.trim(),
                      input_3.trim(),
                      input_4.trim()
                    ],
                    props.fieldReducer,
                    props.activeAccountEmail,
                    props.toggleActiveComponent(false)
                  );
                }}
              >
                <span>Save</span>
              </div>
            )}
          </div>
        </>
      );
    default:
      return null;
  }
};

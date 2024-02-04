import React, { useState } from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import "./InputForm.css";

export const InputForm = ({
  currentStep,
  increaseProgress,
  setGenderSelection,
  setInputFormSelection,
}) => {
  const { updateUserData } = useTrayaAppContext();

  const [steps, setSteps] = useState([
    {},
    { label: "Before we start, can we get your name", value: "", error: "" },
    { label: "Phone Number", value: "", error: "" },
    { label: "Email", value: "", error: "" },
    { label: "How old are you?", value: "", error: "" },
  ]);

  const handleChange = (event) => {
    const updatedSteps = [...steps];
    const { value } = event.target;

    if (currentStep === 1) {
      if (/^[a-zA-Z\s]+$/.test(value) || value === "") {
        updatedSteps[currentStep].value = value;
        updatedSteps[currentStep].error = "";
      } else {
        updatedSteps[currentStep].error = "Please enter a valid name";
      }
    } else if (currentStep === 2) {
      if (/^[0-9]{0,10}$/.test(value) || value === "") {
        updatedSteps[currentStep].value = value;
        updatedSteps[currentStep].error = "";
      } else {
        updatedSteps[currentStep].error = "Please enter a valid phone number";
      }
    } else if (currentStep === 3) {
      updatedSteps[currentStep].value = value;
      updatedSteps[currentStep].error = "";
    } else if (currentStep === 4) {
      updatedSteps[currentStep].value = value;
      updatedSteps[currentStep].error = "";
    }
    setSteps(updatedSteps);
  };

  const validateInputs = () => {
    const updatedSteps = [...steps];
    let valid = true;

    switch (currentStep) {
      case 1:
        if (!steps[currentStep].value.trim().match(/^[a-zA-Z ]+$/)) {
          updatedSteps[currentStep].error =
            "Invalid name. Please enter a valid name.";
          valid = false;
        }
        break;
      case 2:
        if (!steps[currentStep].value.trim().match(/^\d{0,10}$/)) {
          updatedSteps[currentStep].error =
            "Invalid phone number. Please enter a valid number (max 10 characters).";
          valid = false;
        }
        break;
      // Need to check on the email and age validation
      default:
        break;
    }

    setSteps(updatedSteps);
    return valid;
  };

  const handleNextClick = () => {
    if (validateInputs()) {
      increaseProgress();
      if (currentStep === 4) {
        setGenderSelection(true);
        setInputFormSelection(false);
      }

      updateUserData({
        name: steps[1].value,
        phoneNumber: steps[2].value,
        email: steps[3].value,
        age: steps[4].value,
      });
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="input-container">
        {currentStep < steps.length && (
          <div>
            <div className="form-label">
              <label>{steps[currentStep].label}</label>
            </div>
            <div className="empty-div"></div>
            <input
              type="text"
              id={`stepInput-${currentStep}`}
              value={steps[currentStep].value}
              onChange={(event) => handleChange(event)}
              className="input-field"
              placeholder={steps[currentStep].label}
            />
            {steps[currentStep].error && (
              <div className="error-message">{steps[currentStep].error}</div>
            )}
            <button
              type="button"
              className="next-button"
              onClick={handleNextClick}
            >
              <span>NEXT →</span>
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

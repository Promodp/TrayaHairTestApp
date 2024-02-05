import React, { useState } from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import {
  radioOptions1,
  radioOptions2,
  radioOptions3,
  Text,
} from "../../Helper/Helper";

import "./RadioInputField.css";

export const RadioInputField = ({
  setFileUploadSelection,
  setRadioInputSelection,
  increaseProgress,
  currentStep,
}) => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const { updateUserData } = useTrayaAppContext();

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
    increaseProgress();
    updateUserData({
      familyHistory: event.target.value,
    });
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
    increaseProgress();
    updateUserData({
      dandruffStatus: event.target.value,
    });
  };

  const handleOption3Change = (event) => {
    setSelectedOption3(event.target.value);
    setRadioInputSelection(false);
    setFileUploadSelection(true);
    increaseProgress();
    updateUserData({
      sleepStatus: event.target.value,
    });
  };
  const getLable = () => {
    switch (currentStep) {
      case 7:
        return <span>{Text.RADIO_LABEL_1}</span>;
      case 8:
        return <span>{Text.RADIO_LABEL_2}</span>;
      case 9:
        return <span>{Text.RADIO_LABEL_3}</span>;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="radio-input-label">{getLable()}</div>
      {currentStep === 7 &&
        radioOptions1.map((option, index) => (
          <div key={index} className="radio-container">
            <input
              type="radio"
              id={`radioOption1${index}`}
              name="familyHistory1"
              value={option}
              checked={selectedOption1 === option}
              onChange={handleOption1Change}
            />
            <p>{option}</p>
          </div>
        ))}
      {currentStep === 8 &&
        radioOptions2.map((option, index) => (
          <div key={index} className="radio-container">
            <input
              type="radio"
              id={`radioOption2${index}`}
              name="familyHistory2"
              value={option}
              checked={selectedOption2 === option}
              onChange={handleOption2Change}
            />
            <p>{option}</p>
          </div>
        ))}
      {currentStep === 9 &&
        radioOptions3.map((option, index) => (
          <div key={index} className="radio-container">
            <input
              type="radio"
              id={`radioOption3${index}`}
              name="sleepQuality"
              value={option}
              checked={selectedOption3 === option}
              onChange={handleOption3Change}
            />
            <p>{option}</p>
          </div>
        ))}
    </div>
  );
};

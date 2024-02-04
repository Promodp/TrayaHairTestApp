import React, { useState } from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
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

  const radioOptions1 = [
    "Mother or anyone from mother's side of the family",
    "Father or anyone from father's side of the family",
    "From both mother and father",
    "None",
  ];

  const radioOptions2 = [
    "No",
    "Yes, mild that comes and goes",
    "Yes, heavy dandruff that sticks to the scalp",
    "I have Psoriasis",
    "I have Seborrheic Dermatitis",
  ];

  const radioOptions3 = [
    "Very peacefully for 6 to 8 hours",
    "Disturbed sleep, I wake up at least one time during the night",
    "Have difficulty falling asleep",
  ];

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
        return <span>Do you have a family history of hair loss?</span>;
      case 8:
        return <span>Do you have dandruf?</span>;
      case 9:
        return <span>How well do you sleep??</span>;
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

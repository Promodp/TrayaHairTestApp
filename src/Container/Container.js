import React, { useState } from "react";
import { InputForm } from "../Components/InputField/InputForm";
import { GenderComponent } from "../Components/GenderComponent/GenderComponent";
import { StagesCard } from "../Components/StagesCard/StagesCard";
import { RadioInputField } from "../Components/RadioInputField/RadioInputField";
import { FileUpload } from "../Components/FileUpload/FileUpload";
import { StartComponent } from "../Components/StartComponent/StartComponent";
import { Color, Text, ImageUrl, highlightCard } from "../Helper/Helper";
import "./Container.css";

export const Container = () => {
  const cardStages = [
    { text: "About You" },
    { text: "Hair Health" },
    { text: "Your Lifestyle" },
    { text: "Health Assessment" },
  ];

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputFormSelection, setInputFormSelection] = useState(false);

  //
  const [startComponent, setStartComponent] = useState(true);

  const [genderSelection, setGenderSelection] = useState(false);
  const [stageSelection, setStageSelection] = useState(false);
  const [radioInputSelection, setRadioInputSelection] = useState(false);
  const [fileUploadSelection, setFileUploadSelection] = useState(false);

  const increaseProgress = () => {
    if (currentStep <= 11) {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep + 1) * (100 / 11));
    } else {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep + 1) * (100 / 11));
    }
  };

  const decreaseProgress = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setProgress((currentStep - 1) * (100 / 10));
    }

    switch (currentStep) {
      case 0:
        setStartComponent(true);
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        break;
      case 1:
        setInputFormSelection(true);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 2:
        setInputFormSelection(true);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 3:
        setInputFormSelection(true);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 4:
        setInputFormSelection(true);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 5:
        setInputFormSelection(false);
        setGenderSelection(true);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 6:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(true);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 7:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(true);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 8:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(true);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 9:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(true);
        setFileUploadSelection(false);
        setStartComponent(false);
        break;
      case 10:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(true);
        setStartComponent(false);
        break;
      case 11:
        setInputFormSelection(false);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(true);
        setStartComponent(false);
        break;
      default:
        setInputFormSelection(true);
        setGenderSelection(false);
        setStageSelection(false);
        setRadioInputSelection(false);
        setFileUploadSelection(false);
        break;
    }
  };

  const existHandling = () => {
    setCurrentStep(0);
    setProgress(0);
    setGenderSelection(false);
    setStageSelection(false);
    setRadioInputSelection(false);
    setFileUploadSelection(false);
    setInputFormSelection(false);
    setStartComponent(true);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <img src={ImageUrl.LOGO_URL} className="App-logo" alt="logo" />
          <p className="logo-description">{Text.LOGO_TEXT}</p>
        </div>
      </div>
      {startComponent && (
        <StartComponent
          increaseProgress={increaseProgress}
          setInputFormSelection={setInputFormSelection}
          setStartComponent={setStartComponent}
        />
      )}
      {currentStep >= 1 && (
        <div
          className={currentStep === 1 ? "button-single" : "button-container"}
        >
          {currentStep >= 2 && (
            <button className="button prev-arrow" onClick={decreaseProgress}>
              <span>{Text.PRE_BUTTON}</span>
            </button>
          )}
          <button className="button" onClick={existHandling}>
            <span>{Text.EXIT_BUTTON}</span>
          </button>
        </div>
      )}
      {currentStep >= 1 && (
        <div className="card-container">
          {cardStages.map((item, index) => (
            <div
              className="cards"
              key={item.text}
              style={{
                background: highlightCard(index, currentStep).background,
                color: highlightCard(index, currentStep).color,
              }}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
      {currentStep >= 1 && (
        <div>
          <div className="progress-container">
            <div className="progress-bar-default">
              <div
                className="progress-bar"
                style={{ width: `${Math.floor(progress)}%` }}
              ></div>
            </div>
            <div className="percentage-display">{`${Math.floor(
              progress
            )}%`}</div>
          </div>
        </div>
      )}
      {inputFormSelection && (
        <div>
          <InputForm
            currentStep={currentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
            setGenderSelection={setGenderSelection}
            setInputFormSelection={setInputFormSelection}
          />
        </div>
      )}
      {genderSelection && (
        <GenderComponent
          setGenderSelection={setGenderSelection}
          setStageSelection={setStageSelection}
          increaseProgress={increaseProgress}
          decreaseProgress={decreaseProgress}
        />
      )}
      {stageSelection && (
        <StagesCard
          setRadioInputSelection={setRadioInputSelection}
          setStageSelection={setStageSelection}
          increaseProgress={increaseProgress}
          decreaseProgress={decreaseProgress}
        />
      )}
      {radioInputSelection && (
        <RadioInputField
          setRadioInputSelection={setRadioInputSelection}
          setFileUploadSelection={setFileUploadSelection}
          increaseProgress={increaseProgress}
          decreaseProgress={decreaseProgress}
          currentStep={currentStep}
        />
      )}
      {fileUploadSelection && (
        <FileUpload
          setFileUploadSelection={setFileUploadSelection}
          increaseProgress={increaseProgress}
          decreaseProgress={decreaseProgress}
        />
      )}
    </div>
  );
};

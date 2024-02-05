import React from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import { Text, stages } from "../../Helper/Helper";
import "./StagesCard.css";

export const StagesCard = ({
  setStageSelection,
  setRadioInputSelection,
  increaseProgress,
}) => {
  const { updateUserData } = useTrayaAppContext();

  const handleClick = (text) => {
    setStageSelection(false);
    setRadioInputSelection(true);
    increaseProgress();
    updateUserData({ stage: text });
  };
  return (
    <div className="stages-card-main">
      <div className="stages-label">
        <span>{Text.STAGE_LABEL}</span>
      </div>
      <div className="stages-card-container">
        {stages.map((stage, index) => (
          <div className="stages-card" key={index}>
            <img
              src={stage.url}
              alt={`Stage ${index + 1}`}
              className="stages-card-image"
            />
            <label className="radio-label">
              <input
                type="radio"
                name="stage"
                value={stage}
                onClick={() => handleClick(stage.text)}
              />
              {stage.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

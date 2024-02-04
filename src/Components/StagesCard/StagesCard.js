import React from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";

import "./StagesCard.css";

export const StagesCard = ({
  setStageSelection,
  setRadioInputSelection,
  increaseProgress,
}) => {
  const { updateUserData } = useTrayaAppContext();

  const stages = [
    {
      text: "Stage-1",
      url: "https://form.traya.health/_next/static/media/stage2.89ee6681.svg",
    },
    {
      text: "Stage-2",
      url: "https://form.traya.health/_next/static/media/stage1.ded3ad2d.svg",
    },
    {
      text: "Stage-3",
      url: "https://form.traya.health/_next/static/media/stage4.ae5d18a6.svg",
    },
    {
      text: "Stage-4",
      url: "https://form.traya.health/_next/static/media/stage6.fded0280.svg",
    },
  ];

  const handleClick = (text) => {
    setStageSelection(false);
    setRadioInputSelection(true);
    increaseProgress();
    updateUserData({ stage: text });
  };
  return (
    <div className="stages-card-main">
      <div className="stages-label">
        <span>Which image best describes your hair loss?</span>
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

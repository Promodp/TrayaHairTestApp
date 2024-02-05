import React from "react";
import { Text } from "../../Helper/Helper";
import "./StartComponent.css";

export const StartComponent = ({
  increaseProgress,
  setInputFormSelection,
  setStartComponent,
}) => {
  const handleTakeTest = () => {
    increaseProgress();
    setInputFormSelection(true);
    setStartComponent(false);
  };
  return (
    <div className="start-container">
      <h2>{Text.START_1}</h2>
      <h4>{Text.START_2}</h4>
      <div>
        <button type="button" className="take-test" onClick={handleTakeTest}>
          <span>{Text.START_3}</span>
        </button>
      </div>
    </div>
  );
};

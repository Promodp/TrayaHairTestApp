import React from "react";
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
      <h2>Hey there!</h2>
      <h4>Lets take the Traya hair test.</h4>
      <div>
        <button type="button" className="take-test" onClick={handleTakeTest}>
          <span>TAKE HAIR TEST</span>
        </button>
      </div>
    </div>
  );
};

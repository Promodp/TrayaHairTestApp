import React, { useState } from "react";
import { useMyContext } from "../../Container/ContextProvider";
import "./GenderComponent.css";

export const GenderComponent = ({
  setSelectedGender,
  setGenderSelection,
  setStageSelection,
  increaseProgress,
}) => {
  const { updateUserData } = useMyContext();
  const cardGender = [{ text: "Male" }, { text: "Female" }];

  const handleClick = (text) => {
    setSelectedGender(text);
    setGenderSelection(false);
    setStageSelection(true);
    increaseProgress();
    updateUserData({ gender: text });
  };

  return (
    <div className="container">
      <div className="gender-label">
        <span className="">Gender</span>
      </div>
      <div className="empty-div"></div>

      <div className="card-gender-conatiner">
        {cardGender.map((item) => (
          <div
            className={`cards-gender ${
              item.text === "Female" ? "disabled" : ""
            }`}
            key={item.text}
            onClick={() => item.text !== "Female" && handleClick(item.text)}
          >
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

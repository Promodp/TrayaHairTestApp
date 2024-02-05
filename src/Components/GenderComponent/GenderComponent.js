import React from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import { cardGender, Text } from "../../Helper/Helper";
import "./GenderComponent.css";

export const GenderComponent = ({
  setGenderSelection,
  setStageSelection,
  increaseProgress,
}) => {
  const { updateUserData } = useTrayaAppContext();

  const handleClick = (text) => {
    setGenderSelection(false);
    setStageSelection(true);
    increaseProgress();
    updateUserData({ gender: text });
  };

  return (
    <div className="container">
      <div className="gender-label">
        <span className="">{Text.GENDER}</span>
      </div>
      <div className="empty-div"></div>
      <div className="card-gender-conatiner">
        {cardGender.map((item) => (
          <div
            className={`cards-gender ${
              item.text === Text.FEMALE ? "disabled" : ""
            }`}
            key={item.text}
            onClick={() => item.text !== Text.FEMALE && handleClick(item.text)}
          >
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

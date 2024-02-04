import React from "react";
import { useMyContext } from "../../Container/ContextProvider";
import "./DetailComponent.css";

export const DetailComponent = () => {
  const { userData } = useMyContext();
  return (
    <div className="detail-container">
      <header className="header">
        <img
          src="https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraya.a5a9cff0.png&w=96&q=75"
          alt="Traya Logo"
          className="logo"
        />
      </header>
      <div className="content">
        <div className="centered-image-container">
          <img
            src="https://traya.health/cdn/shop/files/Rectangle_5_1.png?v=1675154983"
            alt="Centered Image"
            className="centered-image"
          />
          <div className="text-section">
            <div className="assessment">
              <span>Assessment Report</span>
              <div className="divider"></div>
            </div>
            <div className="diagnosis">
              <div className="user-detail">
                <h4>Your Details</h4>
                <span>
                  <p>Name:</p> {userData.name}
                </span>
                <span>
                  <p>Phone:</p> {userData.phoneNumber}
                </span>
                <span>
                  <p>Email:</p> {userData.email}
                </span>
                <span>
                  <p>Age:</p> {userData.age} years
                </span>
                <span>
                  <p>Gender:</p> {userData.gender}
                </span>
              </div>
              <div className="other-detail">
                <h4>Other Information</h4>
                <span>
                  <p>Male Pattern Hair Loss Stage:</p> {userData.stage}
                </span>
                <span>
                  <p>Family History:</p> {userData.familyHistory}
                </span>
                <span>
                  <p> Dandruff Status:</p> {userData.dandruffStatus}
                </span>
                <span>
                  <p>Sleep Status:</p>
                  {userData.sleepStatus}
                </span>
              </div>
            </div>
            <div className="uploaded-images">
              <div>Uploaded Image</div>
              <div>
                <img src={userData.uploadedImage} alt="Selected File" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

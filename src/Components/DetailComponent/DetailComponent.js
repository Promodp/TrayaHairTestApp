import React, { useEffect } from "react";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import "./DetailComponent.css";
import { useNavigate } from "react-router-dom";
import { ImageUrl, Text } from "../../Helper/Helper";

export const DetailComponent = () => {
  const navigate = useNavigate();
  const { userData } = useTrayaAppContext();

  useEffect(() => {
    if (!userData.uploadedImage) {
      navigate("/");
    }
  }, [userData]);

  return (
    <div className="detail-container">
      <header className="header">
        <img src={ImageUrl.DETAIL_PAGE_URL_1} alt="" className="logo" />
      </header>
      <div className="content">
        <div className="centered-image-container">
          <img
            src={ImageUrl.DETAIL_PAGE_URL_2}
            alt=""
            className="centered-image"
          />
          <div className="text-section">
            <div className="assessment">
              <span>{Text.ASSESMENT}</span>
              <div className="divider"></div>
            </div>
            <div className="diagnosis">
              <div className="user-detail">
                <h4>{Text.DETAIL}</h4>
                <span>
                  <p>{Text.NAME}</p> {userData.name}
                </span>
                <span>
                  <p>{Text.PHONE}</p> {userData.phoneNumber}
                </span>
                <span>
                  <p>{Text.EMAIL}</p> {userData.email}
                </span>
                <span>
                  <p>{Text.AGE}</p> {userData.age} {Text.YEAR}
                </span>
                <span>
                  <p>{Text.GENDER}</p> {userData.gender}
                </span>
              </div>
              <div className="other-detail">
                <h4>{Text.INFO}</h4>
                <span>
                  <p>{Text.STAGE}</p> {userData.stage}
                </span>
                <span>
                  <p>{Text.FAMILY_HISTORY}</p> {userData.familyHistory}
                </span>
                <span>
                  <p>{Text.DANDRUFF_STATUS}</p> {userData.dandruffStatus}
                </span>
                <span>
                  <p>{Text.SLEEP_STATUS}</p>
                  {userData.sleepStatus}
                </span>
              </div>
            </div>
            <div className="uploaded-images">
              <div className="text-style">{Text.UPLOADED_IMG}</div>
              <div>
                <img src={userData.uploadedImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

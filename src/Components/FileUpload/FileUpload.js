import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTrayaAppContext } from "../../Container/ContextProvider";
import { ImageUrl, Text } from "../../Helper/Helper";
import "./FileUpload.css";

export const FileUpload = ({ increaseProgress }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { updateUserData } = useTrayaAppContext();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setIsSubmitted(true);
      increaseProgress();
      updateUserData({ uploadedImage: URL.createObjectURL(file) });
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmitDetails = () => {
    increaseProgress();
    navigate("/report-detail");
  };

  return (
    <div>
      <p>
        <b>{Text.UPLOAD_1}</b>
        <br />
        {Text.UPLOAD_2}
      </p>
      <div>
        <p>{Text.UPLOAD_3}</p>
        <p>{Text.UPLOAD_4}</p>
      </div>
      <div className="image-style">
        {selectedFile?.length > 1 ? (
          <img src={selectedFile} onClick={handleImageClick} alt="" />
        ) : (
          <img src={ImageUrl.SELFIE_IMG} onClick={handleImageClick} alt="" />
        )}
      </div>
      {!isSubmitted ? (
        <>
          <label htmlFor="fileInput" className="custom-file-upload">
            {Text.UPLOAD_5}
          </label>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </>
      ) : (
        <label className="custom-file-upload" onClick={handleSubmitDetails}>
          {Text.UPLOAD_6}
        </label>
      )}
    </div>
  );
};

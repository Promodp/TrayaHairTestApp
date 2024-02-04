import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTrayaAppContext } from "../../Container/ContextProvider";
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
  const selfieImage =
    "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselfie.af7a7f3c.png&w=256&q=75";

  return (
    <div>
      <p>
        <b> Upload your scalp photo.</b>
        <br /> After you place the order, this photo will be used by:
      </p>
      <div>
        <p>Doctors - To analyze and prescribe your kit's dosage.</p>
        <p>Hair Coaches - To track your hair progress.</p>
      </div>
      <div className="image-style">
        {selectedFile?.length > 1 ? (
          <img
            src={selectedFile}
            alt="Selected File"
            onClick={handleImageClick}
          />
        ) : (
          <img
            src={selfieImage}
            alt="Default Image"
            onClick={handleImageClick}
          />
        )}
      </div>
      {!isSubmitted ? (
        <div className="file-upload-buton">
          <button className="custom-file-upload">Upload Image</button>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <button onClick={handleSubmitDetails}>Submit</button>
      )}
    </div>
  );
};

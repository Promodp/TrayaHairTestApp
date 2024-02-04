import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../Container/ContextProvider";

export const FileUpload = ({ increaseProgress }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { updateUserData } = useMyContext();

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
      <div>
        {selectedFile?.length > 1 ? (
          <img
            style={{
              width: 200,
              height: 200,
              padding: "10px",
              border: "2px dotted #000000",
            }}
            src={selectedFile}
            alt="Selected File"
            onClick={handleImageClick}
          />
        ) : (
          <img
            src={selfieImage}
            style={{
              width: 200,
              height: 200,
              padding: "10px",
              border: "2px dotted #000000",
            }}
            alt="Default Image"
            onClick={handleImageClick}
          />
        )}
      </div>
      {!isSubmitted ? (
        <div>
          <label
            style={{
              display: "inline-block",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "rgb(42 43 42)",
              color: "white",
              borderRadius: "5px",
              transition: "background-color 0.3s",
              width: "200px",
            }}
            htmlFor="fileInput"
            className="custom-file-upload"
          >
            Upload Image
          </label>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      ) : (
        <button
          style={{
            display: "inline-block",
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "rgb(42 43 42)",
            color: "white",
            borderRadius: "5px",
            transition: "background-color 0.3s",
            width: "200px",
          }}
          onClick={handleSubmitDetails}
        >
          Submit
        </button>
      )}
    </div>
  );
};

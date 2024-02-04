import React, { createContext, useContext, useState } from "react";

const TrayaAppContext = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    age: "",
    gender: "",
    stage: "",
    familyHistory: "",
    dandruffStatus: "",
    sleepStatus: "",
    uploadedImage: "",
  });

  const updateUserData = (newData) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <TrayaAppContext.Provider value={{ userData, updateUserData }}>
      {children}
    </TrayaAppContext.Provider>
  );
};

const useTrayaAppContext = () => {
  const context = useContext(TrayaAppContext);
  return context;
};

export { ContextProvider, useTrayaAppContext };

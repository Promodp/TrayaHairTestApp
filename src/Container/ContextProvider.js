import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

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
    <MyContext.Provider value={{ userData, updateUserData }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};

export { ContextProvider, useMyContext };

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./Container/Container";
import { DetailComponent } from "./Components/DetailComponent/DetailComponent";
import { ContextProvider } from "../src/Container/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/report-detail" element={<DetailComponent />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;

// import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DesignPage from "./components/DesignPage";
import LoadPage from "./components/LoadPage";
import PlantsInfoPage from "./components/PlantsInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/load" element={<LoadPage />} />
      <Route path="/plants" element={<PlantsInfoPage />} />
    </Routes>
  );
}

export default App;

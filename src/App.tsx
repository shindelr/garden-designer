// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DesignPage from "./components/DesignPage";
import LoadPage from "./components/LoadPage";
import PlantsInfoPage from "./components/PlantsInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/load" element={<LoadPage />} />
      <Route path="/plants" element={<PlantsInfoPage />} />
    </Routes>
  );
}

export default App;

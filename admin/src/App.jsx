import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airport from "./pages/Airport";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<Airport />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

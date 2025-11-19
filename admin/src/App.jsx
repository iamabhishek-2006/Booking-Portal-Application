import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airport from "./pages/Airport";
import Home from "./pages/Home";
import Flight from "./pages/Flight";
import Users from "./pages/users";
import Passengers from "./pages/passengers";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<Airport />} />
        <Route path="/flights" element={<Flight />} />
        <Route path="/users" element={<Users />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/login" element={<Login />} />
        <Route    path="*"    element={  <div  ><h1>401 not found</h1> </div> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

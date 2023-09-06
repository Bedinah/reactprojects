import React from "react";
import { Route, Routes } from "react-router-dom";
import MyButton from "../components/button";
import Home from "../pages/home";
import Square from "../pages/landing";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/landing" element={<Square />}></Route>
      </Routes>
    </div>
  );
};

export default Index;

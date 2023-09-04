import React from "react";
import { Route, Routes } from "react-router-dom";
import MyButton from "../components/button";
import Home from "../pages/home";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Index;

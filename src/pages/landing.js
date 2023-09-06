import React from "react";
import MyButton from "../components/button";

const Square = () => {
  return (
    <>
      <div className="board-row">
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
      <div className="board-row">
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
      <div className="board-row">
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
    </>
  );
};

export default Square;

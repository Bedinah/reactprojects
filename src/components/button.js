import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count counts</h1>
      <button count={count} onClick={handleClick}>
      </button>
    </>
  );
};
export default MyButton;

import React, { useState } from "react";

const MyButton = () => {
  const [value, setValue] = useState(null);
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  const handleClick = () => {
    setValue('X');
  };
  return (
    <>
      {/* <h1>Count counts</h1>
      <button count={count} onClick={handleClick}>
      </button> */}
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};
export default MyButton;

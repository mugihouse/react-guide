import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState(0);

  const countUpHandler = () => {
    setVal((state) => state + 1);
  };

  const countDownHandler = () => {
    setVal((state) => state - 1);
  };
  return (
    <>
      <p>現在のカウント数: {val}</p>
      <button onClick={countUpHandler}>+</button>
      <button onClick={countDownHandler}>-</button>
    </>
  );
};

export default Example;

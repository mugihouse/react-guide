import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      <label htmlFor="my-check">チェック：</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <br />
      {isChecked ? "ON!" : "OFF!"}
    </div>
  );
};

export default Example;

import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("");

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  const onChange = (e) => {
    setFruit(e.target.value);
  };
  return (
    <div>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      <h3>私は{fruit}が食べたい</h3>
    </div>
  );
};

export default Example;

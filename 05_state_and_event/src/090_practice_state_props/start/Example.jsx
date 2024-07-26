import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <p>
        カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。
      </p> */}
      {/* このコメントアウトを外して利用！ */}
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => (
  <h3>
    {title}: {count}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((state) => state + 1);
  };
  const countDown = () => {
    setCount((state) => state - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

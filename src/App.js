import "./styles.css";

import { useState } from "react";

export default function MyApp() {
  const buttons = [];

  for (let i = 0; i < 5; i++) {
    buttons.push(<MyButton />);
  }

  return (
    <div>
      <h1> Multiple Counters </h1>
      {buttons}
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <>
      {count}
      <button onClick={handleIncrease} style={{ color: "red", margin: "10px" }}>
        Increase Count
      </button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <hr />
    </>
  );
}

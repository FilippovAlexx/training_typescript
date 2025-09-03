import React from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      <div className="counter__value" aria-live="polite">{count}</div>
      <div className="counter__controls">
        <Button variant="secondary" onClick={() => setCount(c => c - 1)}>–</Button>
        <Button variant="ghost" onClick={() => setCount(0)}>Сброс</Button>
        <Button onClick={() => setCount(c => c + 1)}>+</Button>
      </div>
    </div>
  );
}

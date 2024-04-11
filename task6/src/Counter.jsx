// Counter.js
import React, { useState } from "react";

const Counter = () => {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Define functions to increment and decrement the count
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Render buttons to increment and decrement the count */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

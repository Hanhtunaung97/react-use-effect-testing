import React, { useState } from "react";

const Context = () => {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md mb-3">
        <p>This is the component to be hidden/shown.</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={decrement}>-</button>
        <span className="text-xl font-semibold">{count}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Context;

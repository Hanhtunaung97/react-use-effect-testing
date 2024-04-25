import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <div className="flex items-center justify-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={decrement}>-</button>
        <span className="text-xl font-semibold">{count}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;

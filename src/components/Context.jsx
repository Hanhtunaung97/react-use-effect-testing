import React, { useEffect, useState } from "react";

const Context = () => {
  const [count, setCount] = useState(0);
  console.log("update",count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  useEffect(() => {
    console.log("component mount");
    // fetch('https://fakestoreapi.com/products/1')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    fetch('http://localhost:5173/api/courses')
    .then(res=>res.json())
    .then(json=>console.log(json))
    return () => {
      console.log("component unmount");
    };
  }, [count]);
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md mb-3">
        <p>This is the component to be hidden/shown.</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Context;

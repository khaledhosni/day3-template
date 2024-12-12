import React, { useEffect, useState } from "react";

const LifeCycleDemo = () => {
  const [count, setCount] = useState(10);
  const [name, setName] = useState("khaled");

  function handleButton() {
    setCount(count + 1);
  }
  function handleButton2() {
    setName(name + Math.random);
  }
  useEffect(() => {
    console.log("component did mount");
  }, [name]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleButton}>Increment</button>
      <button onClick={handleButton2}>change name</button>
    </div>
  );
};

export default LifeCycleDemo;

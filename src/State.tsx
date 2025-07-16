import { useState } from "react";
import "./App.css";

function State() {
  const [count, setCount] = useState(10);
  const [message, setMessage] = useState("Welcome!");
  const decrement = () => {
    // setCount(count - 1);
    setCount(prevCount => prevCount - 1);
  };
  function increment() {
    // setCount(count + 1);
    setCount(prevCount => prevCount + 1);
  } 
  
  return (
    <>
      <p className="read-the-docs">use state hook in react. we can use hooks only in functional component</p>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Hello, User!")}>Say Hello</button>
      <button onClick={() => setMessage("Goodbye!")}>Say Goodbye</button>
      <div>

      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      </div>

    </>
  );
}

export default State;

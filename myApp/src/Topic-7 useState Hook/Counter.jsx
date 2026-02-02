import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [username,setUsername] = useState("");
  const [age,setAge] = useState(0);

  console.log("Counter Component Render");  
  
  const increment = () => {
    setCount(count => count + 1);
  }

  return (
    <div id="counter-component">
      <h1>Counter Component</h1>
      <h2>Count: {count}</h2>
      <h2>userName: {username}</h2>
      <h2>Age: {age}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setUsername("Shresth Rajput")}>Username</button>
      <button onClick={() => setAge(18)}>Age</button>
    </div>
  );
};

export default Counter;

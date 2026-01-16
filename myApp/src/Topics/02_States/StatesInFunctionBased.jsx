import { useState } from 'react';

export const StatesInFunctionBased = () => {
    let [count, setCount] = useState(0);

    // function btnHandle() {
    //     console.log("States updated..!");
    //     setState("Byee");
    // }

    function increment() {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }


    function decrement() {
        setCount((prev) =>  prev >0? prev - 1: 0);
    }

    function reset() {
        count = 0;
        setCount(count);
    }
    
    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement} > Decrement</button>
            <button onClick={reset} >Reset</button>
            {/* <h1>Learn states in Function based Component</h1>
            {/* <h1>Learn states in Function based Component</h1>
            <h2>{state}</h2>
            <button onClick={btnHandle} >update State</button> */}
        </div>
    );
};

/**
 * 
 */
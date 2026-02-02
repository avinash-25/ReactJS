import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);

    const handleClick = () => {

        setCount((count) => count + 1)
        setUsername("Avinash")
        setAge(24);

        // setCount(count + 1);

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    }

    return (
        <>
            <h1>Counter component</h1>
            <button onClick={handleClick} >Click here...</button>
            <h3>count : {count}</h3>
            <h3>Username : {username}</h3>
            <h3>Age : {age}</h3>
        </>
    )
}

export default Counter;

/**
 * When useState called then a Hooka named array will be created.
 * - Hooks array all the info like value, type and queues.
 * value take care of all the values inside them
 * setCount insert the value in the queue and then that queue and inform the react, task is solved
 * component only to be rendered when then increment function will be completed.
 * If we call the setCount 5 times then it will create 5 array, each for 1 and also after complete the increment function value of hooks array will be updated.q
 * When handler execution completed then react will come in picture and update the state of counter.
 *
 *
 * A hook array will be crested
 *  - each index from starting will be used by each useState and that holds value, type and queues.
 *  - component will be rendered after handleClick function will complete the execution.
 *  -
 */
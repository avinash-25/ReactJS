import { useRef, useState } from "react"

const Demo3 = () => {
    const [count, setCount] = useState(0);
    const z = useRef(null);

    const handleCount = () => {
        setCount(count + 1);
        console.log("useRef - z : ", z.current);
    }
    return (
        <>
            <h1>Demo 3</h1>
            <h2>count : {count}</h2>
            <button onClick={handleCount} >Click</button>
            <input
                type="text"
                placeholder="Enter fullname"
                name="fullname"
                ref={z}
            />
        </>
    )
}

export default Demo3;
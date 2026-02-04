import {useState, useEffect} from 'react'

const Demo2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect Called..!!")
    },[])
    console.log("Demo - 2 rendered");

    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
          <h1>Demo -2 Component</h1>
          <h3>count : {count}</h3>
          <button onClick={handleClick} >Click</button>
    </div>
  )
}

export default Demo2

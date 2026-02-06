import {useState,useEffect} from 'react'

const Demo2 = () => {
  const [count, setCount] = useState(0);

    useEffect(() => {
    console.log("Demo2 useEffect");

    return () => {
      console.log("Demo2 cleanup");
    }
  }, [])

  console.log("Demo2 Render")

  return (
    <div className='demo2'>
        <h1>Demo-2 Component</h1>
        <h2>Count: {count}</h2>
        <button className="btn" onClick={()=>{setCount(count + 1)}}>Add</button>
    </div>

  )
}

export default Demo2

// When we call childerne inside parent then hooks of childern will be called but when we call children inside parent then hooks of children will not be called. It is because when we call children inside parent then it is not considered as a child component and it is considered as a normal function call. So, when we call children inside parent then it will not trigger the hooks of children.

// when we call anu child compoonent inside parent component and in the shild component if we use any hooks then if we  rerender the parent component then the child component will also be re-rendered and the hooks of child component will also be called.

// but when we render the child seperatly then parent component will not be re-rendered and the hooks of child component will not be called. It is because when we call child component seperately then it is not considered as a child component and it is considered as a normal function call. So, when we call child component seperately then it will not trigger the hooks of child component.

// and hooks of child compoent will be rendered on the ui first and then hooks of parent component will be rendered on the ui. It is because when we call child component inside parent component then it is considered as a child component and it is considered as a normal function call. So, when we call child component inside parent component then it will trigger the hooks of child component first and then it will trigger the hooks of parent component.



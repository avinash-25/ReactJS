import {useRef, useState} from 'react'

const Demo = () => {
    const [x, setX] = useState(0)
    const z = useRef(0); // useRef hook to hold mutable value which does not cause re-rendering
    let y = 0; // Not updating on UI because real DOM is not aware of this variable

    const handleX = () => {
        setX(x + 1);
    }

    const handleY = () => {
        y = y + 1;
        console.log(y);
    }

    const handleZ = () => {
        z.current = z.current + 1;
        console.log(z.current);
    }

    return (
        <div>
            <h1>Demo Component</h1>
            <h2>State-x {x}</h2>
            <h2>Normal-y {y}</h2>
            <h2>State-Z {z.current}</h2>

            <button onClick={handleX} >Increment X</button>
            <button onClick={handleY} >Increment Y</button>
            <button onClick={handleZ} >Increment Z</button>

        </div>
    )
 }
export default Demo

/**
 * When we click on Increment X button, the value of x is updated using setX method. This causes the component to re-render and the updated value of x is reflected in the UI.

When we click on Increment Y button, the value of y is updated directly. However, since y is not part of the component's state, React does not re-render the component. As a result, the updated value of y is not reflected in the UI. The console.log statement will show the updated value of y in the console, but the UI will still display the old value.

When State changes => React re-renders the component => UI gets updated

Before the state change we want to hold the value which should not cause re-rendering of the component. In such cases we use useRef hook.
 */

/**
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * It’s like a “box” that can hold a mutable value in its .current property.
 * Unlike state, changing a ref’s .current value doesn’t cause your component to re-render.
 * useRef returns object having single property called current.
 * We cant replace object only update the value of current property.
 * Common use cases for useRef:
 * 1. Accessing DOM elements directly.
 * 2. Storing mutable values that do not cause re-renders when updated.
 * 3. Keeping track of previous values.
 * 4. Integrating with third-party libraries that require mutable references.
 * 5. Implementing timers or intervals.
 * 6. Managing focus on input elements.
 *
 */
## What er dont use

1. if
2. else
3. while
4. for loop
5. switch

- we cant write if, else, while, for, switch inside javascript envionment in JSX.

```jsx
return (
  <div>
    <h1> App component </h1>
  </div>
);
```

## What we can write inside javascript envionment of jsx.

1. Ternamry operator.
2. Logical AND (&&).
3. Logical NOT (!)
4. function expressions
5. map, reduce, filter

```jsx
const App = () => {
  const handleClick = () => {
    console.log("clicked...!");
  };
};

return (
  <div>
    <h1> App component </h1>

    <Button onClick={handleClick}>click</Button>
  </div>
);
```

- If we click in the hab=dleclick then everyting inside handleclick function assigned to handlClick variable

### Why we cant call () like html

- Because function will be called without click on the button. So we pass only function name as a variable and when we click on that function then function will be executed.

## Synthetic event

- enable wrapper on event object is called synthetic event.

- A SynthesticEvent is a react is a cross browser wrapper around the browsers native eventobject.
- react creates this wrapper to ensure consistent event behaviour across different broswsers, normalizing properties and methods.

## Config Driven UI

- config driven UI is a pettern where the user interface is dynamically generated based on configuration data (typically JSON) recieved from the backend, rather that being hardcoded.
- this allows UI changes without reploying code, enable flexiblity across users, regions or business requierments.

## React Hooks

- React hooks are functions that let you use state and other React features in function components without writing classes.

### Rules for hooks

- Only call at top level - never inside loops, cn=onditions, or nested functions
- only call from react components - use in components or other custom hooks only

R - import react
A - Arrow function
F - Functions
C - component.
E - Export.

**1. useState hook :**

`useState` is a React hook that lets you add state to functional component by returning a statuful value and a functions to update it.

Syntax :

```js
const [state, setState] = useState(initialBalue);
```

- `state` - the current state value
- `setState` - functions to update the state and trigger re-render
- `initialValue` - the initial state (can be any type: string, number, object, array, etc)
- Reurns an array with exactaly two elements.
- Calling `setState` causes the componenet to re-render with the new state.
- state updates are asynchronmous and may be batched.

**Q. Why do we use useState hook?**

- Whenever state variables update via setState, React triggers a reconcilattion cycle - react re-renders the component, compares the new virtual DOM with the previous one and efficiently update only the changed parts in the actual DOM.

- This process ensures the UI stays in sync with the application state - React does not re-render the entire page,, just the specific components affected by the state change, making updtes fast and efficient.

**1. useEffect hook :**

The `useEffect` hook is a built-in React hook that allows you to perform side effects in functions componenets.Side effects are operations that interact with the outside world, such as data fetching, subscriptions, manually changing the DOM, or setting up timers.

**_Syntax_**

```js
import {useEffect} from 'react';

function MyComponent(){
  useEffect(() => {
    //side effect code here

    // optional cleanup here

    return () ={
      //cleanup code here
    };
  }, [dependencies]); //Dependency Array
}
```

Basic Syntax

```js
useEffect(() => {
  //Effect code
}, [dependencies]);
```

**_1. Effect functions_**

- The first argument is a function that contains your **side effect** code
- this function runs after the component reders.
- Side effect means Those type of operations we want to do those are not done by react.

**_2. Dependency Array (second argument)_**

- **_No dependecy array :_** Effect runs after every render

```js
useEffect(() => {
  console.log("Runs after every render");
});
```

- **_Empty dependency array :_** Effect runs only once after initial render (like componentDidMount)

```js
useEffect(() => {
  console.log("Runs only once after initial render");
}[]);
```

- **_with dependencies :_** Effect runs when any dependecy value changes

```js
useEffect(() => {
 console.log("Runs when count changes")
}[count]);
```

**Question : Why we use useEffect()**

- data fetching/ API calling
- DOM manipulations
- Setting up timers and Intervals.

- Firstly load the body
- then API call (here they wait for some second because UI freezes)
- then after redner the UI
  (Shimmer UI) - At initial render the webpage not completly loaded. For some initial time the dummy UI represents there.

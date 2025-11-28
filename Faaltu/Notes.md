# Day - 1

npx create vite@latest

```js
server:{
port: 5173,
open: true
}
```

## What is JSX

- JSX is HTML inside javascript.(This is wrong)
- JSX is HTML or XML like structure written in javascript.

## Rules for JSX

1. Must return a single parent element (<div>, <></> Fragment)
2. Use camel casing for attributes in JSX (className, tabIndex, onClick, htmlFor)
3. Use `className` instead of `class`
4. use `htmlFor` for `for`
5. Every tag must closed even unpair tag must be closed(like <img/>, <br/>)
6. to integreate javascript inside JSX we use {}.
7. Style must be in javascript object not in string.

**JSX comment**
`/* comment */`

## Javascript Integeration

1. can use any Js execution inside {}.
2. cannot use statements (if, else, while, for, switch, functions decalarations) inside {}.

Example :

main.jsx file

```js
import { createRoot } from "react-dom/client";

const h1 = <h1>Hello world</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

const Header = () => {
  return <h1>Hello from component</h1>;
};

createRoot(document.getElementById("root")).render(<Header />);
```

### JSX working

vite get the code and convert into the react element.
vite/plugin-react give the power to convert the JSX into js code and this is treated as a js object.
if any JSX file contains components then we must have to make a file name starts with capital letter.
If doesnot have components means they have only elements then the file name starts with small letters.

### Componenet :

It is a javascript function which returns JSX.
componenet name always starts with capital letter
those type of function which returns JSX is said to be components

To call the componenet in a react we have to write like a html open closing tag.
component call returns JSX and that JSX will taken by vite and convert them in react element and by render method convert them in tag and put to html.

1. function based component
2. class based componenet

## Strictmode

- Helps in debugging
- Dont use in production
- It helps in multiple call
-

### Interview Questions

1. What is JSX
2. Rules to write JSX.

# Day - 2

How to use react element in component

- use {xyz} : xyz is the name of react element

## Composit component or Componenet Composition

- To call a component inside another componenet is known as Componenet composition.

### Inline styling in JSX

```jsx
<div style={{}}>
  {" "}
  // first bracket will activate javascript and second bracket will be javascript
  object.
</div>
```

## Props :

- Only string can send inside `""`.
- If we have to send number or anything then we have to use javascript environment `{}`

\*\*If we dont pass the any value to the props then by default it will send the `empty object`.

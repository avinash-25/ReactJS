//* React way
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById("root")).render(
    <App/> // Because browser can makes diff in element and component
);









//* Js Way
// const div = document.getElementById("root");
// const h1 = document.createElement("h1");

// h1.textContent = "Hello react";
// div.append(h1);
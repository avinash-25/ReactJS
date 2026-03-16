import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"

import App from "./App.jsx";
import Home from "./Topic-22 useParams/pages/Home.jsx";
import About from "./Topic-22 useParams/pages/About.jsx";
import Career from "./Topic-22 useParams/pages/Career.jsx";
import Products from "./Topic-22 useParams/pages/Products.jsx";
import Error from "./Topic-21 React Router Part-1/Error.jsx"
import NotFound from "./Topic-21 React Router Part-1/NotFound.jsx"
import CategoryPage from "./Topic-22 useParams/pages/CategoryPage.jsx";
import Login from "./Topic-22 useParams/pages/Login.jsx"
import Dashboard from "./Topic-22 useParams/pages/Dashboard.jsx";
import Protected from "./Topic-22 useParams/pages/Protected.jsx";
// Routing Configuration Setup

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"career",
                element:<Career/>
            },
            {
                path:"products/:id",
                element:<Products/>,
                loader: async ({params}) => {
                    console.log("params:",params.id);
                    const response = await fetch(`https://api.theindianhome.in/api/product/list`);
                    const {products} = await response.json();
                    const singleProduct = products.find(element=> element._id === params.id)
                    return singleProduct;
               }
            },
            {
                path:"*",
                element:<NotFound/>
            },
            {
                path:"category/:id",
                element:<CategoryPage/>
            },

        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"dashboard",
        element: <Protected>
            <Dashboard/>
        </Protected>
    }
])






createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// Explain all above code

// 1. We are importing necessary modules and components from React, ReactDOM, and React Router DOM.
// 2. We are creating a router configuration using createBrowserRouter, which defines the routes and their corresponding components.
// 3. The main route "/" renders the App component, and it has nested routes for Home, About, Career, Products, and a catch-all route for NotFound.
// 4. The Products route uses a dynamic segment ":id" to fetch product details based on the ID from the URL.
// 5. We also have separate routes for Login and Dashboard, where Dashboard is protected by a Protected component.
// 6. Finally, we render the RouterProvider with the defined router configuration to enable routing in our application.

//? Explain useMemo and useCallback in React
// useMemo and useCallback are React hooks that help optimize performance by memoizing values and functions, respectively.

// useMemo is used to memoize the result of a function. It takes a function and an array of dependencies as arguments. The function will only be re-evaluated when one of the dependencies changes. This can help prevent unnecessary calculations and improve performance, especially for expensive computations.

// useCallback is used to memoize a function. It takes a function and an array of dependencies as arguments. The function will only be re-created when one of the dependencies changes. This can help prevent unnecessary re-renders of child components that depend on the function, as they will receive the same reference to the function unless its dependencies change.

// In summary, useMemo is used to memoize values, while useCallback is used to memoize functions. Both hooks can help optimize performance by preventing unnecessary calculations and re-renders in React applications.

//? Explain useRef in React
// useRef is a React hook that allows you to create a mutable reference that persists across re-renders. It returns a mutable object with a current property that can hold any value. The main use case for useRef is to access and manipulate DOM elements directly, but it can also be used to store any mutable value that you want to persist without causing re-renders.

// When you create a ref using useRef, it does not trigger a re-render when the current property is updated. This makes it useful for storing values that do not affect the rendering of the component, such as timers, previous state values, or any other mutable data.

// In summary, useRef is a powerful hook in React that allows you to create mutable references that persist across re-renders, making it useful for accessing DOM elements and storing mutable values without causing unnecessary re-renders.



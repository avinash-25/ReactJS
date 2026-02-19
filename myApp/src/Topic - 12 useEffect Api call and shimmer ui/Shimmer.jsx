import "./style.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {Array(10).fill("").map((element,index) =>  <div key={index} className="card"></div>)}
    </div>
  )
}




export default Shimmer


//* What is Shimmer UI?
// Shimmer UI is a loading placeholder that mimics the structure of the content being loaded, providing a visual cue to users while data is being fetched. It typically consists of animated, gradient-filled shapes that resemble the layout of the actual content, enhancing user experience during loading times.

//* Why use Shimmer UI?
// 1. Improved User Experience
// 2. By showing a placeholder, users perceive that the application is responsive and actively fetching data, even if the actual loading time is longer.
// 3. Consistency: Shimmer UI can be designed to match the layout of the content being loaded.
// 4. Engagement: It keeps users engaged and encourages them to stay on the page.

//* How to implement Shimmer UI in React?
// 1. Create a Shimmer component that renders the placeholder elements.
// 2. Use CSS animations to create the shimmering effect.
// 3. Conditionally render the Shimmer component while data is being fetched, and replace it with the actual content once the data is loaded.

//* What is useRef in React?
// useRef is a React hook that allows you to create a mutable reference that persists across re-renders. It can be used to access and manipulate DOM elements directly, store mutable values, or keep track of previous state values without causing re-renders. The useRef hook returns a ref object with a current property that can be assigned to a DOM element or used to store any mutable value.

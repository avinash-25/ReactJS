import Child from "./Child";


const Parent = () => {
    const person = {
        fullname: "Chombu Singh",
        age:23
    }
    return <div>
        <h1>Parent Component</h1>
        <Child  person={person}/>
    </div>
}

export default Parent;

//~ In the above code, we are creating a person object in the Parent component and passing it down to the Child component as a prop. This way, we are not mutating the props object in the Child component, and we can still access the data without any issues.
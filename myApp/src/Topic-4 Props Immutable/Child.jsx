/*
    props = {
              person: {
                    fullname: "Chombu Singh",
                    age:23
                }
            }
 */

const Child = (props) => {

    props.person = {
        fullname: "Chombu Singh",
        age:23
    }
    // props.person.age = 26
    console.log(props.person)
    return <div>Child Component </div>
}

export default Child;

//~ In the above code, we are trying to mutate the props object by assigning a new value to the person property. This is not allowed in React because props are immutable. Instead of mutating the props, we should create a new object and pass it down to the child component if we want to change the data.


//~ To fix this issue, we can create a new object and pass it down to the child component like this:

// Parent Component
// const Parent = () => {
//     const person = {
//         fullname: "Chombu Singh",
//         age: 23
//     };

//     return <Child person={person} />;
// }
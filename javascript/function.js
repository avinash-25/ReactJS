//* Dfault export

// function greet(name) {
//     console.log("Welcome,", name,"!!");
// }

// export default greet;


//* Named export

export function greet(name) {
    console.log("Welcome,", name,"!!");
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

export {sum, multiply}






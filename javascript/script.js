import { greet, sum as add, multiply } from "./function.js";

greet("Avinash");
console.log("Sum : ", add(3, 4));
console.log("Multiply is : ", multiply(3, 6));






//* Array destructuring

let arr = [1, 2, 3, 4,5,6,7];
let [n1, n2, n3, ...n4] = arr;
console.log(n1, n2, n3, n4);
console.log(typeof(n1))
console.log(typeof (n4))


let obj1 = {
    id: 1,
    ename: "Avinash"
}

let { ename } = obj1;

// let { a } = obj1;
// console.log(object) //^ this will print undefiened.
console.log(ename)


//* Rest and spread

let arr2 = [100, 200, 300];
let arr3 = [...arr2, 400, 500, 600];

let [a, b, ...arr4] = arr2;

console.log(a);
console.log(b);
console.log(arr4);

console.log(typeof(arr4))

// console.log(arr2);
// console.log(arr3);


function demo(n1, n2, n3, ...rest) {
    console.log(n1, n2, n3, n4, rest); // rest
    console.log(...rest); // rest
}

demo(10, 20, 30, 40, 50, 60);



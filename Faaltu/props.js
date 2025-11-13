const greet = (user) => {
  console.log(`Good morning ${user}`);
};

greet("Avinash");
// If we dont pass anything then here will undefiend will be passed.

const child = (props) => {
  // Here props will get that object and use inside method body
  return (
    <div>
      <h2> Good Morning</h2>
    </div>
  );
};
// import child from './child'
const parent = () => {
  return (
    <div>
      <h2> Parent component</h2>
      <Child user="Aman" /> // {(user = "Aman")} is trested as key value pair
      and then send to the another componenet.
    </div>
  );
};

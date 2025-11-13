import Child from "./Child";

const Parent = () => {
  return (
    <div>
      {/* <h1>Parent Component</h1> */}
      <Child user="Aman" age={23} cityName="Noida" />
    </div>
  );
};

export default Parent;
// only string can be send like this other than than this we can send like that

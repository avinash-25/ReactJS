import PropsChild1 from "./PropsChild1";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";
import { useState } from "react";

const PropsParent = () => {
  let [state, setState] = useState(""); // [ud,f]

  let data1 = 10;
  let data2 = "Hello World";
  let data3 = [10, 20, 30, 40];
  let data4 = { id: 1, fname: "John doe" };

  function demo(value) {
    console.log("Child sent me", value);
    setState(value);
  }

  return (
    <div>
      <h1>Learn Props {state}</h1>

      <PropsChild1 data1={data1} data2={data2} data3={data3} data4={data4} />

      <PropsChild2 data={{ data1, data2, data3, data4 }} />

      <PropsChild3 demo={demo} />
    </div>
  );
};
export default PropsParent;
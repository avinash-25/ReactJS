import { useState, useRef } from "react";

const Demo2 = () => {

    const [value, setValue] = useState("");

    const task = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

  return (
    <div id="Demo2" >
          <h2>Demo2 Component</h2>
          <input type="text" name="fullname" placeholder="Enter Fullname" value={value} onChange={task} />
    </div>
  );
}

export default Demo2;
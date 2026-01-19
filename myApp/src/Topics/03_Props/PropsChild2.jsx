const PropsChild2 = (props) => {
  console.log(props); // {data : {data1: , data2: ,data3: ,data4: }}

  let { data1, data2, data3, data4 } = props.data;

  return (
    <div>
      <h1>Props Child 2</h1>
      <h2>Number : {data1}</h2>
      <h2>String : {data2}</h2>
      <h2>Array : {data3}</h2>
      <h2>Object : {data4.fname}</h2>
    </div>
  );
};
export default PropsChild2;
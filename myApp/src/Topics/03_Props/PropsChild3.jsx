const PropsChild3 = (props) => {
  console.log(props); // {demo:f}

  props.demo("Hii Parent");

  return (
    <div>
      <h1>Props Child 3</h1>
    </div>
  );
};
export default PropsChild3;
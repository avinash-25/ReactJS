const Child = (props) => {
  //   console.log(props);

  const { user, age, cityName } = props;
  return (
    <div>
      <h2>Good Morning</h2>
      <h3>User: {user}</h3>
      <h3>Age : {age}</h3>
      <h3>City : {cityName}</h3>
    </div>
  );
};

export default Child;

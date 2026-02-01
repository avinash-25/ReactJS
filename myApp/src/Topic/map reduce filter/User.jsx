const User = () => {
    const persons = ["Tinku", "chombu", "chombi", "dinga"];

    return <div id="user-component" >
        {

            persons.map( (element, index) => {
              return <h2 key={index} > user: {index +1} -  {element} </h2>
          })
        }
    </div>
}

export default User;


/** //* Don't code like this
  <h2>User - 1 : {persons[0]}</h2>
  <h2>User - 2 : {persons[1]}</h2>
  <h2>User - 3 : {persons[2]}</h2>
 */
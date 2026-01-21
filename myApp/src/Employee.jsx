const Employee = (props) => {
    // console.log(props);
    // let { user } = props;
    let { fullname, skills, designation, salary } = props;

    let values = Object.entries(props);
    console.log(values)

    return (
        <>
            <h1>Employee Component</h1>
            {
                values.map(([k, v]) =>
                    <h4>{k} - {v}</h4>)
            }
        </>
    )
}

/**
    <h1>Employee Component</h1>
    <h4>Fullname : {fullname}</h4>
    <h4>Skills : {skills.join(", ")}</h4>
    <h4>designation : {designation}</h4>
    <h4>salary : {salary}</h4>
 */

export default Employee;

// any code written outside the return statement is treated as a js code
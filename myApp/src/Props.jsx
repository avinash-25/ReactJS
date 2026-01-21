import Employee from "./Employee";
import List from "./List";

const Props = () => {
    const user = {
        fullname: "Avinash",
        skills: ["Frontend", "Backend", "java", "Express"],
        designation: "SDE-2",
        salary: "12.5 lpa"
    }

    return (
        <>
            {/* <List a={10} username={user} message="Hello from props" /> */}
            {/* < Employee user={user} /> */}
            < Employee {...user} />
        </>
    )
}

export default Props;
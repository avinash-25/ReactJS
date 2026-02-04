import { useState, useEffect} from 'react'

const Demo = () => {
    const [response, setResponse] = useState([]);
    console.log("Demo Rendered");

    useEffect(() => {
        getUsers();
    },[]);

    //* API call
    const getUsers = async () => {
        const resp = await fetch("https://api.github.com/users/avinash-25");
        const data = await resp.json();
        setResponse(data);
    }

//^ Conditional rendering
    //* Default UI
    if(response.length === 0) return <> <h2>Default Dummy UI</h2></>
    return (
        <>
            <h2>Original Dummy UI</h2>
        </>
    )
}

export default Demo;
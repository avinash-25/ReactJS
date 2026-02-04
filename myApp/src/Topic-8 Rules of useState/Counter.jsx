const Counter = () => {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);

    if (status) {
        const [username, setUsername] = useState("");
    }

    const handleClick = () => {
        setCount(count + 1);
        setStatus(!status);
        setUsername("Avinash"); // This will cause an error because setUsername is not defined in this scope
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>count : {count}</h2>
            <h2>Status : {status}</h2>
            <h2>username : {username}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Counter;
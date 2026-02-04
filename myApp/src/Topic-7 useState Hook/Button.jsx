const Button = () => {
    return (
        <>
         <button onClick={increment}>{text}</button>
        </>
    )
}

export default Button;

/**
 ** Don't write useState or anu hooks inside if-else block or any loops.
 */
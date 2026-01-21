const List = (props) => {
    console.log(props)
    return (
        <div>
            <h2>a : {props.a}</h2>
            <h2>username : {props.username}</h2>
            <h2>message:{props.message}</h2>
        </div>
    )
}

export default List;
import DrillingNestedChild from "./DrillingNestedChild";

const DrillingChild = (props) => {
    console.log(props);
    return (
        <div>
            <DrillingNestedChild message={props.message}/>
        </div>
    )
}

export default DrillingChild;
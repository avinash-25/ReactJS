import DrillingChild from "./DrillingChild";

const DrillingParent = () => {

    let message = "Hello world";

    return (
        <div>
            <h2>Drilling Parent</h2>
            <DrillingChild data1={message} />
        </div>
    );
};

export default DrillingParent;
import { Component } from "react";

class StateInClassBased extends Component{
    constructor() {
        super();
        this.state = {text: "Hello"};
    }

    btnHandle = () => {
        this.setState({ text: "Hiiii" });
    }



    render() {
        // console.log(this);
        return (
            <div>
                <h2>Class based Component</h2>
                <h3>{this.state.text}</h3>
                <button onClick={this.btnHandle} >Update</button>
            </div>
        )
    }
}

export default StateInClassBased;
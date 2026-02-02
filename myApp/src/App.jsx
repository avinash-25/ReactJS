
import Props from "./Props";
import { ClassBasedComponent } from "../../Topics/01_TypesOfComponent/ClassBasedComponent";
import { FunctionbasedComponent } from "../../Topics/01_TypesOfComponent/FunctionBasedComponent";
import Dropdown from "../../Topics/02_States/DropDown";
import StateInClassBased from "../../Topics/02_States/StatesInClassBased";
import {StatesInFunctionBased} from "../../Topics/02_States/StatesInFunctionBased"
import PropsParent from "../../Topics/03_Props/PropsParent";
import DrillingParent from "../../Topics/04_Props Drilling/DrillingParent";
import User from "./Topic/map reduce filter/User";
import Counter from "./Topic-7 useState hook/Couter";

function App() {
    return (
        <div id="App-component" >
            {/* <FunctionbasedComponent/>
            <ClassBasedComponent /> */}
            {/* <StatesInFunctionBased/> */}
            {/* <StateInClassBased/> */}
            {/* <PropsParent/> */}
            {/* <Dropdown /> */}
            {/* <DrillingParent/> */}
            {/* < Props /> */}
            {/* <User/> */}
            <Counter/>
        </div>
    )
}

export default App;
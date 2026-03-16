import {Outlet} from "react-router-dom";

import Header from "./Topic-22 useParams/pages/Header";
import Home from "./Topic-22 useParams/pages/Home";
import GrandParant from "./Topic-23 Props Drilling/GrandParant";

const App = () => {
  return (
    <GrandParant />
    // <div id="app-component">
    //   <Header/>
    //   <main>
    //     <Outlet/>
    //   </main>
    // </div>
  );
};

export default App;

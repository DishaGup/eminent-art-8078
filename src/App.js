import "./App.css";

import Homepage from "./Pages/Homepage";
import Navigationbar from "./Components/HomePage/Navigationbar";


import AllRoutes from "./Routes/AllRoutes";
import Banner from "./Components/HomePage/Banner";
import { Product } from "./Pages/Product";


function App() {
  return (
    <div className="App">
      {/* <Product /> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
{/*  */ }


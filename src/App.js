import "./App.css";
import Navigationbar from "./Components/HomePage/Navigationbar";
import { Home } from "./Pages/Home";
import { Wishlist } from "./Pages/Wishlist";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navigationbar/> */}
   <AllRoutes/>
    </div>
  );
}

export default App;
{/*  */ }


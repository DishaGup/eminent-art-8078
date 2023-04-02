import "./App.css";
import Navigationbar from "./Components/HomePage/Navigationbar";
import { Home } from "./Pages/Home";
import { Wishlist } from "./Pages/Wishlist";
import AllRoutes from "./Routes/AllRoutes";
import ProductPage from './Pages/productpage/ProductPage';
import CartPage from "./Pages/cart/CartPage";
import Navmain from "./Components/HomePage/Navmain";

function App() {
  return (
    <div className="App">
    <Navmain/>
    {" "}
   <AllRoutes/>
    </div>
  );
}

export default App;
{/*  */ }


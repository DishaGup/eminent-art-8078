import "./App.css";
import Navigationbar from "./Components/HomePage/Navigationbar";
import CartDisplayProduct from "./Components/cart-display-product/CartDisplayProduct";
import { Home } from "./Pages/Home";
import { Wishlist } from "./Pages/Wishlist";
import AllRoutes from "./Routes/AllRoutes";
import ProductCard from "./Components/ProductsPage/ProductCard";

function App() {
  return (
    <div className="App">

      <AllRoutes />
    </div>
  );
}

export default App;


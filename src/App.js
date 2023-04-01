import "./App.css";
import Navigationbar from "./Components/HomePage/Navigationbar";
import CartDisplayProduct from "./Components/cart-display-product/CartDisplayProduct";
import { Home } from "./Pages/Home";
import { Wishlist } from "./Pages/Wishlist";
import AllRoutes from "./Routes/AllRoutes";
import ProductPage from './Pages/productpage/ProductPage';
import CartPage from "./Pages/cart/CartPage";

function App() {
  return (
    <div className="App">
      {/* <Navigationbar/>
      <AllRoutes /> */}
      {/* <CartDisplayProduct/> */}
      <ProductPage />
      <CartPage />
    </div>
  );
}

export default App;
{/*  */ }


import { useState } from "react";

import "./Category.css";
import {
  addItemQuantity,
  getCart,
  reduceItemQuantity,
} from "./useLocalStorage";

import { Link } from "react-router-dom";

function CartDisplayProduct(props) {
  const [quantity, setQuantity] = useState(1);

  const seller = "Seller: DJP Team";
  // const { id, name, image, price, rating, handleRemove, calculateTotalPrice } =
  //   props;
const id=2,price=2342,rating=34
  function handleReduce() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    reduceItemQuantity(id);
    props.setCartItems(getCart());
    // calculateTotalPrice();
  }

  function handleAdd() {
    setQuantity(quantity + 1);
    addItemQuantity(id);
    props.setCartItems(getCart());
    // calculateTotalPrice();
  }

  if (quantity === 0) {
    return null;
  }
  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbr37gm57f7.jpeg?q=70" alt={name} />
          <div className="cart-quantity-buttons">
            <button
              disabled={quantity <= 1}
              onClick={handleReduce}
              className="reduce"
            >

            </button>
            {quantity}
            <button onClick={handleAdd} className="increase">
              +
            </button>
          </div>
        </div>
        <div className="cart-product-details">
          <Link to={`/products/${id}`}>
            <h3 className="capitalize">{name}</h3>
          </Link>
          <h6>{seller}</h6>
          <h3>{price}</h3>
          <p>{rating}</p>
          <div className="cart-product-buttons">
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;

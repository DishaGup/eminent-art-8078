import React from "react";
import "./Cartpage.css";
import trendifyLogo from "../../Assests/trendifyLogo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EmptyCart } from "./EmptyCart";

const Cartpage = () => {
  const [change, setChange] = useState(true);
  return (
    <>
      <Link to="/">
        <div id="headercart">
          <img
            src="https://secure.shopclues.com/atom_view/images/prev.png"
            alt=""
          />
          <img src={trendifyLogo} alt="" />
        </div>
      </Link>
      {change ? (
        <EmptyCart />
      ) : (
        <div class="cartwrapper">
          <div>
            <h1 id="mycartid">
              My Cart ( <span id="spancartwrapper">0</span> Item )
            </h1>
          </div>
          <div id="cartitemwrapper"></div>
          <div id="lastdivcart">
            <div>
              <div id="cartone">
                <div>
                  <h3 id="totalcart">Total</h3>
                </div>
                <div>
                  <p id="totalcartvalue">₹1000</p>
                </div>
              </div>
              <div id="carttwo">
                <div>
                  <h2 id="grandtotal">Grand Total</h2>
                </div>
                <div>
                  <p id="grandcartvalue">₹1000</p>
                </div>
              </div>
              <div>
                <p id="cartinclusive">Inclusive of all the applicable taxes</p>
              </div>
              <div>
                <button id="placeorder">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cartpage;

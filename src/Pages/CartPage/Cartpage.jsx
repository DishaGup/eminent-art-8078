import React from "react";
import "./Cartpage.css";
import trendifyLogo from "../../Assests/trendifyLogo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EmptyCart } from "./EmptyCart";

const Cartpage = () => {
  const [change, setChange] = useState(false);
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
        <div style={{ marginTop: "100px" }}>
          <div class="cartwrapper">
            <div>
              <h1 id="mycartid">
                My Cart ( <span id="spancartwrapper">0</span> Item )
              </h1>
            </div>
            {/* //map */}

            <div id="cartitemwrapper">
              <div id="main-div">
                <div id="cartimgname">
                  {/* 11div */}
                  <div>
                    <img
                      id="c11"
                      src="https://images.shopclues.com/images1/thumbnails/116980/320/320/153323501-116980797-1678944373.jpg"
                      alt=""
                    />
                  </div>
                  {/* 12div */}
                  <div>
                    <h3 id="c12div">Hana & Morris Men Red Casual Shirt</h3>
                  </div>
                </div>

                <div id="plusminus">
                  <div>
                    <button id="plus">+</button>
                    <span id="spanp">2</span>
                    <button id="minus">-</button>
                  </div>

                  <div>
                    <button id="removeitem">Remove</button>
                  </div>
                </div>

                <div>
                  <span className="spanmid1">Price</span>
                  <span className="spanmid"> $7788</span>

                  <div>
                    <span className="spanmid1">Shipping Fee</span>
                    <span className="spanmid"> FREE</span>
                  </div>
                </div>

                <div id="inclusivetax">
                  <div>
                    <h3 id="h3ss">₹ 555</h3>
                  </div>
                  <div>
                    <p id="pspan">Inclusive of all the applicable taxes</p>
                  </div>
                </div>
              </div>
            </div>
            {/* //map */}
          </div>
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

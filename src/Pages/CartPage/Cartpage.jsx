import React, { useEffect } from "react";
import "./Cartpage.css";
import trendifyLogo from "../../Assests/trendifyLogo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EmptyCart } from "./EmptyCart";
import axios from "axios";

import { useToast } from "@chakra-ui/react";

const Cartpage = () => {
  const token = localStorage.getItem("token");

  const [refresh, setRefresh] = useState(false);
  const [cartData, setCartData] = useState([]);

  const toast = useToast();

  useEffect(() => {
    getCartData();
  }, [refresh]);

  const getCartData = async () => {
    try {
      axios
        .get("https://erin-dizzy-clam.cyclic.app/trendify/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCartData(res.data.cart);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://erin-dizzy-clam.cyclic.app/trendify/cart/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast({
          title: "Product removed from cart!!",
          status: "success",
          isClosable: true,
          duration: 4000,
          position: "top",
        });
        getCartData();
      })
      .catch((err) => console.log(err));
  };

  const handleIncrease = (id) => {
    cartData.map((el) => {
      if (el._id === id) {
        axios
          .patch(
            `https://erin-dizzy-clam.cyclic.app/trendify/cart/update/${id}`,
            { quantity: el.quantity + 1 },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            // console.log(res);
            setRefresh(!refresh);
          });
      }
    });
  };

  const handleDecrease = (id) => {
    cartData.map((el) => {
      if (el._id === id) {
        axios
          .patch(
            `https://erin-dizzy-clam.cyclic.app/trendify/cart/update/${id}`,
            { quantity: el.quantity - 1 },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            setRefresh(!refresh);
          });
      }
    });
  };

  const totalPrice = cartData.reduce((acc, curr) => {
    const data = cartData.find((el) => el._id === curr._id);
    return acc + data.price * data.quantity;
  }, 0);
  console.log(cartData);
  return (
    <>
      <Link to="/products">
        <div id="headercart">
          <img
            src="https://secure.shopclues.com/atom_view/images/prev.png"
            alt=""
          />
          <img src={trendifyLogo} alt="" />
        </div>
      </Link>
      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <div style={{ marginTop: "100px" }}>
          <div class="cartwrapper">
            <div>
              <h1 id="mycartid">
                My Cart ( <span id="spancartwrapper">{cartData.length}</span>{" "}
                Item )
              </h1>
            </div>
            {/* //map */}
            {cartData.map((el) => {
              return (
                <div id="cartitemwrapper" key={el._id}>
                  <div id="main-div">
                    <div id="cartimgname">
                      {/* 11div */}
                      <div>
                        <img id="c11" src={el.image} alt={el.title} />
                      </div>
                      {/* 12div */}
                      <div>
                        <h3 id="c12div">{el.title}</h3>
                        <p>category: {el.category} </p>
                      </div>
                    </div>

                    <div id="plusminus">
                      <div>
                        <button
                          id="minus"
                          onClick={() => handleDecrease(el._id)}
                          disabled={el.quantity === 1}
                        >
                          -
                        </button>
                        <span id="spanp">{el.quantity}</span>
                        <button
                          id="plus"
                          onClick={() => handleIncrease(el._id)}
                        >
                          +
                        </button>
                      </div>

                      <div>
                        <button
                          id="removeitem"
                          onClick={() => handleDelete(el._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div id="res-spanmid1">
                      <span className="spanmid1">Price:</span>
                      <span className="spanmid">
                        ₹ {el.price * el.quantity}{" "}
                      </span>

                      <div>
                        <span className="spanmid1">Shipping Fee : </span>
                        <span className="spanmid" id="Free">
                          {" "}
                          FREE
                        </span>
                      </div>
                    </div>

                    <div id="inclusivetax">
                      <div>
                        <h3 id="h3ss">₹ {el.price * el.quantity} </h3>
                      </div>
                      <div>
                        <p id="pspan">Inclusive of all the applicable taxes</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* //map */}
          </div>
          <div id="lastdivcart">
            <div>
              <div id="cartone">
                <div>
                  <h3 id="totalcart">Total</h3>
                </div>
                <div>
                  <p id="totalcartvalue">₹{totalPrice}</p>
                </div>
              </div>
              <div id="carttwo">
                <div>
                  <h2 id="grandtotal">Grand Total</h2>
                </div>
                <div>
                  <p id="grandcartvalue">₹{totalPrice}</p>
                </div>
              </div>
              <div>
                <p id="cartinclusive">Inclusive of all the applicable taxes</p>
              </div>
              <div>
                <Link to="/payment">
                  <button id="placeorder">Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cartpage;

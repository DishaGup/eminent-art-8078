import axios from "axios";

import {
  ADDTOWISHLIST_REQ,
  ADDTOWISHLIS_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQ,
  GET_WISHLIST_SUCCESS,

} from "./actiontype";

let url = "https://erin-dizzy-clam.cyclic.app/trendify/wishlist";
export const GetWishlist = () => async (dispatch) => {
  dispatch({ type: GET_WISHLIST_REQ });
  try {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch({ type: GET_WISHLIST_SUCCESS, payload: res.data });
      });
  } catch (error) {
    dispatch({ type: GET_WISHLIST_FAIL });
  }
};

export const AddtoWishlist = (data) => (dispatch) => {
  dispatch({ type: ADDTOWISHLIST_REQ });
  let product = {
    image: data.image,
    title: data.title,
    price: data.price,
    category: data.category,
    quantity: 1,
  };

  axios
    .post(`${url}/add`, product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: ADDTOWISHLIS_SUCCESS });
    });
};


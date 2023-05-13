import axios from "axios";

import {
  ADDTOWISHLIST_REQ,
  ADDTOWISHLIS_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQ,
  GET_WISHLIST_SUCCESS,
  REMOVEFROMWISHLIST_REQ,
  REMOVEFROMWISHLIST_SUCCESS,
  UPDATE_WISHLIST_REQ,
  UPDATE_WISHLIST_SUCCESS,
} from "./actiontype";

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
        console.log(res);
        dispatch({ type: GET_WISHLIST_SUCCESS, payload: res.data });
      });
  } catch (error) {
    dispatch({ type: GET_WISHLIST_FAIL });
  }
};

export const AddtoWishlist = (obj) => {
  dispatch({ type: ADDTOWISHLIST_REQ });
  let data = { ...obj };
  data["quantity"] = 1;
  console.log(data);
  axios
    .post(`${url}/add`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: ADDTOWISHLIS_SUCCESS });
    });
};
export const UpdateWishlist = (obj, payload, id) => {
  dispatch({ type: UPDATE_WISHLIST_REQ });
  let data = { ...obj };
  if (data.quantity + payload >= 1) {
    data.quantity = data.quantity + payload;
    axios.patch(`${url}/update/${id}`, data).then((res) => {
      dispatch({ type: UPDATE_WISHLIST_SUCCESS });
    });
  }
};
export const DeleteWishlist = (id) => {
  dispatch({ type: REMOVEFROMWISHLIST_REQ });
  axios.delete(`${url}/delete/${id}`).then((res) => {
    dispatch({ type: REMOVEFROMWISHLIST_SUCCESS });
  });
};

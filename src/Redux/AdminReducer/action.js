import axios from "axios";
import {
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT,
  ADMIN_EDIT_PRODUCT_SUCCESS,
  ADMIN_GET_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FALIURE,
  ADMIN_PRODUCT_REQUEST,
} from "./actionType";
// import { localhosturl } from "../ProductReducer/action";

export const getAdminProducts = (paramObj) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  axios
    .get(`${process.env.REACT_APP_BE_URL}/products/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: ADMIN_GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: ADMIN_PRODUCT_FALIURE }));
};

export const adminaddProduct = (addData) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  axios
    .post(`${process.env.REACT_APP_BE_URL}/products/add`, addData)
    .then((res) => {
      dispatch({ type: ADMIN_ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: ADMIN_PRODUCT_FALIURE });
    });
};

export const adminEditProduct = (editObj, id) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  return axios
    .patch(`${process.env.REACT_APP_BE_URL}/products/update/${id}`, editObj)
    .then(() => {
      dispatch({ type: ADMIN_EDIT_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
    });
};

export const adminDeleteProduct = (id) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  return axios
    .delete(`${process.env.REACT_APP_BE_URL}/products/delete/${id}`)
    .then(() => {
      dispatch({ type: ADMIN_DELETE_PRODUCT });
    })
    .catch(() => {
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
    });
};

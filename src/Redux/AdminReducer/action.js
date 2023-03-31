import axios from "axios";
import {
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT,
  ADMIN_EDIT_PRODUCT_SUCCESS,
  ADMIN_GET_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FALIURE,
  ADMIN_PRODUCT_REQUEST,
} from "./actionType";

export const getAdminProducts = (paramObj) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  axios
    .get("http://localhost:4444/products", paramObj)
    .then((res) => {
      dispatch({ type: ADMIN_GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => dispatch({ type: ADMIN_PRODUCT_FALIURE }));
};

export const adminaddProduct = (addData) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  axios
    .post("http://localhost:4444/products", addData)
    .then(() => {
      dispatch({ type: ADMIN_ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: ADMIN_PRODUCT_FALIURE });
    });
};

export const adminEditProduct = (editObj, id) => (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_REQUEST });

  return axios
    .patch(`http://localhost:4444/products/${id}`, editObj)
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
    .delete(`http://localhost:4444/products/${id}`)
    .then(() => {
      dispatch({ type: ADMIN_DELETE_PRODUCT });
    })
    .catch(() => {
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
    });
};

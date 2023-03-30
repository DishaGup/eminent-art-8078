import axios from "axios";
import {
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

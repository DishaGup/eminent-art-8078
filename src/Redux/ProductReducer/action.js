import axios from "axios";
import {
  ADD_PRODUCTS_SUCCESS,
  ADD_WISHLIST_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_CART_DATA,
} from "./actiontype";

export const getAllProducts = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  try {
    axios
      .get(`http://localhost:8080/trendify/products`,{params:data})
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: res,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

export const getProducts = (category, data) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  try {
    axios
      .get(`http://localhost:8080/trendify/products/${category}`, {
        params: data,
      })
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: res,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

export const getProductsSubcategory =
  (category, data, subcategory) => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });

    try {
      axios
        .get(
          `http://localhost:8080/trendify/products/${category}/${subcategory}`,
          { params: data }
        )
        .then((res) => {
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res,
          });
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
  };
//get bu sub sub category--
export const getProductsSubSubcategory =
  (category, data, subcategory, subcat2) => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });

    try {
      axios
        .get(
          `http://localhost:8080/trendify/products/${category}/${subcategory}/${subcat2}`,
          { params: data }
        )
        .then((res) => {
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res,
          });
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
  };

export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  axios
    .get(
      `http://localhost:8080/trendify/products/:category/:subcategory/single/${id}`
    )
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res,
      });
    })
    .catch((error) =>
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
    );
};

// export const getSingleProductsSubcategory = (id) => (dispatch) => {
//   dispatch({ type: GET_PRODUCTS_LOADING });

//   return axios
//     .get(`/:category/:subcategory?/single/${id}`)
//     .then((res) =>
//       dispatch({
//         type: GET_PRODUCTS_SUCCESS,
//         payload: res,
//       })
//     )
//     .catch((error) =>
//       dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
//     );
// };

// export const getCartData = (token) => (dispatch) => {
//   dispatch({ type: GET_PRODUCTS_LOADING });
//   axios
//     .get("http://localhost:8080/trendify/cart", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: GET_CART_DATA,
//         payload: res,
//       });
//       console.log(res);
//     })
//     .catch((error) =>
//       dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
//     );
// };

export const Addtowishlist = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  axios
    .post(`http://localhost:4444/wishlist`, data)
    .then((res) =>
      dispatch({
        type: ADD_WISHLIST_SUCCESS,
        payload: res,
      })
    )
    .catch((error) =>
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message })
    );
};

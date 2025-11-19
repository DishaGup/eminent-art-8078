import axios from "axios";
import {
  // ADD_PRODUCTS_SUCCESS,
  ADD_WISHLIST_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  // GET_CART_DATA,
} from "./actiontype";
//export const localhosturl = "http://localhost:8080";
export const localhosturl = process.env.REACT_APP_BE_URL;
//get all products

export const getProductsSubSubcategory =
  (category, data, subcategory, subcat2) => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    //console.log(category,subcategory,subcat2)
    let urlProducts = `${localhosturl}/products/all`;
    if (
      subcat2 != undefined &&
      category != undefined &&
      subcategory != undefined
    )
      urlProducts = `${localhosturl}/products/all/${category}/${subcategory}/${subcat2}`;
    else if (category != undefined && subcategory != undefined)
      urlProducts = `${localhosturl}/products/all/${category}/${subcategory}`;
    else if (category != undefined)
      urlProducts = `${localhosturl}/products/all/${category}`;

    if (category == "global shopping" || category == "offers")
      urlProducts = `${localhosturl}/products/all`;

    try {
      axios.get(`${urlProducts}`, { params: data }).then((res) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: res,
        });
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
    }
  };

export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  axios
    .get(`${localhosturl}/products/single/${id}`)
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

export const Addtowishlist = (data) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  axios
    .post(`${localhosturl}/wishlist`, data)
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

export const searchProducts = (title) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  try {
    return axios.get(
      `${localhosturl}/products/search?title=${title.toString()}`
    );
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

import axios from "axios";
import {
  // ADD_PRODUCTS_SUCCESS,
  ADD_WISHLIST_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  // GET_CART_DATA,
} from "./actiontype";
export const localhosturl='http://localhost:8080'
export const backenedURL='https://erin-dizzy-clam.cyclic.app'

// export const getAllProducts = (data) => (dispatch) => {
//   dispatch({ type: GET_PRODUCTS_LOADING });

//   try {
//     axios
//       .get(`${localhosturl}/trendify/products`, {
//         params: data,
//       })
//       .then((res) => {
//         dispatch({
//           type: GET_PRODUCTS_SUCCESS,
//           payload: res,
//         });
//       });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
//   }
// };

// export const getProducts = (category, data) => (dispatch) => {
//   dispatch({ type: GET_PRODUCTS_LOADING });

//   try {
//     axios
//       .get(`${localhosturl}/trendify/products/${category}`, {
//         params: data,
//       })
//       .then((res) => {
//         dispatch({
//           type: GET_PRODUCTS_SUCCESS,
//           payload: res,
//         });
//       });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
//   }
// };

// export const getProductsSubcategory =
//   (category, data, subcategory) => (dispatch) => {
//     dispatch({ type: GET_PRODUCTS_LOADING });

//     try {
//       axios
//         .get(
//           `${localhosturl}/trendify/products/${category}/${subcategory}`,
//           { params: data }
//         )
//         .then((res) => {
//           dispatch({
//             type: GET_PRODUCTS_SUCCESS,
//             payload: res,
//           });
//         });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
//     }
//   };
//get bu sub sub category--
export const getProductsSubSubcategory =(category, data, subcategory, subcat2) => (dispatch) => {
    
  dispatch({ type: GET_PRODUCTS_LOADING });
 
  let urlProducts=`${localhosturl}/trendify/products/all`
    if(category) urlProducts=`${localhosturl}/trendify/products/all/${category}`
    else if(category && subcategory) urlProducts=`${localhosturl}/trendify/products/all/${category}/${subcategory}`
    else if(subcat2 && category && subcategory) urlProducts=`${localhosturl}/trendify/products/all/${category}/${subcategory}/${subcat2}`


    try {
      axios
        .get(
          `${urlProducts}`,
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
      `${localhosturl}/trendify/products/single/${id}`
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
//     .get("https://erin-dizzy-clam.cyclic.app/trendify/cart", {
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


export const searchProducts = (title) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });

  try {
    axios
      .get(`${localhosturl}/trendify/products/search?title=${title}`)
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

import {
  ADDTOWISHLIST_REQ,
  ADDTOWISHLIS_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQ,
  GET_WISHLIST_SUCCESS,
  REMOVEFROMWISHLIST_FAIL,
  REMOVEFROMWISHLIST_REQ,
  REMOVEFROMWISHLIST_SUCCESS,
  UPDATE_WISHLIST_FAIL,
  UPDATE_WISHLIST_REQ,
  UPDATE_WISHLIST_SUCCESS,
} from "./actiontype";

const initState = {
  isLoading: false,
  isError: false,
  WishList: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADDTOWISHLIST_REQ: {
      return { ...state, isLoading: true };
    }
    case ADDTOWISHLIS_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADDTOWISHLIS_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case REMOVEFROMWISHLIST_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }
    //------------GET-----------------------
    case GET_WISHLIST_REQ: {
      return { ...state, isLoading: true };
    }
    case GET_WISHLIST_SUCCESS: {
      return { ...state, isLoading: false, WishList: payload };
    }
    case GET_WISHLIST_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }

    //  -------Delete----

    case REMOVEFROMWISHLIST_REQ: {
      return { ...state, isLoading: true };
    }
    case REMOVEFROMWISHLIST_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case REMOVEFROMWISHLIST_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }

    //----------update

    case UPDATE_WISHLIST_REQ: {
      return { ...state, isLoading: true };
    }
    case UPDATE_WISHLIST_SUCCESS: {
      return { ...state, isLoading: false };
    }

    case UPDATE_WISHLIST_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};

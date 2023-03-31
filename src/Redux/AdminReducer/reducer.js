import {
  ADMIN_ADD_PRODUCT_SUCCESS,
  ADMIN_EDIT_PRODUCT_SUCCESS,
  ADMIN_GET_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FALIURE,
  ADMIN_PRODUCT_REQUEST,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  adminProducts: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case ADMIN_ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };

    case ADMIN_EDIT_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };

    case ADMIN_GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, adminProducts: payload };

    case ADMIN_PRODUCT_FALIURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

import {
  ADD_USER,
  ADD_CARD_REQ,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAIL,
  ADD_USER_SUCCESS,
  GET_CARD_REQ,
  GET_CARD_SUCCESS,
  GET_CARD_FAIL,
  ADD_USER_FAIL,
  GET_USER_REQ,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  ADD_CARD,
} from "./actiontype";

const initState = {
  address: {},
  card: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    //----------card details
 
case ADD_CARD:{
    return {...state,card:payload}
}
    case ADD_CARD_REQ: {
      return { ...state, isLoading: true };
    }
    case ADD_CARD_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADD_CARD_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }

    case GET_CARD_REQ: {
      return { ...state, isLoading: true };
    }
    case GET_CARD_SUCCESS: {
      return { ...state, isLoading: false, card: payload };
    }
    case GET_CARD_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }

    //-----------Userdetails

    case ADD_USER: {
      return { ...state, address:payload };
    }
    case ADD_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case ADD_USER_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }

    case GET_USER_REQ: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      return { ...state, isLoading: false, user: payload };
    }
    case GET_USER_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};

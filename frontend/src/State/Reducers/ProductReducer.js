import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/ProductConstant";

const initialState = {
  loading: false,
  products: [],
  productCount: 0,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productsCount,
        error: null,
      };

    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
 
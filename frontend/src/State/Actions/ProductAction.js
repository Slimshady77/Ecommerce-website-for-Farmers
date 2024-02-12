import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/ProductConstant";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const response = await axios.get(`/getProData`); // API endpoint
    const { view: apiProducts } = response.data; // Destructure data from the response

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: { products: apiProducts }, // Update the payload to use the correct property name
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : "An error occurred.";
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: { error: errorMessage },
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

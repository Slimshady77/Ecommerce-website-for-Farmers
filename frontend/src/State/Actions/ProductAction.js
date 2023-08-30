import axios from "axios";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/ProductConstant";

export const getProduct = (products) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1"); // Assuming this is your API endpoint
    // console.log(response)
    const { products, productsCount } = response.data; // Destructure data from the response

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: { products, productsCount }, // Use object destructuring
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: { error: error.response.data.message }, // Provide error message explicitly
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

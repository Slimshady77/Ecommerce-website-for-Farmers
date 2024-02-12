// cartAction.js
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../Constants/cartConstant";

// Add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const response = await fetch(`/singleProduct/${id}`);
    const data = await response.json();

    if (data.success) {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data.prduct._id, // Correct property name
          name: data.prduct.name, // Correct property name
          photo: data.prduct.photo[0].url, // Correct property name
          price: data.prduct.price, // Correct property name
          quantity,
        },
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } else {
      console.error("Error adding item to cart:", data.message);
    }
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
  }
};

// Remove from cart
export const removeItemFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

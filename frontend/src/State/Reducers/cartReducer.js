// cartReducer.js
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../Constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product === newItem.product
      );

      if (existingItem) {
        // If the item already exists, update it
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existingItem.product ? newItem : item
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
};

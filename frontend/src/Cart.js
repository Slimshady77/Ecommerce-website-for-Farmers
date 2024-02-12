import React from "react";
import "./Cart.css";
import Balance from "./Balance";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "./State/Actions/cartAction";

export const Cart = ({ setShowCart }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const deleteCartItem = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        "Cart is Empty"
      ) : (
        <div className="cart-panel">
          <div className="opacity-layer">
            <div className="card-content">
              <div className="card-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                  X
                </span>
              </div>

              {cartItems &&
                cartItems.map((item) => (
                  <div className="cart-products" key={item.product}>
                    <div className="cart-product">
                      <div className="img-container">
                        <img src={`/UPLOAD/${item.photo}`} alt="product-img" />
                      </div>
                      <div onClick={() => deleteCartItem(item.product)}>
                        Remove
                      </div>
                      <div className="prod-details">
                        <div className="quantity-buttons">
                          <Balance />
                        </div>
                      </div>
                    </div>
                    <span className="name">{item.name}</span>
                    <div className="text">
                      <span>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          style={{ width: 50, height: 50 }}
                        />
                      </span>
                      <span>X</span>
                      <span>&#8377;{item.price}</span>
                    </div>
                  </div>
                ))}

              <div className="card-footer">
                <div className="subtotal">
                  <span className="text">Subtotal</span>
                  <span className="total">
                    &#8377;
                    {cartItems.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}
                  </span>
                </div>
                <div className="button1">
                  <button className="checkout-cta">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

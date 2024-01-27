import React from "react";
import "./Cart.css";
import Balance from "./Balance";

export const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opecity-layer">
        <div className="card-content">
          <div className="card-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              X
            </span>
          </div>

          <>
            <div className="cart-products">
              <div className="cart-product">
                <div className="img-container">
                  <img alt="product-img" />
                </div>
                <div className="prod-details">
                  {/* <img alt="close" classame="close" /> */}
                  <div className="quantiy-buttons ">
                    <Balance />
                  </div>
                </div>
              </div>
              <span className="name">product name</span>

              <div className="text">
                <span>1</span>
                <span>X</span>
                <span>&#8377;1234</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="total">&#8377;1234</span>
              </div>
              <div className="button1">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

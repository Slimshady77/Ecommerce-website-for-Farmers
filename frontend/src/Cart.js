import React, { useState } from "react";
import "./style.css";
import Balance from "./Balance";
// import Product from "./Product";
function Cart() {

    // const [item, setItem]=useState(products)
  return (
    <>
      <div className="continue_shopping">
        {/* <a href="/">
          <img src="./images/arrow.png" alt="arrow"></img>Continue Shopping
        </a> */}
      
        <p className="total_items">You have 7 items in the cart</p>

      </div>

      <section>
        {/* <div className="cart_items">
          <div className="cart-item-container"> */}
            <div className="product-img">
              <img src="UPLOAD/cofe_02.jpg"></img>
            </div>
            <div className="title">
              <h2>Coffee</h2>
            </div>
            <div className="quantity">
              <Balance />
            </div>
            <div className="price">
                1000
            </div>
      <div className="buy">
        <button className="btn btn-primary">Buy Now</button>
      </div>
      </section>

    </>
  );
}

export default Cart;

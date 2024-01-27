import React from "react";
import "./Wishlist.css";
export const Wishlist = () => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src="" alt="wishlist"></img>
        <div className="card-block">
          <h4 className="card-title">Wishlist</h4>
          <h4 className="card-price">1000</h4>
          <a href="#" className="btn btn-primary">
            Add to Wishlist
          </a>
        </div>
      </div>
    </>
  );
};

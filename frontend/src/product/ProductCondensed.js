import React from "react";
import "./ProductCondensed.css";
export const ProductCondensed = () => {
  return (
    <>
      <li className="list group-item"></li>
      <a className="btn btn-outline-danger">
        {this.props.product.title}|${this.props.product.price}
      </a>
    </>
  );
};

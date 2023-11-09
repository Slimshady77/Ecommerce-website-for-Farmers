import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./style.css";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = ({ products }) => {
  if (!products || products.length === 0) {
    // Handle the case where products is undefined or empty
    return <div>No products available</div>;
  }

  return (
    <div className="proData">
      {products.map((product) => (
        <Link className="productCard" to={product._id} key={product._id}>
          <img src={`/UPLOAD/${product.photo}`} alt={product.name} />
          <p>{product.name}</p>
          <div>
            <ReactStars {...options} />
            <span>(256 reviews)</span>
          </div>
          <span>{product.price}</span>
        </Link>
      ))}
    </div>
  );
};

export default Product;

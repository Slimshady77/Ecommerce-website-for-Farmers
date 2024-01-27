import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./style.css";
import { useNavigate } from "react-router-dom";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "white",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = ({ products }) => {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="proData">
      {products.map((product) => (
        <Link
          className="productCard"
          to={`/productDetail/${product._id}`}
          key={product._id}
          onClick={() => navigate(`/singleProduct/` + product._id)}
        >
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

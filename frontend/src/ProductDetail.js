import React, { useEffect, useState } from "react";
import "./style.css";
import Balance from "./Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addItemsToCart } from "./State/Actions/cartAction";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch(); // Initialize useDispatch

  const addToCartHandler = () => {
    dispatch(addItemsToCart(productId, 1)); // Use dispatch and pass correct arguments
    alert("Item Added to cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/singleProduct/${productId}`);
        const data = await response.json();

        if (data.success) {
          console.log(data.prduct);
          setProduct(data.prduct);
        } else {
          console.error("Error fetching product details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  return (
    <>
      <div className="continue_shopping"></div>

      <section>
        <div className="product-img">
          <img
            src={`/UPLOAD/${product.photo}`}
            alt={product.name}
            style={{ height: 200, width: 220 }}
          />
        </div>
        <div className="title">
          <h2>{product.name}</h2>
        </div>
        <div className="quantity">
          <Balance />
        </div>
        <div className="price">&#8377;{product.price}</div>
        <div className="buy">
          <button className="btn btn-primary" onClick={addToCartHandler}>
            Buy Now
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;

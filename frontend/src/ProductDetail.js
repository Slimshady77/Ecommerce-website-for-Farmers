import React, { useEffect, useState } from "react";
import "./style.css";
import Balance from "./Balance";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/singleProduct/${productId}`);
        const data = await response.json();

        if (data.success) {
          console.log(data.prduct); // Log the retrieved product
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
      <div className="continue_shopping">
        {/* <p className="total_items">You have 7 items in the cart</p> */}
      </div>

      <section>
        <div className="product-img">
          <img src={`UPLOAD/${product.photo}`} alt={product.name} />
        </div>
        <div className="title">
          <h2>{product.name}</h2>
        </div>
        <div className="quantity">
          <Balance />
        </div>
        <div className="price">{product.price}</div>
        <div className="buy">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;

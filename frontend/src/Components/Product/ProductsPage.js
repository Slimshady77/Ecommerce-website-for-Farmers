import React, { useEffect } from "react";
// import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../State/Actions/ProductAction";
import Product from "../../Product";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(products);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Product products={products} />
    </>
  );
};

export default ProductsPage;

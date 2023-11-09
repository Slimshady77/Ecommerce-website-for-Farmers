import React, { useState, useEffect } from "react";
import axios from "axios";
import Lefty from "./Lefty";
import "./style1.css";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { getProduct } from "./State/Actions/ProductAction";

function ViewGallery() {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Access products correctly

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(products); // Check the products array in the console

  if (!products) {
    return <div>Loading...</div>;
  }
  // const getuserData = async () => {
  //   try {
  //     const res = await axios.get("/getProData", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (res.data.status === 401 || !res.data) {
  //       console.log("error");
  //     } else {
  //       setData(res.data.getUser);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getuserData();
  // }, []);

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-lg-2 border border-danger">
            <Lefty />
          </div>

          <Product products={products.products} />
        </div>
      </div>
    </>
  );
}

export default ViewGallery;

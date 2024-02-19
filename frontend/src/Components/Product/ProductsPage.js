import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../State/Actions/ProductAction";
import Product from "../../Product";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./Search.css";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { products, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage to 1

  const [price, setPrice] = useState([0, 25000]);
  const priceHandler = (e) => {
    const newPrice = e.target.value.split(",").map(parseFloat);
    setPrice(newPrice);
  };
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price));
  }, [dispatch, keyword, currentPage, price]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Product
        products={products}
        itemCountPerPage={resultPerPage}
        totalItemCount={productCount}
      />

      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productCount}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="First"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="PageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>

      <div className="filterBox">
        <label htmlFor="customRange1" className="form-label">
          Price range
        </label>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          style={{ width: "30%" }}
          value={price.join(",")}
          onChange={priceHandler}
          aria-labelledby="range-slider"
          min={0}
          max={25000}
        />
      </div>
    </>
  );
};

export default ProductsPage;

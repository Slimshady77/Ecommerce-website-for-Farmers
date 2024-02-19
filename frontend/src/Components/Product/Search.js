import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <form onSubmit={searchSubmitHandler}>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search a product..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input className="btn-search" type="submit" value="Search" />
      </div>
    </form>
  );
};

export default Search;

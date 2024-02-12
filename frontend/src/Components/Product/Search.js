import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/getProData/${keyword}`); // Use navigate instead of history.push
    } else {
      navigate("/getProData"); // Navigate to a default URL if keyword is empty
    }
  };

  return (
    <>
      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a product..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;

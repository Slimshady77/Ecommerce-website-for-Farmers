import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Cart } from "./Cart";

function Header() {
  const amount = useSelector((state) => state.amount);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img
            src="./images/logo.png"
            className="bd-placeholder-img rounded circle"
            width="80"
            height="60"
            alt="logo"
            preserveAspectRatio="xMidYMid slice"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/About"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Signin"
              >
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/contactus"
              >
                ContactUs
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/Profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <li>
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ margin: 5 }}
              >
                Search
              </button>
            </li>
          </form>
          <div className="d-flex align-items-center">
            <img
              src="images/cart.png"
              alt="cart"
              style={{ height: 40, width: 40, cursor: "pointer" }}
              onClick={() => setShowCart(true)}
            />
            <span style={{ marginLeft: 5 }}>{amount}</span>
          </div>

          {showCart && <Cart setShowCart={setShowCart} />}
        </div>
      </div>
    </nav>
  );
}

export default Header;

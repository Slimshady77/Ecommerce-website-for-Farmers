import { BrowserRouter, NavLink } from "react-router-dom";
import Metadata from "./Metadata";
import { Fragment, useEffect } from "react";
import Product from "./Product";
import "./style.css";
import { getProduct } from "./State/Actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
// const product = {
//   name: "blue Tshirt",
//   image: [{ url: "./images/meds.jpg" }],
//   price: "Rs. 3000",
//   prod:"TSHIRT",
// desc: "Robin",

// };
function Home() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Metadata title="Ecommerce" />
      {/* Carousal Starts */}

      <div className="container-fluid">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="./images/img1.jpg"
                width="100%"
                height="40%"
                alt="hospital"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Online Marketplace</h1>
                  <p>Indian Farmer's Own Website</p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      data-bs-target="#myCarouse"
                    >
                      Sign up today
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="./images/2.jpg"
                width="100%"
                height="60%"
                alt="hospital"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Online Marketplace</h1>
                  <p>Indian Farmer's Own Website</p>
                  <p>
                    <NavLink className="btn btn-lg btn-primary" to="/">
                      Learn more
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/3.jpg"
                width="100%"
                height="60%"
                alt="hospital"
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Online Marketplace</h1>
                  <p>Indian Farmer's Own Website</p>
                  <p>
                    <NavLink className="btn btn-lg btn-primary" to="/">
                      Browse gallery
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Carousal Ends */}

      {/* Album Starts */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 mx-auto text-center">
            <img
              src="./images/doc.jpg"
              className="bd-placeholder-img rounded circle"
              width="140"
              height="140"
              alt="doc"
              preserveAspectRatio="xMidYMid slice"
            />
            {/* <img className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
            <h2 className="fw-normal">Fresh fruits from Garden</h2>
            <p>Fruit Shop Near Me: Buy Fresh Fruits Online</p>
            <p>
              <NavLink className="btn btn-secondary" to="/">
                View details »
              </NavLink>
            </p>
          </div>
          <div className="col-lg-4 mx-auto text-center">
            <img
              src="./images/meds.jpg"
              className="bd-placeholder-img rounded circle"
              width="140"
              height="140"
              alt="doc"
              preserveAspectRatio="xMidYMid slice"
            />
            <h2 className="fw-normal ">Fresh vegetable from feilds</h2>
            <p>Buy Fresh Green Vegetables Online in India at Great Price</p>
            <p>
              <NavLink className="btn btn-secondary" to="/">
                View details »
              </NavLink>
            </p>
          </div>
          <div className="col-lg-4 mx-auto text-center">
            <img
              src="./images/lab.jpg"
              className="bd-placeholder-img rounded circle"
              width="140"
              height="140"
              alt="doc"
              preserveAspectRatio="xMidYMid slice"
            />
            <h2 className="fw-normal">Most Advanced $ Organinc fertilizers </h2>
            <p>11 of the Best Fertilizers for Growing Vegetables</p>
            <p>
              <NavLink className="btn btn-secondary" to="/">
                View details »
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Album Ends */}

      <div className="container">
       
  {Array.isArray(products) ? (
    products.map((product) => (
      <Product key={product._id} product={product} />
    ))
  ) : (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )}
</div>

    </Fragment>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />;

export default Home;

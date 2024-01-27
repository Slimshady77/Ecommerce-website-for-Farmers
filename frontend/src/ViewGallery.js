import React, { useState, useEffect } from "react";
import axios from "axios";
import Lefty from "./Lefty";
import "./style1.css";

function ViewGallery() {
  const [data, setData] = useState([]);

  const getuserData = async () => {
    try {
      const res = await axios.get("/getfiledata", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data.getUser);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getuserData();
  }, []);

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-md-5 border">
          <Lefty />
        </div>
        <div className="col-md-7">
          <div className="row">
            {(data || []).length > 0 ? (
              data.map((el, i) => (
                <div key={i} className="col-lg-4 mb-4">
                  <div className="card">
                    <img src={`UPLOAD/${el.photo}`} alt={el.name} />
                    <div className="card-body">
                      <p>name: {el.name}</p>
                      <p>price: {el.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>NO records found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewGallery;

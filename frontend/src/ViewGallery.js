import React, { useState, usEffect, useEffect } from "react";
import axios from "axios";
import Lefty from "./Lefty";
//    This is View Gallery
function ViewGallery() {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const getuserData = async () => {
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
  };
  useEffect(() => {
    getuserData();
  }, []);
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-lg-2 border border-danger">{<Lefty />}</div>
          <div className="card">
            <div className="card-body">
              <div className="col-lg-5 mx-auto text-center border border-dark mx-auto text-center">
                {(data || []).length > 0
                  ? data.map((el, i) => {
                      return (
                        <>
                          {/* <img  src={`../backend/UPLOAD/ ${el.photo} ` }/> */}
                          <img  src={`UPLOAD/${el.photo}` }  />
                          <p>name:{el.name}</p>
                          <p>price:{el.price}</p>
                        </>
                      );
                    })
                  : "NO records found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewGallery;

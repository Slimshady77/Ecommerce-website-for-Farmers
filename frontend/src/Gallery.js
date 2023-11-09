import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function Gallery() {
  const [data, setData] = useState([]);

  const getuserData = async () => {
    try {
      const res = await axios.get("/getGallerydata", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(res.data.getUser);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getuserData();
  }, []);

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="row d-flex justify-content-between align-items-center mt-5">
            {(data || []).length > 0 ? (
              data.map((el, i) => (
                <Card
                  key={i}
                  style={{ width: "22rem", height: "18rem" }}
                  className="mb-3"
                >
                  <Card.Img variant="top" src={`UPLOAD/${el.photo}`} />
                  <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>Price: {el.price}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

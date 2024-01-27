import React, { useEffect, useState } from "react";
import Lefty from "./Lefty";
import axios from "axios";

const ViewUser = () => {
  const [userData, setUserData] = useState({ users: [] });

  const getUser = async () => {
    try {
      const res = await axios("/getUser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = res.data;
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 border">
              <Lefty />
            </div>
            <div className="col-lg-8 border">
              {userData.users.map((user) => (
                <div key={user._id}>
                  <h2>{user.name}</h2>
                  <span>{user.email}</span>
                  <p>{user.mob}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;

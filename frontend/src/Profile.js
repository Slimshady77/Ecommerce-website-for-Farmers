import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutpage = async () => {
    try {
      const res = await fetch("/Profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/Login");
    }
  };

  useEffect(() => {
    callAboutpage();
  }, []);
  return (
    <>
      <div class="container mt-3">
        <h2>{userData.name}</h2>
        <br />

        <table class="table table-dark">
          <tbody>
            <tr>
              <td>Email</td>

              <td>phone</td>
            </tr>
            <tr>
              <td>{userData.email}</td>

              <td>{userData.mob}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Profile;

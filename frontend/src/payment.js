import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Balance from "./Balance";
import './style2.css'; 
import "./payment.js";

function Payment() { // Corrected component name
  const cardNumberRef = useRef(null);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
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
  }

  useEffect(() => {
    cardNumberRef.current.focus();
    callAboutPage();
  }, []);

  // Return JSX for the Payment component
  return (
    <>
     <div className="wrapper">
          <div className="credit-card">
            <div className="card-front">
              {/* Rest of your JSX */}
            </div>
            <div className="card-back">
              {/* Rest of your JSX */}
            </div>
            <form>
              {/* Rest of your JSX */}
              <div className="date-cvv">
                <div>
                  <label htmlFor="validity">Expiry on:</label>
                  <input type="date" id="validity-input" />
                </div>
                <div>
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="number"
                    id="cvv"
                    placeholder="***"
                    ref={cardNumberRef}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

function Profile() {
  const cardNumberRef = useRef(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
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
  }

  useEffect(() => {
    cardNumberRef.current.focus();
    callAboutPage();
  }, []);

  // Return JSX for the Profile component
  return (
    <>
    <div className="container mt-3">
    <h2>{userData.name}</h2>
    <br />

    <table className="table table-dark">
      <tbody>
        <tr>
          <td>Email</td>
          <td>Balance</td>
          <td>phone</td>
        </tr>
        <tr>
          <td>{userData.email}</td>
          <td>
            <Balance />
          </td>
          <td>{userData.mob}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
}

export { Payment, Profile }; // Export both components


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, pass } = user;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    });

    if (!res.ok) {
      window.alert("Invalid login");
      console.log("Invalid login");
    } else {
      const data = await res.json();
      window.alert("Valid login");
      navigate("/Profile");
    }
  };

  const forgetPassword = async () => {
    try {
      const res = await fetch(`/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });
      if (res.ok) {
        window.alert("Password reset email sent");
        toggleModal(); // Close the modal after successful email submission
      } else {
        window.alert("Failed to send password reset email");
      }
    } catch (error) {
      console.log(error);
      window.alert("Error occurred while sending password reset email");
    }
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div>
          <div className="modal-body">
            <div className="overlay">
              <div>
                <h2>FORGOT PASSWORD</h2>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={user.email}
                  onChange={handleInputs}
                />
                <button onClick={forgetPassword}>Submit</button>
              </div>
              <button className="close-modal" onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container bg-dark mt-5 w-50">
        <form className="p-5" onSubmit={postData}>
          <div className="d-grid">
            <button type="button" className="btn btn-danger btn-block">
              Registration form
            </button>
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              autoComplete="off"
            />
            <span className="input-group-text">@ your Email</span>
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
              name="pass"
              value={user.pass}
              onChange={handleInputs}
              autoComplete="off"
            />
            <span className="input-group-text">@your password</span>
          </div>

          <input
            type="submit"
            className="form-submit"
            name="submit"
            value="Submit"
          />
          <button className="form-submit" onClick={toggleModal}>
            Forgot Password
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

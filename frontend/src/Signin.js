import {NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();

  const [user, setUser] = useState([
    { name: '', email: '', mob: '', pass: '', cpass: '' }]
  );

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, mob, email, pass, cpass } = user;

    const res = await fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // This here
      body: JSON.stringify(
        { name, mob, email, pass, cpass })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("ivalid register");
      console.log("invalid register");
    }
    else {
      window.alert("valid register");
      console.log("valid register");
      navigate("/Signin");
    }
  }

  const clearArray = () => {
    setUser([{ name: '', email: '', mob: '', pass: '', cpass: '' }]);
  }




  return (
    <div className="container-sm">
      <div className="row">

        <form method="post" >

          <div className="mb-3">
            <label for="exampleInputtext" className="form-label" >First name</label>
            <input type="text" className="form-control" placeholder="Name" value={user.name} onChange={handleInputs} autoComplete='off' name="name" />

          </div>




          <div className="mb-3">
            <label for="exampleInputtext" className="form-label" >Mobile number</label>
            <input type="number" className="form-control" placeholder="Mobile number" value={user.mob} onChange={handleInputs} autoComplete='off' name="mob" />

          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email address</label>
            <input type="email" className="form-control" placeholder="Email" value={user.email} onChange={handleInputs} autoComplete='off' name="email" />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" >Password</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.pass} onChange={handleInputs} autoComplete='off' name="pass" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" >Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" value={user.cpass} onChange={handleInputs} autoComplete='off' name="cpass" />
          </div>


          <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
          <button className='btn' onClick={() => clearArray()}>Clear</button>

          <p>Already a Member!</p>
          <NavLink to="/Login" className="nav-link" >Sign in</NavLink>

        </form>
      </div>
    </div>



  )
}



export default Signin;
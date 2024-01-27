import React, { useState } from "react";
import axios from "axios";
import Lefty from "./Lefty";

const AddGallery = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    // birthdate:'',
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    // formData.append('birthdate', newUser.birthdate);
    formData.append("name", newUser.name);

    axios
      .post("/addgallery", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <>
      <div className="container w-50">
        <h1>upload image</h1>
        <div className="col-lg-4 border">
          <Lefty />
        </div>
        <form encType="multipart/form-data" method="POST" style={{ margin: 5 }}>
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto}
            />
          </div>

          <div class="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
            ></input>
          </div>

          {/* <div class="input-group">
          <input type='date' className='form-control' name="birthdate"  value={newUser.birthdate} onChange={handleChange}></input>
          </div> */}

          <button
            name="submit"
            onSubmit={handleSubmit}
            type="submit"
            style={{ margin: 5 }}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddGallery;

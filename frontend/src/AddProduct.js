import { useEffect, useState } from "react";
import axios from "axios";
import Lefty from "./Lefty";
const AddProduct = () => {
  const [user, setUser] = useState({
    name: "",
    photo: "",
    prod: "",
    desc: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("photo", user.photo);
    formData.append("prod", user.prod);
    formData.append("desc", user.desc);
    formData.append("price", user.price);

    axios
      .post("/addProduct", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //  const handleChange=(e)=>{
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //     [e.target.prod]: e.target.value,
  //     [e.target.desc]: e.target.value,
  //     [e.target.price]: e.target.value
  //   });
  // }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    setUser({ ...user, photo: e.target.files[0] });
  };

  return (
    <div>
      <div>
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-4 border border-danger">{<Lefty />}</div>
            <div class="col-lg-8 border border-danger">
              <form
                encType="multipart/form-data"
                method="POST"
                onSubmit={handleSubmit}
              >
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
                    value={user.name}
                    onChange={handleChange}
                  ></input>
                </div>

                <div class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="product"
                    name="prod"
                    value={user.prod}
                    onChange={handleChange}
                  ></input>
                </div>

                <div class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="desc"
                    value={user.desc}
                    onChange={handleChange}
                  ></input>
                </div>

                <div class="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="price"
                    name="price"
                    value={user.price}
                    onChange={handleChange}
                  ></input>
                </div>
                <button type="submit">submit</button>
              </form>

              {/* <form  encType='multipart/form-data' method="POST">
          <div className='input-group'>
            <input type='file' className='form-control' accept='.png, .jpg, .jpeg' name='photo' onChange={handlePhoto}  />

          </div>

          <div class="input-group">
          <input type='text' className='form-control' placeholder='name' name='name' value={user.name} onChange={handleChange}></input>
          </div>
        

        <div class="input-group">
          <input type='text' className='form-control'  placeholder='product' name="prod"  value={user.prod} onChange={handleChange}></input>
          </div>
          
          <div class="input-group">
          <input type='text' className='form-control'  placeholder='description' name="desc"  value={user.desc} onChange={handleChange}></input>
          </div>

          <div class="input-group">
          <input type='text' className='form-control' placeholder='price' name="price"  value={user.price} onChange={handleChange}></input>
          </div>
        <button  name="submit" onSubmit={handleSubmit} type="submit">submit</button>

         </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

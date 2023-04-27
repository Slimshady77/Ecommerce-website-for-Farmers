import {BrowserRouter, NavLink} from 'react-router-dom';


function Home(){
return(
    <>
  {/* Carousal Starts */}
 
<div className='container-fluid'>
<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
      <img src="./images/img1.jpg"  width="100%" height="60%" alt="hospital" /> 
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><button type='button' className="btn btn-lg btn-primary" data-bs-target="#staticBackdrop1">Sign up today</button></p>

            
            {/* Sign up Modal  */}

 {/* Modal  */}

<div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdrop1">Sign Up</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* FORM STARTS  */}
        <div className="container">
          <div className="row">

            <form method="post" action="/signup">

              <div className="mb-3">
                <label for="exampleInputtext" className="form-label" >First name</label>
                <input type="text" className="form-control" name="fname" />

              </div>

              <div className="mb-3">
                <label for="exampleInputtext" className="form-label" >Last name</label>
                <input type="text" className="form-control" name="lname" />

              </div>

              <div className="mb-3">
                <label for="exampleInputtext" className="form-label" >Mobile number</label>
                <input type="number" className="form-control" name="mob" />

              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" >Email address</label>
                <input type="email" className="form-control" name="email" />
                
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label" >Password</label>
                <input type="text" className="form-control" id="exampleInputPassword1" name="pass" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label" >Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="cpass" />
              </div>

{/* 
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>  */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
       {/* FORM ENDS  */}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>


    </div>
  </div>
</div>
 {/* Sign up modal ends  */}

          </div>
        </div>
      </div>
      <div className="carousel-item active">
      <img src="./images/2.jpg"  width="100%" height="60%" alt="hospital" /> 
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><NavLink className="btn btn-lg btn-primary" to="/">Learn more</NavLink></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="./images/3.jpg"  width="100%" height="60%" alt="hospital" /> 
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><NavLink className="btn btn-lg btn-primary" to="/">Browse gallery</NavLink></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="/myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="/myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>


{/* Carousal Ends */}

{/* Album Starts */}
<div className='container mt-5'>
<div className="row">
      <div className="col-lg-4 mx-auto text-center">
      <img src="./images/doc.jpg" className='bd-placeholder-img rounded circle' width="140" height="140" alt="doc" preserveAspectRatio="xMidYMid slice"/> 
        {/* <img className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <h2 className="fw-normal">11000+ Healing Hands</h2>
        <p>Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.</p>
        <p><NavLink className="btn btn-secondary" to="/">View details »</NavLink></p>
      </div>
      <div className="col-lg-4 mx-auto text-center">
      <img src="./images/meds.jpg" className='bd-placeholder-img rounded circle' width="140" height="140" alt="doc" preserveAspectRatio="xMidYMid slice"/> 
        <h2 className="fw-normal ">5000+ Pharmacies</h2>
        <p>Apollo Pharmacy is India’s first, largest and most trusted branded pharmacy network, with over 5000 plus outlets covering the entire nation</p>
        <p><NavLink className="btn btn-secondary" to="/">View details »</NavLink></p>
      </div>
      <div className="col-lg-4 mx-auto text-center">
      <img src="./images/lab.jpg" className='bd-placeholder-img rounded circle' width="140" height="140" alt="doc" preserveAspectRatio="xMidYMid slice"/> 
        <h2 className="fw-normal">Most Advanced Healthcare Technology</h2>
        <p>Apollo Hospitals has been the pioneer in bringing ground-breaking healthcare technologies to India.</p>
        <p><NavLink className="btn btn-secondary" to="/">View details »</NavLink></p>
      </div>
    </div>
    </div>
    
    
   
 {/* Album Ends */}

  {/* Featurate starts */} 

<div className='container mt-5'>
  <div className="row featurette mx-auto text-center">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Why Choose
Apollo Healthcare? <span className="text-body-secondary">WHO WE ARE</span></h2>
        <p className="lead">Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes</p>
      </div>
      <div className="col-md-5">
      <img src="./images/doc.jpg" className='bd-placeholder-img bd-placeholder-img-lg feturette-img img-fluid mx-auto' width="400" height="400" alt="doc" preserveAspectRatio="xMidYMid slice"/> 
       </div>
    </div>
    </div>
  {/* Featurate Ends */}

</>
)
}

export default Home;
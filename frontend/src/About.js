import { BrowserRouter, NavLink } from 'react-router-dom';

function About() {
  return (


    <>
      {/* Featurate starts */}

      <div className='container mt-5'>
        <div className="row featurette mx-auto text-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Why Choose BIGHAT</h2>
            <span className="text-body-secondary">WHO WE ARE</span>
          <p className="lead">"Transforming the Future of Farmers"



            BigHaat is founded by a team of avid entrepreneurs in the year 2015. BigHaat is India’s leading Agri Digital Platform transforming the agriculture value chain from pre-harvest to post-harvest leveraging science, data and technology. It is impacting millions of farmers across the country by providing accessibility of extensive range of high quality inputs, end to end crop guidance and market linkages for various commodities, thus offering 360 degree solution to farmers with a very unique approach. </p>
        </div>
        <div className="col-md-5">
          <img src="./images/doc.jpg" className='bd-placeholder-img bd-placeholder-img-lg feturette-img img-fluid mx-auto' width="400" height="400" alt="doc" preserveAspectRatio="xMidYMid slice" />
        </div>
      </div>
    </div >
      {/* Featurate Ends */ }
      < div className = "container px-4 py-5" id = "hanging-icons" >
    <h2 className="pb-2 border-bottom">Hanging icons</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em" to="/toggles2"></svg>
        </div>
        <div>
          <h3 className="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <NavLink to="/" className="btn btn-primary">
            Primary button
          </NavLink>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em" to="/cpu-fill"></svg>
        </div>
        <div>
          <h3 className="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <NavLink to="/" className="btn btn-primary">
            Primary button
          </NavLink>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em" to="/tools"> </svg>
        </div>
        <div>
          <h3 className="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <NavLink to="/" className="btn btn-primary">
            Primary button
          </NavLink>
        </div>
      </div>
    </div>
  </div >
  </>
)
}
export default About;
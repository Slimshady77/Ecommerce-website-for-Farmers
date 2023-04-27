import {BrowserRouter, NavLink} from 'react-router-dom';

function About(){
return(
    <div className="container px-4 py-5" id="hanging-icons">
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
  </div>
)
}
export default About;
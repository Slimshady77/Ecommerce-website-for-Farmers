import { BrowserRouter, NavLink } from 'react-router-dom';

export const Lefty  = () => {
  return (
    <div>
        <div class='container-text-center'>
            <div class='row'>
              
                <li className="nav-item">
                <NavLink to="/ViewGallery" className="nav-link" >View Gallery</NavLink>
                <NavLink to="/ViewAddProduct" className="nav-link" >View Product</NavLink>
                <NavLink to="/ViewUser" className="nav-link" >ViewUser</NavLink>
                <NavLink to="/AddProduct" className="nav-link" >Add Product</NavLink>
                <NavLink to="/AddGallery" className="nav-link" >Add Gallery</NavLink>

              </li>  
            </div>
        </div>
    </div>
  )
}
export default Lefty;

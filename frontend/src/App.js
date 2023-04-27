import { BrowserRouter, BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Example from './Example';
import Signin from './Signin';
import Login from './Login';
import Dashboard from './Dashboard';
import ViewGallery from './ViewGallery';
import ViewUser from './ViewUser';
import AddProduct from './AddProduct';
import Profile from './Profile';
import ContactUs from './ContactUs';
import AddGallery from './AddGallery';
import Gallery from './Gallery';
import ViewAddProduct from './ViewAddProduct';


function App(){

return(
    <>
<BrowserRouter>
  
    {<Header/>}
   <Routes>
   <Route path='/' element={< Home/>}></Route>

   <Route path='/About' element={< About/>}></Route>

   <Route path='/Gallery' element={< Gallery/>}></Route>


   <Route path='/Example' element={< Example/>} ></Route>

   <Route path='/Signin' element={< Signin/>}> </Route>

   <Route path='/Login' element={< Login/>}> </Route>
   
   <Route path='/Dashboard' element={<Dashboard/>}> </Route>

   <Route path='/ViewGallery' element={<ViewGallery/>}> </Route>

   <Route path='/AddProduct' element={<AddProduct/>}> </Route>

   <Route path='/ViewUser' element={<ViewUser/>}> </Route>

   <Route path='/Profile' element={<Profile/>}> </Route>

   <Route path='/ContactUs' element={<ContactUs/>}> </Route>

   <Route path='/AddGallery' element={<AddGallery/>}> </Route>

   <Route path='/ViewAddProduct' element={<ViewAddProduct/>}> </Route>






   </Routes>
   </BrowserRouter>
   {<Footer/>}
    
    </>
)
}
export default App;